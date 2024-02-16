import { headerFont } from "../../../../fonts";
import styles from "./services.module.css";

const Services = ({ dictionary }) => {
  return (
    <div className="container">
      <h1 id="services" className={`${styles.title} ${headerFont.className}`}>
        {dictionary.title}
      </h1>

      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <div className={styles.darken}></div>
          <div className={styles.gradient}></div>
          <div className={styles.textWrap}>
            <div className={`${styles.serviceTitle} ${headerFont.className}`}>
              {" "}
              {dictionary.subTtile1}
            </div>
            {/* <div className={styles.testText}></div> */}
            <p className={styles.serviceText}>{dictionary.text1}</p>
          </div>
          <img
            src="https://ucarecdn.com/ceb8bd67-b0b1-4c44-adad-3326eb6569d7/MATERIAL_72dpi.jpg"
            className={styles.serviceImage}
            alt="Material Supply"
          />
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.darken}></div>
          <div className={styles.gradient}></div>
          <div className={styles.textWrap}>
            <div className={`${styles.serviceTitle} ${headerFont.className}`}>
              {" "}
              {dictionary.subTtile2}
            </div>
            {/* <div className={styles.testText}></div> */}
            <p className={styles.serviceText}>{dictionary.text2}</p>
          </div>
          <img
            src="https://ucarecdn.com/027b5c73-c10b-4a17-8d1c-f1cc1af38111/LASERCUT_72dpi.jpg"
            className={styles.serviceImage}
            alt="Material Supply"
          />
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.darken}></div>
          <div className={styles.gradient}></div>
          <div className={styles.textWrap}>
            <div className={`${styles.serviceTitle} ${headerFont.className}`}>
              {" "}
              {dictionary.subTtile3}
            </div>
            {/* <div className={styles.testText}></div> */}
            <p className={styles.serviceText}>{dictionary.text3}</p>
          </div>
          <img
            src="https://ucarecdn.com/469860d2-ea31-49e2-ab5e-50bbcf58f712/BEND_72dpi.jpg"
            className={styles.serviceImage}
            alt="Material Supply"
          />
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.darken}></div>
          <div className={styles.gradient}></div>
          <div className={styles.textWrap}>
            <div className={`${styles.serviceTitle} ${headerFont.className}`}>
              {" "}
              {dictionary.subTtile4}
            </div>
            {/* <div className={styles.testText}></div> */}
            <p className={styles.serviceText}>{dictionary.text4}</p>
          </div>
          <img
            src="https://ucarecdn.com/3b6cc50b-bc31-4ce3-93d3-c9f396634238/DESIGN_72dpi.jpg"
            className={styles.serviceImage}
            alt="Material Supply"
          />
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.darken}></div>
          <div className={styles.gradient}></div>
          <div className={styles.textWrap}>
            <div className={`${styles.serviceTitle} ${headerFont.className}`}>
              {" "}
              {dictionary.subTtile5}
            </div>
            {/* <div className={styles.testText}></div> */}
            <p className={styles.serviceText}>{dictionary.text5}</p>
          </div>
          <img
            src="https://ucarecdn.com/455688aa-f525-446d-85ca-606b1357e5da/PRINT_72dpi.jpg"
            className={styles.serviceImage}
            alt="Material Supply"
          />
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.darken}></div>
          <div className={styles.gradient}></div>
          <div className={styles.textWrap}>
            <div className={`${styles.serviceTitle} ${headerFont.className}`}>
              {" "}
              {dictionary.subTtile6}
            </div>
            {/* <div className={styles.testText}></div> */}
            <p className={styles.serviceText}>{dictionary.text6}</p>
          </div>
          <img
            src="https://ucarecdn.com/a6c2398c-6c48-422a-926d-39e66fba0db8/SURFACE_72dpi.jpg"
            className={styles.serviceImage}
            alt="Material Supply"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
