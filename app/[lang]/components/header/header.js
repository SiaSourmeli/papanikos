"use client";
import Link from 'next/link'
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Button from "../button";
import Theme from "../theme";
import Logo from "../logo";

const Header = ({ dictionary, locale }) => {
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });
  const [hideHeader, setHideHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((lastState) => {
        return {
          y: window.scrollY,
          lastY: lastState.y,
        };
      });

      if (!menuOpen && window.scrollY > 250) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollData.y > 250 && scrollData.y - scrollData.lastY > 0) {
      // scrollData.y - scrollData last > 0  this means we are scrolling UP
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  }, [scrollData]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} ${hideHeader ? styles.slideUp : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.headerContainer}>
          <div className={styles.logoHeader}>
            <a href={`${locale}/`}>
              <Logo />
            </a>
          </div>

          <div
            className={`${styles.navMenu} ${
              menuOpen ? styles.navMenuOpen : ""
            }`}
          >
            <ul>
              <li>
                <a href={`/${locale}#about`} className={styles.navLink}>
                  { dictionary.about }
                </a>
              </li>

              <li>
                <a href={`/${locale}#services`} className={styles.navLink}>
                { dictionary.services }
                </a>
              </li>

              <li>
                <a href={`/${locale}#work`} className={styles.navLink}>
                { dictionary.work }
                </a>
              </li>

              <li>
                <a href={`/${locale}#contact`} className={styles.navLink}>
                { dictionary.contact }
                </a>
              </li>
            </ul>
          </div>
          <Theme />
          <Button active={menuOpen} onClick={handleMenuClick} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
