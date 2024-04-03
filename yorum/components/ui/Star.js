// components/ui/Star.js
const Star = ({ filled, onClick }) => {
    return (
      <span
        onClick={onClick}
        className={`inline-block text-xl cursor-pointer ${filled ? 'text-yellow-500' : 'text-gray-500'}`}
      >
        {filled ? '★' : '☆'}
      </span>
    );
  };
  
  export default Star;