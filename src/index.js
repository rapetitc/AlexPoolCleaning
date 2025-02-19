import React from 'react';
import ReactDOM from 'react-dom/client';

import FSProvider from "./Context/FSContext";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FSProvider>
      <App />
    </FSProvider>
  </React.StrictMode>
);