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
            <label class={styles.switch}>
                <input type="checkbox" checked={theme === 'dark'} onClick={switchTheme} />
                <span class={styles.slider} />
            </label>
        </div>
    )
}

export default Theme;