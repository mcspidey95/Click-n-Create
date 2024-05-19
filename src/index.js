import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QrCode from './qr-code/qrCode';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/qr-code' element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);