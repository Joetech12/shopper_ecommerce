import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
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

  //   console.log(style);
  return (
    <div className={styles.product}>
      <div className={styles.product_container}>
        <Link href={`/product/${product.slug}?style=${active}`}>
          <div>
            <ProductSwiper images={images} />
          </div>
        </Link>
        {product.subProducts[active].discount ? (
          <div className={styles.product_discount}>
            -{product.subProducts[active].discount}%
          </div>
        ) : (
          ''
        )}
        <div className={styles.product_infos}>
          <h1>
            {product.name.length > 45
              ? `${product.name.substring(0, 45)}...`
              : product.name}
          </h1>
          <span>
            {prices.length === 1
              ? `USD${prices[0]}`
              : `USD${prices[0]}-${prices[prices.length - 1]}$`}
          </span>
          <div className={styles.product_colors}>
            {style &&
              style.map((sty, i) =>
                sty.image ? (
                  <img
                    src={sty.image}
                    alt=""
                    key={i}
                    className={i == active && styles.active}
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                  />
                ) : (
                  <span
                    style={{ backgroundColor: `${style.color}` }}
                    key={i}
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                  ></span>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
