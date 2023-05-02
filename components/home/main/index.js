import Header from './Header';
import User from './User';
import Menu from './menu';
import Offers from './offers';
import styles from './styles.module.scss';
import MainSwiper from './swiper';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Menu />
      <MainSwiper />
      {/* <Offers /> */}
      {/* <User/> */}
    </div>
  );
};

export default Main;
