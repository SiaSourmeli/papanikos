import styles from './about.module.css';

const About = ({dictionary}) => {
    return (
        <div id="about" className="container">

            <div className={styles.aboutContainer}>
                <div className={styles.textWrap}>
                    <h1 className={styles.aboutHeader}>{dictionary.title}</h1>
                    <p className={styles.aboutText}>
                       {dictionary.text}
                    </p>
                </div>

                <div>
                    <img src="https://ucarecdn.com/c2613cfc-7b62-4bff-95aa-1c49f5102ebf/-/preview/700x700/-/quality/smart_retina/-/format/auto/" className={styles.aboutImage} alt="Workshop" />
                </div>
            </div>

        </div>
    )
}

export default About;