import { menus } from '../../../data/home';
import styles from './styles.module.scss';

import { BiCategory, BiCameraMovie, BiGift } from 'react-icons/bi';
import { FaBaby } from 'react-icons/fa';
import { BsPhoneVibrate } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { MdOutlineSportsEsports, MdOutlineSmartToy } from 'react-icons/md';
import {
  GiLargeDress,
  GiClothes,
  Gi3DHammer,
  GiWatch,
  GiBallerinaShoes,
  GiHeadphones,
  GiHealthCapsule,
  GiSportMedal,
  GiBigDiamondRing,
} from 'react-icons/gi';

import Link from 'next/link';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a className={styles.menu_header}>
            <BiCategory />
            <b>Categories</b>
          </a>
        </li>
        <div className={styles.menu_list}>
          {menus.map((item, i) => (
            <li key={item.name}>
                <a>
                  {i == 0 ? (
                    <GiLargeDress />
                  ) : i == 1 ? (
                    <GiClothes />
                  ) : i == 2 ? (
                    <GiHeadphones />
                  ) : i == 3 ? (
                    <GiWatch />
                  ) : i == 4 ? (
                    <HiOutlineHome />
                  ) : i == 5 ? (
                    <GiHealthCapsule />
                  ) : i == 6 ? (
                    <GiBallerinaShoes />
                  ) : i == 7 ? (
                    <GiBigDiamondRing />
                  ) : i == 8 ? (
                    <GiSportMedal />
                  ) : i == 9 ? (
                    <FaBaby />
                  ) : i == 10 ? (
                    <BiCameraMovie />
                  ) : i == 11 ? (
                    <MdOutlineSportsEsports />
                  ) : i == 12 ? (
                    <BsPhoneVibrate />
                  ) : i == 13 ? (
                    <MdOutlineSmartToy />
                  ) : i == 14 ? (
                    <BiGift />
                  ) : i == 15 ? (
                    <Gi3DHammer />
                  ) : i == 16 ? (
                    <AiOutlineSecurityScan />
                  ) : (
                    ''
                  )}
                  <span>{item.name}</span>
                </a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Menu;
