import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WorldMap  from './WorldMap';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <WorldMap />,
  document.getElementById('map')
);
