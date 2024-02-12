import { headerFont } from "../../layout";
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
            src="https://ucarecdn.com/a94a7692-0504-4add-9969-af68739a0466/services_01169.jpg"
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
            src="https://ucarecdn.com/1d760fb1-4570-45d9-9439-5f94a6257709/services_02169.jpg"
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
            src="https://ucarecdn.com/2fa15d3d-6209-4199-97fc-32e17f58cd4c/services_03169.jpg"
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
            src="https://ucarecdn.com/2fa15d3d-6209-4199-97fc-32e17f58cd4c/services_03169.jpg"
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
            src="https://ucarecdn.com/045e7289-168a-4e72-8982-96b544e35658/services_05169.jpg"
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
            src="https://ucarecdn.com/892eccb9-d697-4930-b69e-48b2f1ada405/services_06169.jpg"
            className={styles.serviceImage}
            alt="Material Supply"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
