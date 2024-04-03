import React, { useState } from 'react';

const ReviewImageGallery = ({ imageUrls }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Resimlerin küçük önizlemeleri */}
      <div className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Review image ${index}`}
            className="h-16 sm:h-20 object-cover cursor-pointer flex-none"
            onClick={() => openModal(index)}
            style={{ minWidth: '60px', maxWidth: '80px' }} // Mobil cihazlarda daha uygun görünüm sağlamak için genişliği ayarlayabiliriz.
          />
        ))}
      </div>

      {/* Modal, büyük resim görüntüleyici */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
          <img 
            src={imageUrls[selectedImageIndex]} 
            alt={`Review image ${selectedImageIndex}`} 
            className="max-w-full max-h-full p-4" // padding ekleyerek resmi kenarlardan biraz uzak tutuyoruz.
            style={{ maxHeight: '80vh' }} // Mobil cihazlarda büyük resmin ekranın %80'inden daha büyük olmamasını sağlıyoruz.
          />
          <button 
            onClick={closeModal} 
            className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl focus:outline-none"
          >
            &times; {/* Bu çarpı işareti, modal kapatma butonu olarak kullanılıyor. */}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewImageGallery;
