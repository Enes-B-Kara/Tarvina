import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // React Icons'tan sosyal medya ikonları

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between -mx-4">
          <div className="px-4 w-full lg:w-auto mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-2">TARVİNA PAZAR</h2>
            <p className="text-sm text-gray-400">
              Sizin için en iyisini sunmayı amaçlayan online alışveriş platformunuz.
            </p>
          </div>

          <div className="px-4 w-full md:w-auto flex justify-center items-center mb-8 lg:mb-0">
            {/* Sosyal Medya Linkleri */}
            <a href="#" className="mr-6 text-gray-400 hover:text-white">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#" className="mr-6 text-gray-400 hover:text-white">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>

          <div className="px-4 w-full lg:w-auto">
            <h3 className="text-lg font-bold mb-2">Hızlı Erişim</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white">Satıcı Bilgi Merkezi</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Tarvina Akademi</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Yardım & Destek</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-xs text-gray-400">
            &copy; 2024 TARVİNA PAZAR. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
