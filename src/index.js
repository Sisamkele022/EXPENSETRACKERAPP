// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ExpenseProvider } from './context/ExpenseContext';

ReactDOM.render(
  <ExpenseProvider>
    <App />
  </ExpenseProvider>,
  document.getElementById('root')
);
