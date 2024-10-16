import { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ExpenseContext = createContext();

const initialState = {
  expenses: JSON.parse(localStorage.getItem('expenses')) || [],
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, { ...action.payload, id: uuidv4() }] };
    case 'EDIT_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      };
    case 'DELETE_EXPENSE':
      return { ...state, expenses: state.expenses.filter((expense) => expense.id !== action.payload) };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // Update local storage whenever expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
  }, [state.expenses]);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
