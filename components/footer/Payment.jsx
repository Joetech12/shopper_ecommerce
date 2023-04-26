import styles from './styles.module.scss';

const Payment = () => {
  return (
    <div className={styles.footer_payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer_flexwrap}>
        <img src="/visa.png" alt="visa_card" />
        <img src="/master.png" alt="visa_card" />
        <img src="/paypal.png" alt="paypal_card" />
      </div>
    </div>
  );
};

export default Payment;
