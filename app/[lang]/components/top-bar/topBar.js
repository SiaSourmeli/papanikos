"use client";

import styles from "./topBar.module.css";
import Image from "next/image";
import telIcon from "../../../../assets/tel.svg";
import mailIcon from "../../../../assets/mail.svg";
import LocaleSwitcher from "../locale-switcher/locale-switcher";
import { useRouter } from "next/navigation";

const TopBar = ({ activeLang }) => {
  return (
    <div className={styles.topBarContainer}>
      <ul className={styles.topBar}>
        <li>
          <a href="tel:210 9910151">
            <Image src={telIcon} className={styles.svg} alt="Telephone" />
            <p>210 9910151</p>
          </a>
       
        </li>

        <li>
          <a href="mailto:laz.papanikos@gmail.com">
            <Image src={mailIcon} className={styles.svg} alt="Email" />
            <p className={styles.mailText}>laz.papanikos@gmail.com</p>
        </a>
          
        </li>

        <li>
          <LocaleSwitcher activeLang={activeLang} />
        </li>
      </ul>

      {/* <hr className="header-divider"></hr> */}
    </div>
  );
};

export default TopBar;
