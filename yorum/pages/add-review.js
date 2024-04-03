import React, { useState } from 'react';
import StarRating from '../components/ui/StarRating';
import ReviewForm from '../components/reviews/ReviewForm';

const WriteReviewPage = () => {
  const [rating, setRating] = useState(0);

  const handleFormSubmit = (reviewData) => {
    console.log(reviewData);
    // API'ye gönderme işlemi burada yapılabilir.
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center my-6">Yorum Yap</h1>
      <div className="flex flex-col items-center">
        <StarRating rating={rating} setRating={setRating} interactive={true} className="mb-4" />
        <ReviewForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default WriteReviewPage;
