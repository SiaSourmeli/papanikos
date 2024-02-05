import styles from './theme.module.css';
import useLocalStorage from 'use-local-storage';

const Theme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
    return (
        <div className={styles.toggleButton}>
            <label className={styles.switch}>
                <input type="checkbox" defaultChecked={theme === 'dark'} onClick={switchTheme} />
                <span className={styles.slider} />
            </label>
        </div>
    )
}

export default Theme;