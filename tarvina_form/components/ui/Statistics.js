// components/ui/Statistics.js

import React from 'react';
import { FaBusinessTime, FaUser, FaBox } from 'react-icons/fa'; // İstatistik ikonları

const stats = [
  { icon: <FaBusinessTime size={50} />, number: "249 Bin", text: "İşletme" },
  { icon: <FaUser size={50} />, number: "1.6 Milyon", text: "Bireysel Satıcı" },
  { icon: <FaBox size={50} />, number: "758 Milyon", text: "Adet Ürün Satışı" },
];

const Statistics = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between items-center mt-6">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center bg-white shadow-lg p-6 m-2 rounded-lg text-center">
          <div className="text-orange-500 mb-2">{stat.icon}</div>
          <p className="text-2xl font-bold text-gray-800">{stat.number}</p>
          <p className="text-md text-gray-600">{stat.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;