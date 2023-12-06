import { useEffect, useState } from "react";
import styles from './header.module.css';
import Button from "src/components/button/button";
import Theme from "src/components/theme/theme";
import Logo from "src/components/logo/logo";

const Header = () => {
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

      if (!menuOpen &&  window.scrollY > 250) {
        setMenuOpen(false)
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
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={`${styles.header} ${hideHeader ? styles.slideUp : ""}`}>
        <nav className={styles.navbar}>

        <div className={styles.headerContainer}>
          <div className={styles.logoHeader}>
            <a href="hero" >
                <Logo />
              </a>
          </div>

          <div className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`}>              
              <ul>
                  <li>
                    <a href="/#about" className={styles.navLink}>About us</a>
                  </li>
             
                  <li>
                    <a href="/#services" className={styles.navLink}>Services</a>
                  </li>

                  <li>
                    <a href="/#work" className={styles.navLink}>Our Work</a>
                  </li>

                  <li>
                    <a href="/#contact" className={styles.navLink}>Contact</a>
                  </li>
              </ul>
            </div>
                <Theme />
                <Button active={menuOpen} onClick={handleMenuClick} />
            </div>
        </nav>
    </header>
  );
}

export default Header;
