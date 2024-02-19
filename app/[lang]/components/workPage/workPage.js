"use client";

// import { headerFont } from "../../../../fonts";
import styles from "./workpage.module.css";
import { images } from "src/data/images";
import Image from "next/image";
import backIcon from "/assets/back.svg"
import Link from "next/link";

function workPage({ title, locale }) {
  
  return (
    <div className="pageContainer">
      <div>
        <Link href={`/${locale}`}>
          <Image src={backIcon} className={`${styles.svg} button-40`} alt="back button"/>
        </Link>
        {/* <h1 className={headerFont.className}>{title}</h1> */}
        <div className={styles.workGrid}>
          {images.map((image) => (
            <img src={image} className={styles.image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default workPage;
