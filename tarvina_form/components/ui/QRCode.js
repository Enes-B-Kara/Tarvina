// components/ui/QRCode.js
import React from 'react';


const QRCodeComponent = ({ url }) => {
  return (
    <div className="text-center">
      <img src="https://cdn.dsmcdn.com/shared/images/mobile-app-qr.svg" alt="App QR Code" className="mx-auto" style={{ width: '130px', height: '130px' }} />
      <p>Uygulamayı indirmek için QR kodunu tarayın.</p>
    </div>
  );
};

export default QRCodeComponent;
