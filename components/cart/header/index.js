import { MdPlayArrow } from 'react-icons/md';
import styles from './styles.module.scss';
import Link from 'next/link';

const CartHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <Link href="">
            <img src="/shopper_logo.png" alt="" />
          </Link>
        </div>
        <div className={styles.header_right}>
          <Link href="/browse">
            <span>
                Continue Shopping
                <MdPlayArrow/>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
