"use client";

import { headerFont } from "../../../../fonts";
import styles from "./workpage.module.css";
import { images } from "src/data/images";

function workPage({ title }) {
  
  return (
    <div className="pageContainer">
      <div>
        <h1 className={headerFont.className}>{title}</h1>
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
