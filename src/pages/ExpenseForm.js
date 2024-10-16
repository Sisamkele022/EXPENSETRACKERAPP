// src/components/ExpenseForm.js
import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ onSubmit, expense }) => {
  const [description, setDescription] = useState(expense ? expense.description : '');
  const [amount, setAmount] = useState(expense ? expense.amount : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ description, amount: parseFloat(amount) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Save Expense</button>
    </form>
  );
};

export default ExpenseForm;
