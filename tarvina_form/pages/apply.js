import React, { useState, useEffect } from 'react';
import { State, City } from 'country-state-city';
import { QRCode } from 'react-qr-code';
import { GrArchive } from "react-icons/gr"; // React Icons'tan ikonu import etme

const Apply = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    setStates(State.getStatesOfCountry("TR"));
  }, []);

  useEffect(() => {
    if (selectedState) {
      const citiesOfTurkey = City.getCitiesOfCountry("TR");
      const filteredCities = citiesOfTurkey.filter(city => city.stateCode === selectedState);
      setCities(filteredCities);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };
  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg" style={{ maxWidth: '1300px' }}>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold flex items-center"><GrArchive className="mr-2"/>Satıcı Başvuru Formu</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="flex flex-wrap -mx-5 space-y-1">
              {/* Input fields here */}
              {/* Ad - Soyad ve Cep Telefonu */}
              <div className="px-2 w-1/2">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Adınız - Soyadınız</label>
                <input type="text" id="fullName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ad Soyad" required />
              </div>
              <div className="px-2 w-1/2">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Cep Telefonunuz</label>
                <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="05XX XXX XX XX" required />
              </div>

              {/* E-Posta ve Ürün Kategorisi */}
              <div className="mb-6 px-2 w-full md:w-1/2">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-Posta Adresiniz</label>
                <input id="email" type="email" className="border-2 rounded-lg px-4 py-2 w-full focus:outline-none" placeholder="E-Posta Adresi" required />
              </div>
              <div className="mb-6 px-2 w-full md:w-1/2">
                <label htmlFor="productCategory" className="block text-gray-700 text-sm font-bold mb-2">Satılacak Ürün Kategorisi</label>
                <select id="productCategory" className="border-2 rounded-lg px-4 py-2 w-full focus:outline-none">
                  <option>Ürün Kategorisini Seçin</option>
                  {/* Ürün kategorisi seçenekleri buraya */}
                </select>
              </div>
              
              {/* Şirket Türü ve Vergi Kimlik Numarası */}
              <div className="mb-6 px-2 w-full md:w-1/2">
                <label htmlFor="companyType" className="block text-gray-700 text-sm font-bold mb-2">Şirket Türü</label>
                <select id="companyType" className="border-2 rounded-lg px-4 py-2 w-full focus:outline-none">
                  <option>Şirket Türünü Seçin</option>
                  {/* Şirket türü seçenekleri buraya */}
                </select>
              </div>
              <div className="mb-6 px-2 w-full md:w-1/2">
                <label htmlFor="taxId" className="block text-gray-700 text-sm font-bold mb-2">Vergi Kimlik Numaranız</label>
                <input id="taxId" type="text" className="border-2 rounded-lg px-4 py-2 w-full focus:outline-none" placeholder="Vergi Kimlik Numarası" required />
              </div>
            {/* İl ve İlçe Seçimi - Aynı Satırda */}
            <div className="mb-6 px-2 w-full flex">
                {/* İl Seçimi */}
                <div className="flex-1">
                  <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">İl</label>
                  <select
                    id="state"
                    className="border-2 rounded-lg px-4 py-2 w-full focus:outline-none"
                    onChange={(e) => setSelectedState(e.target.value)}
                    value={selectedState}
                  >
                    <option>İl Seçin</option>
                    {states.map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* İlçe Seçimi */}
                <div className="flex-1 ml-2">
                  <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">İlçe</label>
                  <select
                    id="city"
                    className="border-2 rounded-lg px-4 py-2 w-full focus:outline-none"
                    onChange={(e) => setSelectedCity(e.target.value)}
                    value={selectedCity}
                    disabled={!selectedState} // İl seçilmeden ilçe seçilemez
                  >
                    <option>İlçe Seçin</option>
                    {cities.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
{/* referans kodu */}
<div className="mb-6 px-2 w-full md:w-1/2">
  <label htmlFor="referenceCode" className="block text-gray-700 text-sm font-bold mb-2">Referans Kodu</label>
  <input id="referenceCode" type="text" className="border-2 rounded-lg px-4 py-2 w-full focus:outline-none" placeholder="Varsa Referans Kodu Giriniz..." required />
</div>

{/* Aydınlatma Metni ve Devam Et Butonu - Yeni Düzen */}
<div className="mt-8 px-2 w-full flex justify-between items-center">
  {/* Aydınlatma Metni Checkbox */}
  <div>
    <label className="flex items-center">
      <input id="consent" type="checkbox" className="form-checkbox h-5 w-5 text-orange-500" required />
      <span className="ml-2 text-sm text-gray-700">
        <a href="/privacy-policy" className="text-orange-500 hover:text-orange-600">Aydınlatma metnini</a> okudum ve anladım.
      </span>
    </label>
  </div>
  
  {/* Devam Et Butonu */}
  <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
    Devam Et
  </button>
</div>
    </div>
          </form>
        </div>

{/* Sağ Sütun: QR Kod ve Uygulama İndirme Linkleri */}
<div className="w-full lg:w-1/2 px-4 flex flex-col lg:flex-row items-center justify-center mt-4 lg:mt-0">
  {/* QR Kod */}
  <div className="mb-6 lg:mb-0 lg:mr-4 flex flex-col items-center lg:items-start" style={{ width: '100px', height: '100px' }}>
    <QRCode value="http://example.com" size={100} />
  </div>

  {/* Uygulama İndirme Linkleri - QR Kod ile aynı satırda ama alt alta */}
  <div className="flex flex-col items-center lg:items-start">
    <a href="https://play.google.com/store/apps/details?id=your.app.id" className="mb-4">
      <img src="https://cdn.dsmcdn.com/shared/images/google-play-dark.svg" alt="Google Play'den alın" style={{ width: '152px', height: '45px', borderRadius: '8px' }} />
    </a>
    <a href="https://apps.apple.com/app/your.app.id">
      <img src="https://cdn.dsmcdn.com/shared/images/app-store.svg" alt="App Store'dan indirin" style={{ width: '152px', height: '45px', borderRadius: '8px' }} />
    </a>
  </div>
</div>
      </div>
    </div>
  );
};

export default Apply;