// src/pages/AddExpense.js
import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';
import ExpenseForm from '../components/ExpenseForm';

const AddExpense = ({ history }) => {
  const { dispatch } = useContext(ExpenseContext);

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
    history.push('/');
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <ExpenseForm onSubmit={addExpense} />
    </div>
  );
};

export default AddExpense;
