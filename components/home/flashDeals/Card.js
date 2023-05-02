import { MdFlashOn } from 'react-icons/md';
import styles from './styles.module.scss';
import Link from 'next/link';

const FlashCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Link href="">
          <img src={product.image} alt="" />
        </Link>
        <div className={styles.flash}>
          <MdFlashOn />
          <span>-{product.discount}%</span>
        </div>
        <div className={styles.card_price}>
          <span>USD{(product.price - product.price / product.discount).toFixed(2)}$</span>
          <span>
            -USD
            {(product.price - (product.price - product.price / product.discount)).toFixed(2)}
            $
          </span>
        </div>
        <div className={styles.card_bar}>
          <div className={styles.card_bar_inner} style={{ width: '75%' }}></div>
        </div>
        <div className={styles.card_percentage}>{product.sold}%</div>
      </div>
    </div>
  );
};

export default FlashCard;
