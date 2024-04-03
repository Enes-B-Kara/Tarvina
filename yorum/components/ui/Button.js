const Button = ({ children, onClick, className }) => {
  // Mobil cihazlarda daha büyük butonlar için ekstra padding sınıfları ekleniyor.
  const buttonClassName = `bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-5 sm:py-2 sm:px-4 rounded ${className}`;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
