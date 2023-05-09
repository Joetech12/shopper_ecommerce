import styles from './styles.module.scss';
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri';
import Link from 'next/link';
import { useState } from 'react';
import UserMenu from './UserMenu';
import { useSession, signIn, signOut } from 'next-auth/react';

const Top = ({ country }) => {
  const { data: session } = useSession();
  //   const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <div className=""></div>
        <ul className={styles.top_list}>
          {/* {country ? (
            <li className={styles.li}>
              <img src={country.flag} alt="" />
              <span>{country.name} / usd</span>
            </li>
          ) : (
            <li className={styles.li}>
              <img
                src={
                  'https://www.seekpng.com/png/detail/510-5105991_illustration-of-flag-of-nigeria-nigeria-flag-icon.png'
                }
                alt=""
              />
              <span>Nigeria / NGN</span>
            </li>
          )} */}
           <li className={styles.li}>
              <img
                src={
                  'https://www.seekpng.com/png/detail/510-5105991_illustration-of-flag-of-nigeria-nigeria-flag-icon.png'
                }
                alt=""
              />
              <span>Nigeria / NGN</span>
            </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          {/* <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span>WishList</span>
            </Link>
          </li> */}
          <li className={styles.li}>
            <BsSuitHeart />
            <span>WishList</span>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {session ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img src={session.user.image} />
                  <span>{session.user.name}</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
