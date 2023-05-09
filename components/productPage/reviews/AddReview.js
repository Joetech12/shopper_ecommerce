import Select from './Select';
import { useState } from 'react';
import styles from './styles.module.scss';
import { Rating } from '@mui/material';
import Images from './images';

const AddReview = ({ product }) => {
  const [size, setSize] = useState('');
  const [style, setStyle] = useState('');
  const [fit, setFit] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState();
  const [images, setImages] = useState([]);
  //   const handleSize = (size) => {
  //     setSize(size);
  //   };
  return (
    <div className={styles.reviews_add}>
      <div className={`${styles.reviews_add_wrap}`}>
        <div className={`flex`} style={{ gap: '10px' }}>
          {/* <span>Size:</span> */}
          <Select
            property={size}
            text="Size"
            data={product.allSizes.filter((x) => x.size !== size)}
            handleChange={setSize}
          />
          {/* <span>Style:</span> */}
          <Select
            property={style}
            text="Style"
            data={product.colors.filter((x) => x !== style)}
            handleChange={setStyle}
          />
          <Select
            property={fit}
            text="How does it fit"
            data={fits.filter((x) => x !== fit)}
            handleChange={setFit}
          />
        </div>
        <Images images={images} setImages={setImages}/>
        <textarea
          name="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
        />
        <Rating
          name="half-rating-read"
          defaultValue={0}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          precision={0.5}
          style={{ color: '#facf19', fontSize: '3rem' }}
        />
        <button className={styles.login_btn}>
            Submit Review
        </button>
      </div>
    </div>
  );
};

export default AddReview;

let fits = ['Small', 'True to size', 'Large'];
