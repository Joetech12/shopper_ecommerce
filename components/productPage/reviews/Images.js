import { MdOutlineRemoveCircle } from 'react-icons/md';
import styles from './styles.module.scss';
import { useRef, useState } from 'react';

const Images = ({ images, setImages }) => {
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const handleImages = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((img, i) => {
      if (images.length == 3 || i == 2) {
        setError('Maximum of 3 images are allowed.');
        return;
      }
      if (
        img.type !== 'image/jpeg' &&
        img.type !== 'image/jpg' &&
        img.type !== 'image/png' &&
        img.type !== 'image/gif' &&
        img.type !== 'image/webp'
      ) {
        setError(
          `${img.name} format is unsupported! only JPEG, PNG, WEBP are allowed.`
        );
        files = files.filter((item) => item.name !== img.name);
        return;
      } else if (img.size > 1024 * 1024 * 5) {
        setError(`${img.name} is too big! Maximum size is 5MB.`);
        files = files.filter((item) => item.name !== img.name);
        return;
      } else {
        setError('');
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
          setImages((images) => [...images, e.target.result]);
        };
      }
    });
  };

  const removeImage = (image) => {
    setImages((images) => images.filter((img) => img !== image));
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        hidden
        onChange={handleImages}
        multiple
        accept="image/png,image/jpeg,image/webp,image/gif,image/jpg"
      />
      <button
        className={styles.login_btn}
        style={{ width: '150px' }}
        onClick={() => inputRef.current.click()}
      >
        Add Images
      </button>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.imgs_wrap}>
        {images.length > 0 &&
          images.map((img, i) => (
            <span key={i} className={styles}>
              <MdOutlineRemoveCircle onClick={() => removeImage(img)} />
              <img src={img} alt="" />
            </span>
          ))}
      </div>
    </div>
  );
};

export default Images;
