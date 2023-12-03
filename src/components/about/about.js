import styles from './about.module.css';

const About = () => {
    return (
        <div id="about" className="container">

            <div className={styles.aboutContainer}>
                <div className={styles.textWrap}>
                    <h1 className={styles.aboutHeader}>About us</h1>
                    <p className={styles.aboutText}>
                        Papanikos Workshop is the descendant of a long-established plexiglas family-run operation in Alimos,
                        in the southern suburbs of Athens. With years of experience in the field of acrylic fabrication,
                        a commitment to excellence, and a passion for experimentation, our space has nowadays expanded to process other materials
                        and techniques as well, all dedicated to transforming ideas into high quality custom-crafted creations.
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