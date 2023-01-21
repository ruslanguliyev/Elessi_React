import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'remixicon/fonts/remixicon.css'
import { ToastContainer } from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <ToastContainer theme="dark" position="top-right" autoClose={3000} closeOnClick pauseOnHover={false} />
      <App />
    </Provider>
  </BrowserRouter>
);

