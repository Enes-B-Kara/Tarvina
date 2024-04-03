// components/reviews/ProductRating.js
import StarRating from '../ui/StarRating';

const ProductRating = ({ rating, reviewCount }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
      <div>
        <div className="text-3xl font-bold text-yellow-400">{rating}</div>
        <StarRating rating={rating} />
      </div>
    
    </div>
  );
};

export default ProductRating;
