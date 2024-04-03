import { useState } from 'react';
import ReviewModal from './ReviewModal'; // Varsayılan olarak doğru yoldan import edin

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      {/* Mevcut içerikler... */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:px-4"
      >
        Yorum Ekle
      </button>

      {isModalOpen && (
        <ReviewModal closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
