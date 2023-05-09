import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CartHeader from '../components/cart/header';
import styles from '../styles/cart.module.scss';
import Empty from '../components/cart/empty';

const cart = () => {
  const cart = [];
  return (
    <>
      <CartHeader />
      <div className={styles.cart}>
        {cart.length > 1 ? (
          <div className={styles.cart_container}></div>
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
};

export default cart;
