// components/reviews/ReviewCard.js
import React, { useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp, FaRegThumbsDown, FaThumbsDown } from 'react-icons/fa';
import StarRating from '../ui/StarRating'; // StarRating komponentinin doğru yoldan import edildiğini kontrol edin
import ReviewImageModal from './ReviewImageModal'; // ReviewImageModal komponentinin doğru yoldan import edildiğini kontrol edin

function maskUsername(username) {
  return `${username.charAt(0)}${'*'.repeat(username.length - 1)}`;
}

const ReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(review.likes);
  const [dislikes, setDislikes] = useState(review.dislikes || 0);
  const [likeStatus, setLikeStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleLike = () => {
    if (likeStatus !== 'liked') {
      setLikes(likes + 1);
      setDislikes(likeStatus === 'disliked' ? dislikes - 1 : dislikes);
      setLikeStatus('liked');
    } else {
      setLikes(likes - 1);
      setLikeStatus(null);
    }
  };

  const handleDislike = () => {
    if (likeStatus !== 'disliked') {
      setDislikes(dislikes + 1);
      setLikes(likeStatus === 'liked' ? likes - 1 : likes);
      setLikeStatus('disliked');
    } else {
      setDislikes(dislikes - 1);
      setLikeStatus(null);
    }
  };
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="my-4 mx-auto max-w-xl sm:max-w-3xl p-2 sm:p-4 rounded-lg shadow-lg bg-white">
      <div className="font-bold text-lg sm:text-xl mb-2">{review.title}</div>
      <StarRating rating={review.rating} />
      <p className="text-gray-600 text-sm sm:text-base my-2">{review.content}</p>
      <div className="text-gray-500 text-xs sm:text-sm mb-2">
        {maskUsername(review.username)} | {review.date}
      </div>
      <div className="flex flex-wrap -m-1 justify-start">
        {review.imageUrls && review.imageUrls.map((url, index) => (
          <div key={index} className="p-1">
            <img 
              src={url} 
              alt={`Review image ${index + 1}`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover cursor-pointer"
              onClick={() => openModal(index)} 
            />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ReviewImageModal 
          imageUrls={review.imageUrls} 
          selectedImageIndex={selectedImageIndex}
          closeModal={closeModal}
          review={review}
        />
      )}
      <div className="flex justify-between items-center mt-5">
        <div className="flex">
          <button className="flex items-center text-gray-700 hover:text-blue-600 mr-2" onClick={handleLike}>
            {likeStatus === 'liked' ? <FaThumbsUp /> : <FaRegThumbsUp />}
            <span className="ml-1 text-xs sm:text-sm">{likes}</span>
          </button>
          <button className="flex items-center text-gray-700 hover:text-red-600" onClick={handleDislike}>
            {likeStatus === 'disliked' ? <FaThumbsDown /> : <FaRegThumbsDown />}
            <span className="ml-1 text-xs sm:text-sm">{dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;