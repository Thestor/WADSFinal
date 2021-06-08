import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Main from "./components/Testing/Main";
import "./components/Testing/index.css";


import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

