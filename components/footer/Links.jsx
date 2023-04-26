import Link from 'next/link';
import styles from './styles.module.scss';

export default function Links() {
  return (
    <div className={styles.footer_links}>
      {links.map((link, i) => (
        <ul key={link.heading}>
          {i === 0 ? (
            <img src="/shopper_logo.png" alt="" />
          ) : (
            <b>{link.heading}</b>
          )}
          {link.links.map((lk) => (
            <li key={lk.name}>
              <Link href={lk.link}>{lk.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

const links = [
  {
    heading: 'SHOPPER',
    links: [
      {
        name: 'About us',
        link: '',
      },
      {
        name: 'Contact us',
        link: '',
      },
      {
        name: 'Social responsibility',
        link: '',
      },
      {
        name: '',
        link: '',
      },
    ],
  },
  {
    heading: 'HELP & SUPPORT',
    links: [
      {
        name: 'Shipping Info',
        link: '',
      },
      {
        name: 'Returns',
        link: '',
      },
      {
        name: 'How To Order',
        link: '',
      },
      {
        name: 'How To Track',
        link: '',
      },
      {
        name: 'Size Guide',
        link: '',
      },
    ],
  },
  {
    heading: 'CUSTOMER SERVICE',
    links: [
      {
        name: 'Customer Service',
        link: '',
      },
      {
        name: 'Terms and Conditions',
        link: '',
      },
      {
        name: 'Consumers (Transactions)',
        link: '',
      },
      {
        name: 'Take our feedback survey',
        link: '',
      },
    ],
  },
];
