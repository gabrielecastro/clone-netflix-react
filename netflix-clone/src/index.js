import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context/AppProvider';

ReactDOM.render(
  <AppProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </AppProvider>,

  document.getElementById('root')
);
