import styles from './topBar.module.css';
import Image from 'next/image';
import telIcon from '../../../../assets/tel.svg';
import mailIcon from '../../../../assets/mail.svg';
import LocaleSwitcher from '../locale-switcher/locale-switcher';
 
const TopBar = () => {

    return (
            <div className={styles.topBarContainer}>
     
                <ul className={styles.topBar}>
                    <li>
                        <Image src={telIcon} alt="Telephone"/>
                        <a href="tel:210 9910151">210 9910151</a>
                    </li>

                    <li>
                        <Image src={mailIcon} alt="Email"/>
                        <a href="mailto:laz.papanikos@gmail.com">laz.papanikos@gmail.com</a>
                    </li>

                    <li>
                        <LocaleSwitcher />
                    </li>
                </ul>
             

                {/* <hr className="header-divider"></hr> */}
            </div>
            
    );
  }
  
  export default TopBar;

  