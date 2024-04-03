// components/ui/StarRating.js
import React from 'react';
import Star from './Star';

const StarRating = ({ rating, setRating, interactive = false }) => {
  
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          onClick={interactive ? () => setRating(star) : undefined}
        />
      ))}
    </div>
  );
};

export default StarRating;
