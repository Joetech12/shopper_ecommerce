import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link'
import ProductSwiper from './ProductSwiper';

const ProductCard = ({ product }) => {
  //   console.log(`product ${product._id}`, product.subProducts[0]);
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.subProducts[active]?.images);
  const [prices, setPrices] = useState(
    product.subProducts[active]?.sizes
      .map((s) => {
        return s.price;
      })
      .sort((a, b) => {
        return a - b;
      })
  );
  const [style, setStyle] = useState(
    product.subProducts.map((p) => {
      return p.color;
    })
  );

  useEffect(() => {
    setImages(product.subProducts[active].images);
    setPrices(
      product.subProducts[active]?.sizes
        .map((s) => {
          return s.price;
        })
        .sort((a, b) => {
          return a - b;
        })
    );
  }, [active]);

    // console.log(images);
  return <div className={styles.product}>
    <div className={styles.product_container}>
        <Link href={`/product/${product.slug}?style=${active}`}>
            <div>
                <ProductSwiper images={images}/>
            </div>
        </Link>
    </div>
  </div>;
};

export default ProductCard;
