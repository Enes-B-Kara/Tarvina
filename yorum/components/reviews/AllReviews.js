// components/reviews/AllReviews.js
import React from 'react';
import ReviewList from './ReviewList';

const AllReviews = ({ reviews }) => {
  return (
    <div>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default AllReviews;
