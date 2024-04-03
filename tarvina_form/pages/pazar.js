import React from 'react';
import ApplicationCard from '../components/ui/ApplicationCard';

export default function pazar() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-0 bg-gray-50 text-center">
      <div className="container mx-auto px-4 sm:px-6 mt-8 lg:mt-28 bg-white shadow-xl rounded-lg">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-4">Tarvina ile İşinizi Büyütün!</h1>
        <p className="text-sm sm:text-md md:text-lg text-gray-600 mb-8">
          İşletme türünüzü seçerek başvurunuzu hızlıca tamamlayabilir, Türkiye ve Orta Doğu’nun en büyük mobil teknoloji şirketi Tarvina ile işletmenizi büyütebilirsiniz!
        </p>
        <ApplicationCard /> {/* className="mt-5" kaldırıldı, gerekirse ApplicationCard içinde ayarlayın */}
      </div>
    </div>
  );
}
