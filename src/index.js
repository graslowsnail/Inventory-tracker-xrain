import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Login from './login/Login.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage?.getItem('token');

root.render(
    <App>
    {token ? <App /> : <Login />}
    </App>
);


/*
root.render(
    <React.StrictMode>
    {token ? <App /> : <Login />}
    </React.StrictMode>
);

/* this was in the root.render before
    * this was causing curtin pages to render twice not sure why but oh well
  <React.StrictMode>
    <App />
  </React.StrictMode>
    */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
