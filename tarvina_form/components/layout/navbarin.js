import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa'; // Menü açma ve kapatma ikonları

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSatıcıOlTarvina = () => {
    router.push('/pazar'); // '/pazar' sayfasına yönlendir
  };

  return (
    <nav className="bg-gray-700 shadow-lg relative">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          {/* Website Logo */}
          <a href="#" className="flex items-center py-5 px-2">
            <span className="font-semibold text-white text-lg">Tarvina</span>
          </a>
        </div>

        {/* Hamburger menü butonu */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-expanded={isMenuOpen} aria-label="Menüyü aç/kapat">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigasyon Linkleri */}
        <div className={`md:flex items-center ${isMenuOpen ? "flex" : "hidden"} flex-col md:flex-row space-y-4 md:space-y-0 mt-4 md:mt-0`}>
          <a href="#" className="py-2 px-4 text-white font-semibold hover:bg-gray-700 rounded transition duration-300">Satıcı Bilgi Merkezi</a>
          <a href="#" className="py-2 px-4 text-white font-semibold hover:bg-gray-700 rounded transition duration-300">Tarvina Akademi</a>
          <button onClick={handleSatıcıOlTarvina} className="py-2 px-4 bg-orange-600 text-white rounded hover:bg-orange-700 transition duration-300">
            TARVİNA'DA SATICI OLUN
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full left-0 z-10 flex flex-col items-center space-y-4 pb-4 bg-gray-800 shadow-lg">
          {/* Menü içerikleri burada tekrar edilebilir veya yukarıdaki gibi tek menü kullanılabilir */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
