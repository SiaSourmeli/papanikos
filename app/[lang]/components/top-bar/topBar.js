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
          <Image src={telIcon} className={styles.svg} alt="Telephone" />
          <a href="tel:210 9910151">210 9910151</a>
        </li>

        <li>
          <Image src={mailIcon} className={styles.svg} alt="Email" />
          <a href="mailto:laz.papanikos@gmail.com">laz.papanikos@gmail.com</a>
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
