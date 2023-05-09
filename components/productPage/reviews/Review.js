import { Rating } from '@mui/material';
import styles from './styles.module.scss';
import { AiOutlineLike } from 'react-icons/ai';

const Review = ({ review }) => {
  console.log(review.likes);
  const { name, image } = review.reviewBy;
  return (
    <div className={styles.review}>
      <div className={styles.flex}>
        <div className={styles.review_user}>
          <h4>
            {name.slice(0, 1)}***{name.slice(name.length - 1, name.length)}
          </h4>
          <img src={image} alt="" />
        </div>
        <div className={styles.review_review}>
          <Rating
            name="half-rating-read"
            defaultValue={review.rating}
            readOnly
            style={{ color: '#facf19' }}
          />
          <p>{review.review}</p>
          <p>
            <span>Overall Fit:</span>
            {review.fit}
            &nbsp;&nbsp;
            <span>Size:</span>
            {review.size}
            &nbsp;&nbsp;
            <div className={styles.flex}>
              <img
                src={review.style.image}
                alt=""
                className={styles.review_img}
              />
            </div>
          </p>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.review_images}>
          {review.images.length > 0 &&
            review.images.map((img, i) => (
              <img src={img?.image} alt="" key={i} />
            ))}
        </div>
        <div className={styles.review_extra}>
          <div className={styles.review_extra_likes}>
            {review.likes &&
              review.likes.map((like, i) => <span key={i}>{like.likes}</span>)}
            <AiOutlineLike />
          </div>
          <div className={styles.review_extra_date}>
            {review.updatedAt.slice(0, 10)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
