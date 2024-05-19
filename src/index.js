import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QrCode from './qr-code/qrCode';
import BgRemover from './remove-bg/BgRemover';
import TextToSpeech from './text-speech/TextToSpeech';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StockSearch from './stock-search/StockSearch';
import ImageToText from './img-text/ImageToText';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/qr-code' element={<QrCode />} />
        <Route path='/remove-bg' element={<BgRemover />} />
        <Route path='/text-speech' element={<TextToSpeech />} />
        <Route path='/stock-search' element={<StockSearch />} />
        <Route path='/img-text' element={<ImageToText />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);