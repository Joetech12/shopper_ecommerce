import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';

const Empty = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.empty}>
      <img src="/empty_cart.png" alt="" />
      <h1>Cart is empty</h1>
      {!session && (
        <button className={styles.empty_btn} onClick={() => {signIn()}}>Sign In / Register</button>
      )}
      <Link href="/browse">
        <span>
          <button className={`${styles.empty_btn} ${styles.empty_btn_v2}`}>Shop Now</button>
        </span>
      </Link>
    </div>
  );
};

export default Empty;
