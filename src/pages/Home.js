// src/pages/Home.js
import React, { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  const { expenses } = state;

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <Link to="/add">Add Expense</Link>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.description} - ${expense.amount}</span>
            <Link to={`/edit/${expense.id}`}>Edit</Link>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
