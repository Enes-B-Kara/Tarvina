import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const ForgotPassword = () => {
  const [inputType, setInputType] = useState('email'); // Varsayılan olarak 'email' seçili

  // Radio button stilini dinamik olarak belirleyen fonksiyon
  const radioStyle = (type) => 
    `form-radio h-5 w-5 text-orange-600 ${
      inputType === type ? 'checked:bg-orange-600' : 'bg-gray-400'
    }`;

  return (
    <>
      <Head>
        <title>Şifre Yenileme</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl font-['Roboto']">
            Şifrenizi Yenileyin
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Şifrenizi yenilemeniz için, Trendyol Satıcı Paneli'ne kayıtlı telefon numaranıza, e-posta adresinize veya TCKN/VKN ihtiyacımız var.
          </p>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md space-y-4">
              <div className="flex justify-around">
                <label htmlFor="phone" className="flex items-center">
                  <input 
                    id="phone" 
                    name="inputType" 
                    type="radio" 
                    onChange={() => setInputType('phone')} 
                    className={radioStyle('phone')}
                  />
                  <span className="ml-2 text-gray-700">Telefon Numarası</span>
                </label>
                <label htmlFor="email" className="flex items-center">
                  <input 
                    id="email" 
                    name="inputType" 
                    type="radio" 
                    defaultChecked
                    onChange={() => setInputType('email')} 
                    className={radioStyle('email')}
                  />
                  <span className="ml-2 text-gray-700">E-Posta</span>
                </label>
                <label htmlFor="tckn" className="flex items-center">
                  <input 
                    id="tckn" 
                    name="inputType" 
                    type="radio" 
                    onChange={() => setInputType('tckn')} 
                    className={radioStyle('tckn')}
                  />
                  <span className="ml-2 text-gray-700">TCKN/VKN</span>
                </label>
              </div>
              <input 
                type="text" 
                name="credential" 
                id="credential" 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
                placeholder={inputType === 'phone' ? 'Telefon numaranızı giriniz...' : (inputType === 'email' ? 'E-posta adresinizi giriniz...' : 'TCKN/VKN giriniz...')} 
                required 
              />
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Bağlantıyı Gönder
              </button>
            </div>
          </form>
          <div className="text-sm text-center mt-2">
            <Link href="/" legacyBehavior>
              <a className="font-medium text-gray-900 hover:underline">
                Giriş Sayfasına Geri Dön
              </a>
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="font-medium text-gray-900">
              Satıcı Değil Misiniz? <Link href="/pazar" legacyBehavior><a className="hover:underline text-orange-600">Şimdi Trendyol'da Satıcı Olun</a></Link>
            </p>
          </div>
          <p className="text-xs text-center text-gray-400 mt-4">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" className="text-orange-600 hover:text-orange-500 ml-1">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" className="text-orange-600 hover:text-orange-500 ml-1">Terms of Service</a> apply.
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
