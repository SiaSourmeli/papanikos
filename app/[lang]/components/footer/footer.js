import styles from "./footer.module.css";
import Logo from "../logo";
import Image from "next/image";
import pinIcon from "../../../../assets/pin.svg";

function Footer() {
    
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrap}>
      <div className={styles.footerContainer}>
        <div className={styles.logoFooterContainer}>
          <a href="#home" className={styles.logoFooter}>
            <Logo />
          </a>
        </div>

        <ul className={styles.footerBlock}>
          <li>
            <h3 className={styles.footerHeader}>NAVIGATION</h3>
          </li>

          <li>
            <a
              href="#about"
              className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#work"
              className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
            >
              Work
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className={styles.footerBlock}>
          <li>
            <h3 className={styles.footerHeader}>LOCATION</h3>
          </li>

          <li>
            <div className={styles.locationWrap}>
              <Image
                src={pinIcon}
                alt="location pin"
                className={styles.locationPin}
              />
              <a
                href="https://maps.app.goo.gl/U9KhNbdZDH87ZqpS8"
                target="_blank"
                rel="noreferrer"
                className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
              >
                El. Venizelou 19, Alimos 174 56
              </a>
            </div>
          </li>
        </ul>

        <ul className={styles.footerBlock}>
          <li>
            <h3 className={styles.footerHeader}>CONTACT US</h3>
          </li>
          <li>
            <a
              href="mailto:laz.papanikos@gmail.com"
              className={`${styles.footerLink} underline-hover-effect hover-effect-reverse`}
            >
              laz.papanikos@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.copyrightsContainer}>
        <hr className={styles.footerDivider}></hr>
        <div className={styles.copyright}>
          &copy; {currentYear} by Sia Sourmeli. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
