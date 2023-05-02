import { MdFlashOn } from 'react-icons/md';
import styles from './styles.module.scss';
import Countdown from '../../countdown';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper';
import { flashDeals } from '../../../data/home';
import FlashCard from './Card';

const FlashDeals = () => {
  return (
    <div className={styles.FlashDeals}>
      <div className={styles.flashDeals_header}>
        <h1>
          FLASH SALE <MdFlashOn />
        </h1>
        {/* NB: -1 is used in the month because of timezone diff (Africa) */}
        <Countdown date={new Date(2023, (6-1), 2)} />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
          1520: {
            slidesPerView: 6,
          },
        }}
        className="flashDeals_Swiper"
      >
        <div className={styles.flashDeals_list}>
          {flashDeals.map((product, i) => (
            <SwiperSlide key={i}>
              <FlashCard product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default FlashDeals;
