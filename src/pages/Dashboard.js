// src/pages/Dashboard.js
import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleAddExpense = () => {
        navigate('/add'); // Navigate to AddExpense page
    };

    return (
        <Box sx={{ flexGrow: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" gutterBottom>
                Welcome, Sisamkele Vava!
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAddExpense} 
                sx={{ position: 'absolute', top: '20px', right: '20px' }}
            >
                Add Expenses
            </Button>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ padding: '16px', backgroundColor: '#3f51b5', color: 'white' }}>
                        <Typography variant="h6">Total Expenses</Typography>
                        <Typography variant="h4">R15800</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ padding: '16px', backgroundColor: '#4caf50', color: 'white' }}>
                        <Typography variant="h6">Monthly Budget</Typography>
                        <Typography variant="h4">R18000</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ padding: '16px', backgroundColor: '#f44336', color: 'white' }}>
                        <Typography variant="h6">Remaining Budget</Typography>
                        <Typography variant="h4">R2500</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ padding: '16px', backgroundColor: '#fff' }}>
                        <Typography variant="h5">Recent Transactions</Typography>
                        <Typography variant="body1">1. Rent - R5200</Typography>
                        <Typography variant="body1">2. Grocery - R3500</Typography>
                        <Typography variant="body1">3. Utilities - R1200</Typography>
                        <Typography variant="body1">4. Transportation - R1200</Typography>
                        <Typography variant="body1">5. Insurance - R520</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
