import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Menü açma ve kapatma ikonları için

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobil menüyü kontrol etmek için state

  return (
    <>
      <nav className="bg-orange-500 border-b-4 border-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <a href="/" className="text-xl font-semibold text-white hover:text-orange-200">
            TARVİNA PAZAR
          </a>
          
          <div className="sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div className={`hidden sm:flex sm:items-center ${isMenuOpen ? 'sm:hidden' : ''}`}>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-orange-200 hover:bg-orange-600 focus:outline-none focus:text-orange-200 focus:bg-orange-600 transition duration-150 ease-in-out">
              Satıcı Bilgi Merkezi
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-orange-200 hover:bg-orange-600 focus:outline-none focus:text-orange-200 focus:bg-orange-600 transition duration-150 ease-in-out">
              Tarvina Akademi
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-orange-200 hover:bg-orange-600 focus:outline-none focus:text-orange-200 focus:bg-orange-600 transition duration-150 ease-in-out">
    Yardım & Destek
  </a>
          </div>
        </div>

        {/* Mobil menü */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50">
            <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <button onClick={() => setIsMenuOpen(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <FaTimes size={24} />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                <nav className="grid gap-y-8">
  {/* Satıcı Bilgi Merkezi Linki */}
  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 bg-white hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-orange-600 transition duration-150 ease-in-out">
    Satıcı Bilgi Merkezi
  </a>
  {/* Tarvina Akademi Linki */}
  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 bg-white hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-orange-600 transition duration-150 ease-in-out">
    Tarvina Akademi
  </a>
  {/* Örnek için bir ekstra link */}
  <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 bg-white hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-orange-600 transition duration-150 ease-in-out">
    Yardım & Destek
  </a>
</nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
