import { headerFont } from "../../../../fonts";
import Link from "next/link";
import styles from "./work.module.css";

const Work = ({ dictionary, locale }) => {
  return (
    <div className="container">
      <div id="work" className={`${styles.workHeader} ${headerFont.className}`}>
        <h1 className="title">{dictionary.title}</h1>
        <div className={styles.buttonWrap}>
          <Link href={`${locale}/work`} className={`${styles.link} button-40`}>
            <span className={styles.showAllBtn}>{dictionary.showAll}</span>
            <span className={styles.plusBtn}>+</span>
          </Link>
        </div>
      </div>

      <div className={styles.grid}>
        <img
          src="https://ucarecdn.com/756987c8-e85c-405f-aedf-7b6f98a91264/-/preview/1000x625/-/quality/smart_retina/-/format/auto/"
          alt="Work Sample"
          className={`${styles.itemA} ${styles.workImages}`}
        />
        <img
          src="https://ucarecdn.com/3657edb5-47c3-48ca-98bc-0634c6430ec8/-/preview/1000x625/-/quality/smart_retina/-/format/auto/"
          alt="Work Sample"
          className={`${styles.itemB} ${styles.workImages}`}
        />
        <img
          src="https://ucarecdn.com/2a6fce86-6024-4d43-a63c-7a720c5af4ab/-/preview/1000x625/-/quality/smart_retina/-/format/auto/"
          alt="Work Sample"
          className={`${styles.itemC} ${styles.workImages}`}
        />
        <img
          src="https://ucarecdn.com/562c6b6c-a84f-4a6f-8cdb-92e14b6276b5/-/preview/1000x304/-/quality/smart_retina/-/format/auto/"
          alt="Work Sample"
          className={`${styles.itemD} ${styles.workImages}`}
        />
        <img
          src="https://ucarecdn.com/2026e284-67c4-4996-92b5-87274f5747d7/-/preview/1000x625/-/quality/smart_retina/-/format/auto/"
          alt="Work Sample"
          className={`${styles.itemE} ${styles.workImages}`}
        />
        <img
          src="https://ucarecdn.com/7c75651e-cca7-4b37-b370-c00cad6c2a85/-/preview/1000x625/-/quality/smart_retina/-/format/auto/"
          alt="Work Sample"
          className={`${styles.itemF} ${styles.workImages}`}
        />
        <img
          src="https://ucarecdn.com/06de0418-2ef4-4314-ae81-e0ca09c01115/-/preview/1000x304/-/quality/smart_retina/-/format/auto/"
          alt="Work Sample"
          className={`${styles.itemG} ${styles.workImages}`}
        />
        <img
          src="https://ucarecdn.com/567933c5-99ed-4e84-910f-dddc221ffb4a/-/preview/1000x625/-/quality/smart_retina/-/format/auto/"
          alt="Work Sample"
          className={`${styles.itemGMobile} ${styles.workImages} `}
        />
      </div>

      {/* <div className={styles.workGrid}>
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
      </div> */}
    </div>
  );
};
export default Work;
