// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform registration logic here (e.g., API call)
        console.log("Registering with", email, password);
        navigate('/login'); // Redirect to login after registration
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Register</h2>
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
                <TextField 
                    label="Confirm Password" 
                    type="password" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                />
                <Button variant="contained" color="primary" type="submit">Register</Button>
                <div>
                    <p>Already have an account? <a href="/login">Login here</a></p>
                </div>
            </form>
        </div>
    );
};

export default Register;
