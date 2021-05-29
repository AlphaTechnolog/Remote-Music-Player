import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const theme = localStorage.getItem('theme') || 'litera';
require(`bootswatch/dist/${theme}/bootstrap.min.css`);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
