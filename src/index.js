import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import UserProvider from "./storage/UserProvider";
import MovieProvider from './storage/MovieProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <MovieProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MovieProvider>
    </UserProvider>
  </React.StrictMode>
);