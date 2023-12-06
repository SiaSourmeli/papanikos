import styles from "./workpage.module.css";
import { images } from "src/data/images";

function workPage({}) {
  console.log();

  return (
    <div className="pageContainer">
      <div>
        <div className={styles.workGrid}>
          {images.map((image) => (
            <img src={image} className={styles.image} alt=""></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default workPage;
