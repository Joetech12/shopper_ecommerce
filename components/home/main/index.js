import Menu from './menu';
import Offers from './offers';
import styles from './styles.module.scss';
import MainSwiper from './swiper';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <Menu />
      <MainSwiper />
      <Offers />
      <div className={styles.user}>user</div>
    </div>
  );
};

export default Main;
