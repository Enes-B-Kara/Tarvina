// components/ui/Carousel.js

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        <div className="w-full h-full flex justify-center items-center">
          <Image src="https://cdn.dsmcdn.com/seller-center/account/images/active-customers-slide.svg" alt="Active Customers" width={500} height={300} />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Image src="https://cdn.dsmcdn.com/seller-center/account/images/happy-customers-slide.svg" alt="Happy Customers" width={500} height={300} />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Image src="https://cdn.dsmcdn.com/seller-center/account/images/dijital-billing-slide.svg" alt="Digital Billing" width={500} height={300} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
