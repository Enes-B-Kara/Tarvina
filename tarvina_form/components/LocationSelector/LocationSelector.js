import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationSelector = ({ selectedCity, setSelectedCity, selectedDistrict, setSelectedDistrict }) => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const { data } = await axios.get('https://api.turkiyeapi.dev/v1/cities');
        const sortedCities = data.data.sort((a, b) => a.name.localeCompare(b.name));
        setCities(sortedCities);
      } catch (error) {
        console.error("İller çekerken hata oluştu:", error);
      }
    };
  
    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (!selectedCity) {
        setDistricts([]);
        return;
      }
  
      try {
        const { data } = await axios.get(`https://api.turkiyeapi.dev/v1/districts/${selectedCity}`);
        const sortedDistricts = data.data.sort((a, b) => a.name.localeCompare(b.name));
        setDistricts(sortedDistricts);
      } catch (error) {
        console.error("İlçeler çekerken hata oluştu:", error);
      }
    };
  
    fetchDistricts();
  }, [selectedCity]);

  return (
    <div>
      <select
        className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm"
        value={selectedCity}
        onChange={e => setSelectedCity(e.target.value)}
      >
        <option value="">İl Seçiniz</option>
        {cities.map(city => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>

      <select
        className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm"
        value={selectedDistrict}
        onChange={e => setSelectedDistrict(e.target.value)}
        disabled={!selectedCity}
      >
        <option value="">İlçe Seçiniz</option>
        {districts.map(district => (
          <option key={district.id} value={district.id}>{district.name}</option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;
