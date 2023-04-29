import styles from './styles.module.scss';
import { offers } from '../../../data/home';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from 'swiper';
import Link from 'next/link';

export default function Offers() {
  return (
    <div className={styles.offers}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="offers_swiper"
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <Link href="">
              <img
                src={offer.image}
                alt=""
                className={styles.swiper_container}
              />
            </Link>
            <span>${offer.price}</span>
            <span>-{offer.discount}%</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
