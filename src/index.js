import React from 'react';
import ReactDOM from 'react-dom/client';
import {  Flowbite } from "flowbite-react";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Flowbite>
    <App />
    </Flowbite>
  </React.StrictMode>
);
