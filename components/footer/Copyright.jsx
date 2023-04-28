import Link from 'next/link';
import styles from './styles.module.scss';
import { IoLocationSharp } from 'react-icons/io5';

const Copyright = ({ country }) => {
  return (
    <div className={styles.footer_copyright}>
      <section>©2022 Shopper All Rights Reserved.</section>
      <section>
        <ul>
          {data.map((link) => (
            <li key={link.name}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a href="">
              <IoLocationSharp /> {country ? country.name : 'Nigeria'}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

const data = [
  {
    name: 'Privacy Center',
    link: '',
  },
  {
    name: 'Privacy & Cookies Policy',
    link: '',
  },
  {
    name: 'Manage Cookies',
    link: '',
  },
  {
    name: 'Terms & Conditions',
    link: '',
  },
//   {
//     name: 'Copyright Notice',
//     link: '',
//   },
];

export default Copyright;
