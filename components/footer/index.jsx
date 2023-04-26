import Copyright from './Copyright';
import Links from './Links';
import NewsLetter from './NewsLetter';
import Payment from './Payment';
import Socials from './Socials';
import styles from './styles.module.scss';

const Footer = ({ country }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Links />
        <Socials />
        <NewsLetter />
        <Payment />
        <Copyright country={country} />
      </div>
    </footer>
  );
};

export default Footer;
