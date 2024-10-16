// src/pages/EditExpense.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EditExpense = () => {
    const navigate = useNavigate();

    // Sample expense data - replace this with data from your API or state management
    const [expense, setExpense] = useState({
        id: '',
        title: '',
        amount: '',
        date: ''
    });

    // Example to simulate fetching data when editing
    useEffect(() => {
        // Replace this with an actual fetch request to get the expense data by ID
        const fetchedExpense = {
            id: '1',
            title: 'Rent',
            amount: '5200',
            date: '2024-09-01'
        };
        setExpense(fetchedExpense);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense({ ...expense, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the update logic here (e.g., API call)
        console.log("Updated Expense:", expense);
        navigate('/dashboard'); // Redirect to the dashboard after editing
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <Typography variant="h4" gutterBottom>
                Edit Expense
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    name="title"
                    value={expense.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Amount"
                    name="amount"
                    type="number"
                    value={expense.amount}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Date"
                    name="date"
                    type="date"
                    value={expense.date}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <Button variant="contained" color="primary" type="submit">
                    Save Changes
                </Button>
            </form>
        </Box>
    );
};

export default EditExpense;
