import React from 'react';

const ReviewFilters = ({ setFilter, reviewCount }) => {
  return (
    <div className="text-center mb-4">
      <div className="font-semibold mb-2">
        {/* İçeriği gerektiği gibi ekleyebilirsiniz */}
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3"> {/* Ekran genişliğine göre daha dinamik bir boşluk ayarlama */}
        {/* Tüm yorumları göster butonu */}
        <button
          onClick={() => setFilter({ type: 'all' })}
          className="px-3 py-1 text-sm bg-white text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors duration-200"
        >
          Tümü
        </button>
        {/* Yıldız puanlarına göre filtreleme butonları */}
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setFilter({ type: 'rating', value: star })}
            className="px-3 py-1 text-sm bg-white text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors duration-200"
          >
            {Array(star)
              .fill('★')
              .join('')} ({star})
          </button>
        ))}
        {/* Fotoğraflı yorumlar için filtreleme butonu */}
        <button
          onClick={() => setFilter({ type: 'photo' })}
          className="px-3 py-1 text-sm bg-white text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors duration-200"
        >
          Fotoğraflı Yorumlar
        </button>
      </div>
    </div>
  );
};

export default ReviewFilters;
