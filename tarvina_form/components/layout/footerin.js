import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // React Icons'tan sosyal medya ikonları

const Footerin = () => {
  return (
    <footer className="bg-gray-800 border-t text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl text-gray-100">Tarvina</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          ©2024 DSM Grup Danışmanlık İletişim ve Satış Tic. A.Ş. Her hakkı saklıdır.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="#" className="text-gray-200">
            <FaFacebookF />
          </a>
          <a href="#" className="ml-3 text-gray-200">
            <FaTwitter />
          </a>
          <a href="#" className="ml-3 text-gray-200">
            <FaInstagram />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footerin;
