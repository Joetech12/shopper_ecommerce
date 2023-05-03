import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react';

import styles from '../styles/Home.module.scss';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/home/main';
import FlashDeals from '../components/home/flashDeals';
import Category from '../components/home/category';
import { BsArrowRightCircle } from 'react-icons/bs';
import db from '../utils/db';
import {
  gamingSwipper,
  homeAcessSwipper,
  womenAccessories,
  womenDresses,
  womenShoes,
  womenSwipper,
} from '../data/home';
import { useMediaQuery } from 'react-responsive';
import ProductSwiper from '../components/productSwiper';
import Product from '../models/Product';
import ProductCard from '../components/productCard';

export default function Home({ country, products }) {
//   console.log('products', products);
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: '(max-width: 1300px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  return (
    <div>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home_category}>
            <Category
              header="Dresses"
              products={womenDresses}
              background="#5a31f4"
            />
            <Category
              header="Shoes / High Heels"
              products={womenShoes}
              background="#3c811f"
            />
            {(!isMedium || isMobile) && (
              <Category
                header="Accessories"
                products={womenAccessories}
                background="#fd010169"
              />
            )}
          </div>
          <ProductSwiper products={womenSwipper} />
          <ProductSwiper
            products={gamingSwipper}
            header="Gaming Section"
            bg="#2f82ff"
          />
          <ProductSwiper
            products={homeAcessSwipper}
            header="Home Accessories Section"
            bg="#5a31f4"
          />
          <div className={styles.products}>
                {
                    products.map((product, i)=>(
                        <ProductCard product={product} key={product._id}/>
                    ))
                }
          </div>
        </div>
      </div>
      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
//   console.log(products);

  let data = await axios
    .get('https://api.ipregistry.co/?key=s0r73ufh0sdl08vl')
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      //   country: { name: data.name, flag: data.flag.emojitwo },
      country: { name: null, flag: null },
    },
  };
}
