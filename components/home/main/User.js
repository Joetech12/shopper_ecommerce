import styles from './styles.module.scss';
import { IoSettingsOutline } from 'react-icons/io5';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { HiOutlineClipboard } from 'react-icons/hi';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Navigation } from 'swiper';
import { userSwipper } from '../../../data/home';

const User = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.user}>
      <img src="/user_bg.jpg" alt="" />
      <div className={styles.user_container}>
        {session ? (
          <div className={styles.user_info}>
            <img src={session.user?.image} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user_info}>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
            />
            <div className={styles.user_infos_btns}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}
        <ul className={styles.user_links}>
          <li>
            <a>
              <IoSettingsOutline />
            </a>
          </li>
          <li>
            <a>
              <HiOutlineClipboard />
            </a>
          </li>
          <li>
            <a>
              <AiOutlineMessage />
            </a>
          </li>
          <li>
            <a>
              <BsHeart />
            </a>
          </li>
        </ul>
        <div className={styles.user_swiper}>
          {/* <Swiper
            effect={'cards'}
            grabCursor={true}
            navigation={true}
            modules={[EffectCards, Navigation]}
            style={{ maxWidth: '180px', height: '240px', marginTop: '1rem' }}
            className="userMenu_swiper"
          >
            {userSwipper.map((item, i) => (
              <SwiperSlide key={i}>
                <Link href="">
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </div>
  );
};

export default User;
