import { BiRightArrowAlt } from 'react-icons/bi';
import styles from './styles.module.scss';

const CircledIconBtn = ({ type, text, icon, ...props }) => {
  return (
    <button type={type} className={styles.button} {...props}>
      {text}
      <div className={styles.svg_wrap}>
        <BiRightArrowAlt />
      </div>
    </button>
  );
};

export default CircledIconBtn;
