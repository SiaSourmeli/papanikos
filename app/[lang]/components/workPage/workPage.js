"use client";

// import { headerFont } from "../../../../fonts";
import styles from "./workpage.module.css";
import Image from "next/image";
import backIcon from "/assets/back.svg"
import Link from "next/link";
import PhotoAlbum from "react-photo-album";
import { photos } from "../../../../src/data/photos";

function workPage({ title, locale }) {
  
  return (
    <div className="pageContainer">
      <div>
        <div className={styles.btnWrap}>
          <Link href={`/${locale}`}>
            <Image src={backIcon} className={`${styles.svg} button-40`} alt="back button"/>
          </Link>
          {/* <h1 className={headerFont.className}>{title}</h1> */}
        </div>

        <div className={styles.workGrid}>
        <PhotoAlbum 
          layout="masonry" 
          columns={(containerWidth) => {
            if (containerWidth < 640) {
                return 1
            } else if (containerWidth < 1000) {
              return 2;
            } else if (containerWidth < 1536) {
              return 3;
            } else {
              return 4;
            }
           
          }} 
          photos={photos} />
        </div>
      </div>
    </div>
  );
}





export default workPage;
