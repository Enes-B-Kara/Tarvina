// pages/download.js
import React from 'react';
import QRCodeComponent from '../components/ui/QRCode';

const DownloadPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-8">Uygulamamızı İndirin</h2>
      <div className="w-full sm:w-auto">
        <QRCodeComponent />
      </div>
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-center w-full">
        <a href="https://app.adjust.com/hlu961v?deep_link=tysc%3A%2F%2FDashboard&campaign=app_download_android&label=sc_dashboard" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
          Google Play
        </a>
        <a href="https://app.adjust.com/bs8x9on?deep_link=tysc%3A%2F%2FDashboard&campaign=app_download_ios&label=sc_dashboard" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
          App Store
        </a>
      </div>
    </div>
  );
};

export default DownloadPage;