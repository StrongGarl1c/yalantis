import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Birthday from './components/Birthday';
import Employees from './components/Employees';
// import Test from './components/Test';
// import TestHook from './components/TestHook';
// import TestLocalStorage from './components/TestLocalStorage';

ReactDOM.render(
  <React.StrictMode>
    <div className="grid">
      <Employees />
      <Birthday />
    </div>
    {/* <Test /> */}
    {/* <TestHook /> */}
    {/* <TestLocalStorage /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
