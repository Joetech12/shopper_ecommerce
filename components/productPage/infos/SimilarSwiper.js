import styles from './styles.module.scss';
import { similar_products } from '../../../data/products';
import Link from 'next/link';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const SimilarSwiper = () => {
  return (
   
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 5,
        },
      }}
      className="swiper similar_swiper products_swiper"
    >
      {similar_products.map((p, i) => (
        <SwiperSlide key={i}>
          <Link href="#">
            <img src={p} alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimilarSwiper;
