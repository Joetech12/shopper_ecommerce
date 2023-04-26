import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';
import { RiSearch2Line } from 'react-icons/ri';
import { FaOpencart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Main = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="/shopper_logo.png" alt="shopper_logo" />
          </div>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search_icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart">
          <div className={styles.cart}>
            <FaOpencart />
            <span>0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
