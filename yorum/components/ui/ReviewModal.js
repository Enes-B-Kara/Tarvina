import React from 'react';
import ReviewForm from '../reviews/ReviewForm'; // Varsayılan olarak doğru yoldan import edin

const ReviewModal = ({ closeModal }) => {
  const handleFormSubmit = (reviewData) => {
    console.log(reviewData);
    closeModal(); // Form gönderildikten sonra modalı kapat
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Modal arkaplanı */}
        <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal içeriği */}
        <div
          className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all m-4 sm:my-8 sm:align-middle sm:max-w-md sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Burada ReviewForm bileşenini yerleştiriyoruz */}
            <ReviewForm onSubmit={handleFormSubmit} />
          </div>
          {/* Modal alt kısmı, isteğe bağlı olarak başka butonlar veya içerik ekleyebilirsiniz */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closeModal}
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
