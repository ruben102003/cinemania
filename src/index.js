import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importar BrowserRouter
import './index.css';
import App from './App';

ReactDOM.render(
  <Router> {/* Envolver la aplicación con Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
