import React, { useState } from 'react';
import './style.css';
import { ChevronLeft } from 'lucide-react';


const QrCode = () => {
  const [qrText, setQrText] = useState('');
  const [qrImageSrc, setQrImageSrc] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event) => {
    setQrText(event.target.value);
    setIsError(false); // Reset error state on input change
  };

  const generateQR = () => {
    if (qrText.length > 0) {
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;
      setQrImageSrc(qrUrl);
    } else {
      setIsError(true);
    }
  };

  return (
    <body>
      <a href='/'><h2 className='h2'><ChevronLeft size={60} /></h2></a>
    <div className="container">
      <p>Enter Text or URL</p>
      <input
        type="text"
        id="qrText"
        placeholder="Enter Herey"
        value={qrText}
        onChange={handleInputChange}
        className={isError ? 'error' : ''} // Add error class conditionally
      />
      <div className='img'>
        {qrImageSrc && <div className='image'><img src={qrImageSrc} id="qrImage" alt="QR Code" /></div>}
      </div>
      <button className='container-button' onClick={generateQR}>Generate QR Code</button>
      {isError && <p className="error-message">Please enter text or URL to generate QR Code.</p>}
    </div>
    </body>
  );
};

export default QrCode;

