import { FaFacebook, FaTiktok } from 'react-icons/fa';
import {
  BsInstagram,
  BsPinterest,
  BsSnapchat,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';

import styles from './styles.module.scss';

const Socials = () => {
  return (
    <div className={styles.footer_socials}>
      <section>
        <h1>STAY CONNECTED</h1>
        <ul>
          <li>
            <a href="/" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsPinterest />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <BsSnapchat />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Socials;
