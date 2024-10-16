// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; 
import AddExpense from './pages/AddExpense';  
import EditExpense from './pages/EditExpense'; // Ensure this points to the correct file
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/home" element={<Home />} /> {/* Updated to /home for consistency */}
                <Route path="/add" element={<AddExpense />} />
                <Route path="/edit" element={<EditExpense />} />
            </Routes>
        </Router>
    );
};

export default App;
