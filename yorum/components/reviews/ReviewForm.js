import React, { useState } from 'react';
import StarRating from '../ui/StarRating';

const ReviewForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    if (event.target.files.length > 3) {
      alert('En fazla 3 görsel yükleyebilirsiniz.');
      return;
    }
    setImages([...event.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('rating', rating);
    images.forEach((image, index) => formData.append(`images[${index}]`, image, image.name));

    onSubmit(formData);
    setTitle('');
    setContent('');
    setRating(5);
    setImages([]);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto my-4">
      {/* Ürün Adı ve Görseli */}
      <div className="mb-4 p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50">       
        <div className="flex items-center space-x-3">
          <img 
            src="https://cdn.dsmcdn.com/ty1178/product/media/images/prod/SPM/PIM/20240219/02/edb02114-4240-345b-8608-0e1e4c8638a1/1_org_zoom.jpg" 
            alt="Product" 
            className="w-16 h-16 rounded-md object-cover" 
          />
          <span className="text-lg font-semibold">Ürün Adı</span>
        </div>
      </div>

      {/* Yıldız puanı */}
      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
          Puan
        </label>
        <StarRating rating={rating} setRating={setRating} interactive={true} />
      </div>

      {/* Başlık */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
          Başlık
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      
      {/* Yorumunuz */}
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-800 text-sm font-bold mb-2">
          Yorumunuz
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
          required
        ></textarea>
      </div>

      {/* Görseller */}
      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 text-sm font-bold mb-2">
          Görseller
        </label>
        <input
          type="file"
          id="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Onay kutusu ve Aydınlatma Metni */}
      <div className="mb-4 text-center">
        <label htmlFor="consent" className="text-gray-600">
          <input type="checkbox" id="consent" className="mr-2" />
          Yorumlarda ismimin gözükmesine ve yorum detaylarının platform genelinde kullanılmasına izin veriyorum.
        </label>
        <div>
          <a href="#" className="text-orange-600 hover:underline">Aydınlatma Metni</a>’ne ulaşmak için tıklayınız.
        </div>
      </div>

      {/* Yorum Yap butonu */}
      <div className="text-center">
        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Yorum Ekle
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;