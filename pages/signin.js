import Link from 'next/link';
import { BiLeftArrowAlt } from 'react-icons/bi';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/signin.module.scss';

const signin = () => {
  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.login_container}>
          <div className={styles.login_header}>
            <div className={styles.back_svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
                We'll be happy if you join us! <Link href='/'>Go to store</Link>
            </span>
          </div>
          <div className={styles.login_form}>
            <h1>Sign in</h1>
            <p>Get access to the best e-Shopping service in Nigeria</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default signin;
