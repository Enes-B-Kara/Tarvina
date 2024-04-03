import React, { useState } from 'react';
import ProductRating from '../components/reviews/ProductRating';
import ReviewList from '../components/reviews/ReviewList';
import Link from 'next/link';
import reviewsData from '../components/reviews/reviewsData';
import ReviewModal from '../components/ui/ReviewModal'; // Modal bileşenini import ediyoruz

export default function HomePage() {
  // Modal'ın görünürlüğü için bir state tanımlıyoruz
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ürün puanı ve yorum sayısı için mock data
  const mockData = {
    rating: 4.4,
    reviewCount: reviewsData.length // Tüm yorum sayısı olarak reviewsData'nın uzunluğunu kullanıyoruz
  };

  // İlk 5 yorumu seçiyoruz
  const firstFiveReviews = reviewsData.slice(0, 5);

  // Modal'ı açan fonksiyon
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Modal'ı kapatan fonksiyon
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-6">Ürün Değerlendirmeleri</h1>
      <p className="text-lg text-center mb-6">Hoş geldiniz! En güncel kullanıcı değerlendirmelerini burada bulabilirsiniz.</p>
      
      <div className="text-center my-4">
        {/* "Yorum Ekle" butonu */}
        <button
          onClick={handleOpenModal}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Yorum Ekle
        </button>

        {/* Daha Fazla Yorum Göster butonu */}
        <Link href="/reviews" passHref>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4">
            Daha Fazla Yorum Göster
          </button>
        </Link>
      </div>

      <ProductRating rating={mockData.rating} reviewCount={mockData.reviewCount} />
      <ReviewList reviews={firstFiveReviews} />

      {/* ReviewModal bileşeni */}
      {isModalOpen && <ReviewModal closeModal={handleCloseModal} />}
    </div>
  );
}
