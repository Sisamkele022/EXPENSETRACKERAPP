import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleAddExpense = () => {
        navigate('/add');
    };

    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: '#f0f2f5',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                Welcome, Sisamkele Vava!
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAddExpense} 
                sx={{ alignSelf: 'flex-end', mb: 3 }}
            >
                Add Expenses
            </Button>
            <Grid container spacing={3} sx={{ maxWidth: '900px', width: '100%' }}>
                {/** Expense Overview Cards */}
                {[
                    { title: 'Total Expenses', value: 'R15800', color: '#3f51b5' },
                    { title: 'Monthly Budget', value: 'R18000', color: '#4caf50' },
                    { title: 'Remaining Budget', value: 'R2500', color: '#f44336' }
                ].map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={4} sx={{
                            p: 3,
                            textAlign: 'center',
                            backgroundColor: item.color,
                            color: 'white',
                            borderRadius: 2,
                        }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>{item.value}</Typography>
                        </Paper>
                    </Grid>
                ))}

                {/** Recent Transactions */}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{
                        p: 3,
                        borderRadius: 2,
                        backgroundColor: 'white',
                    }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                            Recent Transactions
                        </Typography>
                        {[
                            { name: 'Rent', amount: 'R5200' },
                            { name: 'Grocery', amount: 'R3500' },
                            { name: 'Utilities', amount: 'R1200' },
                            { name: 'Transportation', amount: 'R1200' },
                            { name: 'Insurance', amount: 'R520' }
                        ].map((transaction, index) => (
                            <Typography 
                                key={index} 
                                variant="body1" 
                                sx={{ color: '#555', borderBottom: '1px solid #ddd', py: 1 }}
                            >
                                {index + 1}. {transaction.name} - <strong>{transaction.amount}</strong>
                            </Typography>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
