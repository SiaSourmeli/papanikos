import Link from "next/link";
import styles from "./work.module.css";

const Work = ({ dictionary }) => {
  return (
    <div className="container">
      <div className={styles.workHeader}>
        <h1 id="work" className="title">
          {dictionary.title}
        </h1>
        <div className={styles.buttonWrap}>
          <Link href="/work" className={styles.link}>
            <button className="button-40" role="button">
              {dictionary.showAll}
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.workGrid}>
        <div>
          <img
            src="https://ucarecdn.com/796a95ac-8a10-4cd7-9299-5842f60c454a/-/preview/900x900/-/quality/smart_retina/-/format/auto/"
            className={styles.workImages}
            alt="Work Sample"
          />
        </div>

        <div>
          <img
            src="https://ucarecdn.com/e383462a-6919-4ff0-a212-1d7138ccaf17/-/preview/900x900/-/quality/smart_retina/-/format/auto/"
            className={styles.workImages}
            alt="Work Sample"
          />
        </div>

        <div>
          <img
            src="https://ucarecdn.com/755cbbc4-784a-4d30-93a8-e7fc3fe7f33f/-/preview/900x900/-/quality/smart_retina/-/format/auto/"
            className={styles.workImages}
            alt="Work Sample"
          />
        </div>

        <div>
          <img
            src="https://ucarecdn.com/7f754148-2d14-4d2a-b30d-fb419de9a7e9/-/preview/900x900/-/quality/smart_retina/-/format/auto/"
            className={styles.workImages}
            alt="Work Sample"
          />
        </div>

        <div>
          <img
            src="https://ucarecdn.com/8a0bab82-c3a4-4ace-8ade-e78663a9346b/-/preview/900x900/-/quality/smart_retina/-/format/auto/"
            className={styles.workImages}
            alt="Work Sample"
          />
        </div>

        <div>
          <img
            src="https://ucarecdn.com/71384939-9c68-44ce-8826-d77cefd6b628/-/preview/900x900/-/quality/smart_retina/-/format/auto/"
            className={styles.workImages}
            alt="Work Sample"
          />
        </div>
      </div>
    </div>
  );
};
export default Work;
