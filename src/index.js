import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Birthday from './components/Birthday';
import Employees from './components/Employees';

ReactDOM.render(
  <React.StrictMode>
    <div className="grid">
      <Employees />
      <Birthday />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
