import styles from './styles.module.scss';
import { Rating } from '@mui/material';

const Infos = ({ product, setActiveImg }) => {
  return (
    <div className={styles.infos}>
      <div className={styles.infos_container}>
        <h1 className={styles.infos_name}>{product.name}</h1>
        <h2 className={styles.infos_sku}>{product.sku}</h2>
        <div className={styles.infos_rating}>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            style={{color: "#FACF19"}}
          />
          {product.numReviews}
          {product.numReviews == 1 ? "review" : "reviews"}
        </div>
        <div className={styles.info_price}>
            
        </div>
      </div>
    </div>
  );
};

export default Infos;
