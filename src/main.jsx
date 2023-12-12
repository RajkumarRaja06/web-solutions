import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DataProvider } from './context/dataContext.jsx';
import { CartProvider } from './context/cartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </CartProvider>
  </React.StrictMode>
);
