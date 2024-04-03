import React, { useState } from 'react';
import ReviewList from '../components/reviews/ReviewList';
import ProductRating from '../components/reviews/ProductRating';
import ReviewFilters from '../components/reviews/ReviewFilters';
import reviewsData from '../components/reviews/reviewsData';
import ReviewModal from '../components/ui/ReviewModal';

const ReviewsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState({ type: 'all' });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const filteredReviews = reviewsData.filter((review) => {
    switch (filter.type) {
      case 'rating':
        return review.rating === filter.value;
      case 'photo':
        return review.imageUrls && review.imageUrls.length > 0;
      case 'all':
      default:
        return true;
    }
  });

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-6 mb-4">Tüm Ürün Değerlendirmeleri</h1>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <ProductRating rating={4.4} />
        <span className="mt-4 sm:mt-0">{filteredReviews.length} Yorum</span>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <ReviewFilters setFilter={setFilter} />
        <button
          onClick={handleOpenModal}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-start sm:self-auto"
        >
          Yorum Ekle
        </button>
      </div>

      <ReviewList reviews={filteredReviews} />
      {isModalOpen && <ReviewModal closeModal={handleCloseModal} />}
    </div>
  );
};

export default ReviewsPage;
