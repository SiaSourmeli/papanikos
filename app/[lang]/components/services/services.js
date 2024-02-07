import { headerFont } from "../../layout";
import styles from "./services.module.css";

const Services = ({ dictionary }) => {
    
  return (
    <div className="container">
      <h1 id="services" className={`${styles.title} ${headerFont.className}`} >
        {dictionary.title}
      </h1>

      <div className={styles.servicesGrid}>
        <div>
          <img
            src="https://ucarecdn.com/a94a7692-0504-4add-9969-af68739a0466/services_01169.jpg"
            className={styles.servicesImage}
            alt="Material Supply"
          />

          <div>
            <h2 className={`${styles.serviceTitle} ${headerFont.className}`}>{dictionary.subTtile1}</h2>
            <p className={styles.serviceText}>{dictionary.text1}</p>
          </div>
        </div>

        <div>
          <img
            src="https://ucarecdn.com/1d760fb1-4570-45d9-9439-5f94a6257709/services_02169.jpg"
            className={styles.servicesImage}
            alt="Precision cutting & engraving"
          />

          <div>
            <h2 className={`${styles.serviceTitle} ${headerFont.className}`}>{dictionary.subTtile2}</h2>
            <p className={styles.serviceText}>{dictionary.text2}</p>
          </div>
        </div>

        <div>
          <img
            src="https://ucarecdn.com/2fa15d3d-6209-4199-97fc-32e17f58cd4c/services_03169.jpg"
            className={styles.servicesImage}
            alt="Custom fabrication"
          />

          <div>
            <h2 className={`${styles.serviceTitle} ${headerFont.className}`}>{dictionary.subTtile3}</h2>
            <p className={styles.serviceText}>{dictionary.text3}</p>
          </div>
        </div>

        <div>
          <img
            src="https://ucarecdn.com/6bed1714-b4f6-4c55-8fde-25b5d176b737/services_04169.jpg"
            className={styles.servicesImage}
            alt="Product & Graphic Design"
          />

          <div>
            <h2 className={`${styles.serviceTitle} ${headerFont.className}`}>{dictionary.subTtile4}</h2>
            <p className={styles.serviceText}>{dictionary.text4}</p>
          </div>
        </div>

        <div>
          <img
            src="https://ucarecdn.com/045e7289-168a-4e72-8982-96b544e35658/services_05169.jpg"
            className={styles.servicesImage}
            alt="Multi-surface digital printing"
          />

          <div>
            <h2 className={`${styles.serviceTitle} ${headerFont.className}`}>{dictionary.subTtile5}</h2>
            <p className={styles.serviceText}>{dictionary.text4}</p>
          </div>
        </div>

        <div>
          <img
            src="https://ucarecdn.com/892eccb9-d697-4930-b69e-48b2f1ada405/services_06169.jpg"
            className={styles.servicesImage}
            alt="Surface processing"
          />

          <div>
            <h2 className={`${styles.serviceTitle} ${headerFont.className}`}>{dictionary.subTtile6}</h2>
            <p className={styles.serviceText}>{dictionary.text4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
