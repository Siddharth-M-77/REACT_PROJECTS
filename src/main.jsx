// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CounterProvider } from './utils/CounterContext';
import { ThemeProvider } from './utils/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CounterProvider>
  </React.StrictMode>
);
