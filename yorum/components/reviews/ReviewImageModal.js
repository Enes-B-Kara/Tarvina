import React from 'react';

const ReviewImageModal = ({ closeModal, imageUrls, selectedImageIndex, review }) => {
  const { username, date, title, content, rating, store } = review;

  const displayedUsername = `${username.charAt(0)}${'*'.repeat(username.length - 1)}`;
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`star ${index < rating ? 'text-yellow-500' : 'text-gray-300'} text-xl`}>
      ★
    </span>
  ));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 p-4" onClick={closeModal}>
      <div className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all my-4 mx-auto max-w-4xl">
        {/* Yorum Kartının Üst Kısmı */}
        <div className="bg-black bg-opacity-50 text-white p-2 text-center text-sm">
          Fotoğraf Değerlendirmeleri ({selectedImageIndex + 1}/{imageUrls.length})
        </div>
        
        {/* Resim ve Yorum Detayları */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={imageUrls[selectedImageIndex]}
              alt={`Review image ${selectedImageIndex + 1}`}
              className="object-scale-down w-full h-full"
            />
          </div>
          <div className="md:w-1/2 p-4 flex flex-col justify-between">
            <div>
              <div className="text-lg font-bold">{title}</div>
              <div className="text-sm text-gray-600">{displayedUsername} - {date}</div>
              <div className="flex my-2">{stars}</div>
              <p className="text-gray-800">{content}</p>
            </div>
            <p className="text-gray-500 text-xs self-end">{store ? `Bu ürün ${store} satıcısından alındı.` : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewImageModal;
