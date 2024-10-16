// src/pages/Home.js (modified to use Material-UI)
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpenseContext from '../context/ExpenseContext';



const Home = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  const { expenses } = state;

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <Link to="/add">
        <Button variant="contained" color="primary">Add Expense</Button>
      </Link>
      <List>
        {expenses.map((expense) => (
          <ListItem key={expense.id}>
            <ListItemText primary={`${expense.description} - $${expense.amount}`} />
            <Button variant="outlined" onClick={() => deleteExpense(expense.id)}>Delete</Button>
            <Link to={`/edit/${expense.id}`}>
              <Button variant="outlined">Edit</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
