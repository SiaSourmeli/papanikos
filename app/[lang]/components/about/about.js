import { headerFont } from "../../../../fonts";
import styles from "./about.module.css";

const About = ({ dictionary }) => {
    
  return (
    <div id="about" className="container">
      <div className={styles.aboutContainer}>
        <div className={styles.textWrap}>
          <h1 className={`${styles.aboutHeader} ${headerFont.className}`}>{dictionary.title}</h1>
          <p className={styles.aboutText}>{dictionary.text}</p>
        </div>

        <div className={styles.imageWrap}>
          <img
            src="https://ucarecdn.com/397721c5-4ddc-4313-bde3-42a569880fbe/ABOUT_72dpi.jpg"
            className={styles.aboutImage}
            alt="Workshop"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
