import Link from 'next/link';
import styles from './styles.module.scss';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const UserMenu = ({ session }) => {
  const router = useRouter();

  return (
    <div className={styles.menu}>
      <h4>Welcome to Shopper!</h4>
      {session ? (
        <div className={styles.flex2}>
          <img src={session.user.image} className={styles.menu_img} />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>{session.user.name}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button
            className={styles.btn_primary}
            onClick={() => router.push('/signup')}
          >
            Register
          </button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
