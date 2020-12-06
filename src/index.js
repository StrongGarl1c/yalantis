import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Employees from './components/Employees';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Employees />
  </React.StrictMode>,
  document.getElementById('root'),
);
