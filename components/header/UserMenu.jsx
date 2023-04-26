import Link from 'next/link';
import styles from './styles.module.scss';

const UserMenu = ({ loggedIn }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Shopper!</h4>
      {loggedIn ? (
        <div className={styles.flex2}>
          <img
            src="https://media.istockphoto.com/id/1372641621/photo/portrait-of-a-businessman-on-gray-background.jpg?s=612x612&w=0&k=20&c=G7RmU1vHuzqIscJDOVrUVRl_-yIOIl0ws3f4RRc8qHU="
            alt="profile-pix"
            className={styles.menu_img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>Ifeanyi</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
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
