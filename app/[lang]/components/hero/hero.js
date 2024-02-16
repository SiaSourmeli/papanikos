import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div id="" className={styles.heroContainer}>
      <img
        src="https://ucarecdn.com/4a1e7797-c900-4f12-b5bc-9814403a276c/HEADER_72dpi.jpg"
        className={styles.heroImage}
        alt="workshop"
      ></img>
    </div>
  );
};

export default Hero;
