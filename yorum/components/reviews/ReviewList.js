// components/reviews/ReviewList.js
import React from 'react';
import ReviewCard from './ReviewCard'; // Bu, her bir yorum için kart gösterimi yapan bileşeniniz.

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} /> // ReviewCard bileşeni içinde fotoğraf gösterecek şekilde güncellenmelidir.
      ))}
    </div>
  );
};

export default ReviewList;
