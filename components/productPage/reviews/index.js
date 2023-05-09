import { Rating } from '@mui/material';
import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/react';
import AddReview from './AddReview';
import Table from './Table';

const Reviews = ({ product }) => {
  const { data: session } = useSession();

  return (
    <div className={styles.reviews}>
      <div className={styles.reviews_container}>
        <h1>Customer Reviews ({product.reviews.length})</h1>
        <div className={styles.reviews_stats}>
          <div className={styles.reviews_stats_overview}>
            <span>Average Rating</span>
            <div className={styles.reviews_stats_overview_rating}>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
                style={{ color: '#FACF19' }}
              />
              {product.rating == 0 ? 'No review yet' : product.rating}
            </div>
          </div>
          <div className={styles.reviews_stats_reviews}>
            {product.ratings.map((rating, i) => (
              <div className={styles.reviews_stats_reviews_review} key={i}>
                <Rating
                  name="half-rating-read"
                  defaultValue={5 - i}
                  readOnly
                  style={{ color: '#FACF19' }}
                />
                <div className={styles.bar}>
                  <div
                    className={styles.bar_inner}
                    style={{ width: `${rating.percentage}` }}
                  ></div>
                </div>
                <span>{rating.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        {session ? (
          <AddReview product={product}/>
        ) : (
          <button onClick={() => signIn()} className={styles.login_btn}>Login to add review</button>
        )}
       <Table reviews={product.reviews} />
      </div>
    </div>
  );
};

export default Reviews;