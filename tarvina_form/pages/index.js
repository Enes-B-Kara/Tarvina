import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // E-posta ve Şifre ikonları
import Statistics from '../components/ui/Statistics';
import Carousel from '../components/ui/Carousel';
import QRCodeComponent from '../components/ui/QRCode'; // Yolunuzu uygun şekilde düzenleyin
import Link from 'next/link';


const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSatıcıOlTarvina = (e) => {
    e.preventDefault(); // Sayfa yenilenmesini önler
    router.push('/pazar'); // '/pazar' sayfasına yönlendir
  };

  return (
    <>
       <div className="container mx-auto px-4 min-h-screen flex flex-col lg:flex-row items-start justify-center lg:justify-start space-y-8 lg:space-y-0 lg:space-x-44">
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif">
              Giriş Yap
            </h2>
            <p className="mt-2 text-center text-sm sm:text-md text-gray-600 font-serif">
              Tarvina Satıcı Paneli'ne hoş geldiniz! Devam etmek için lütfen giriş yapınız.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">E-posta adresinizi veya telefon numaranızı giriniz</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm font-serif" placeholder="E-posta adresi" />
              </div>
              <div className="relative mb-6">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm font-serif"
                  placeholder="Şifre"
                />
                <button
                  onClick={handleShowPassword}
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? <FiEyeOff size="1.5em" /> : <FiEye size="1.5em" />}
                </button>
              </div>
            </div>

            <Link href="/forgot-password" legacyBehavior>
  <a className="font-medium text-orange-600 hover:text-orange-500">
    Şifremi Unuttum
  </a>
</Link>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-serif">
                Giriş Yap
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600 font-serif">
                Satıcı değil misiniz?{' '}
                <a onClick={handleSatıcıOlTarvina} className="cursor-pointer text-orange-600 hover:text-orange-700 font-semibold">
                  Şimdi Tarvina'da Satıcı Olun
                </a>
              </p>
            </div>
          </form>
          <div className="flex flex-col items-center">
            {/* QR Kod */}
            <QRCodeComponent url="http://example.com" />

            {/* Uygulama İndirme Linkleri */}
            <div className="flex flex-col items-center mt-4">
              <a href="https://play.google.com/store/apps/details?id=your.app.id" className="mb-4">
                <img src="https://cdn.dsmcdn.com/shared/images/google-play-dark.svg" alt="Google Play'den alın" style={{ width: '152px', height: '45px', borderRadius: '8px' }} />
              </a>
              <a href="https://apps.apple.com/app/your.app.id">
                <img src="https://cdn.dsmcdn.com/shared/images/app-store.svg" alt="App Store'dan indirin" style={{ width: '152px', height: '45px', borderRadius: '8px' }} />
              </a>
            </div>
          </div>
          </div>
 <div className="w-full lg:w-1/2 space-y-8">        <Carousel />
        <div className="mt-5">
          <Statistics />
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
