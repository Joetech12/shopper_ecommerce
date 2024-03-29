import Link from 'next/link';
import styles from './styles.module.scss';

const NewsLetter = () => {
  return (
    <div className={styles.footer_newsletter}>
      <h3>SIGN UP FOR OUR NEWSLETTER</h3>
      <div className={styles.footer_flex}>
        <input type="text" placeholder="Your Email Address" />
        <button className={styles.newsletter_btn}>SUBSCRIBE</button>
      </div>
      <p>
        By clicking the SUBSCRIBE button, you are agreeing to{' '}
        <Link href=""> Our Privacy & Cookie Policy</Link>
      </p>
    </div>
  );
};

export default NewsLetter;
