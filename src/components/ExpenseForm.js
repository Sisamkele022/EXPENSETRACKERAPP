// src/components/ExpenseForm.js (modified to use Material-UI)
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


const ExpenseForm = ({ onSubmit, expense }) => {
  const [description, setDescription] = useState(expense ? expense.description : '');
  const [amount, setAmount] = useState(expense ? expense.amount : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ description, amount: parseFloat(amount) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Amount"
            variant="outlined"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Save Expense
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ExpenseForm;
