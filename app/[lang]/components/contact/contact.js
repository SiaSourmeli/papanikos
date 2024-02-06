import { headerFont } from "../../layout";
import styles from "./contact.module.css";

const Contact = ({ dictionary }) => {
  return (
    <div id="contact" className={`${styles.contactContainer} container`}>
      <div className={styles.contact}>
        <div>
          <h1 className= {`${styles.contactHeader} ${headerFont.className}`}>{dictionary.title}</h1>

          <div>
            <h3 className={styles.contactSub}>Email</h3>
            <a
              href="mailto:laz.papanikos@gmail.com"
              className={`${styles.contactInfo} underline-hover-effect`}
            >
              laz.papanikos@gmail.com
            </a>

            <h3 className={styles.contactSub}>{dictionary.tel}</h3>
            <a
              href="tel:210 9910151"
              className={`${styles.contactInfo} underline-hover-effect`}
            >
              210 9910 151
            </a>

            <h3 className={styles.contactSub}>{dictionary.map}</h3>
            <a
              href="https://maps.app.goo.gl/U9KhNbdZDH87ZqpS8"
              target="_blank"
              rel="noreferrer"
              className={`${styles.contactInfo} underline-hover-effect`}
            >
              El. Venizelou 19, Alimos 174 56
            </a>

            <div className={styles.buttonWrap}>
              <a
                href="https://maps.app.goo.gl/U9KhNbdZDH87ZqpS8"
                target="_blank"
                rel="noreferrer"
                className="contact-button button-40"
              >
                {dictionary.directions}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.form}>
          <form
            className={styles.formWrap}
            name="simple-contact-form"
            action="https://formspree.io/f/xrgwvalb"
            method="POST"
          >
            <input
              type="text"
              name="name"
              className={styles.formField}
              maxLength="256"
              placeholder={dictionary.name}
              id="name"
              required=""
            ></input>
            <input
              type="email"
              name="_replyto"
              className={styles.formField}
              maxLength="256"
              data-name="Email"
              placeholder="Email"
              id="email"
              required=""
            ></input>

            <textarea
              placeholder={dictionary.text}
              name="message"
              maxLength="5000"
              id="Message"
              data-name="Message"
              className={`${styles.formField} ${styles.textArea} `}
            ></textarea>

            <input
              type="submit"
              value={dictionary.formButton}
              target="_blank"
              data-wait="Please wait..."
              className="button-40"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
