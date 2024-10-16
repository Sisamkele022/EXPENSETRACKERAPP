// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here (e.g., API call)
        console.log("Logging in with", email, password);
        navigate('/dashboard'); // Redirect to dashboard after login
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Email" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <TextField 
                    label="Password" 
                    type="password" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <Button variant="contained" color="primary" type="submit">Login</Button>
                <div>
                    <p>Don't have an account? <a href="/register">Register here</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
