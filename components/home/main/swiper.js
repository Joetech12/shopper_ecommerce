import styles from './styles.module.scss';
import { banners } from '../../../data/home';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

// import required modules
import { Autoplay, Pagination, Navigation} from 'swiper';

export default function MainSwiper() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        // effect={'fade'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mainSwiper"
      >
        {/* {[...Array(5).keys()].map((i) => (
          <SwiperSlide key={i}>
            <img src={`/img/swipper/${i + 1}.jpg`} alt="" />
          </SwiperSlide>
        ))} */}
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Link href="">
              <img
                src={banner.image}
                alt=""
                className={styles.swiper_container}
              />
            </Link>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
