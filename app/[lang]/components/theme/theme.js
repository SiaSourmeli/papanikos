import { useEffect, useState } from 'react';
import styles from './theme.module.css';
import useLocalStorage from 'use-local-storage';

const Theme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        setChecked(theme === 'dark')
    }, [theme])

    const saveTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        <div className={styles.toggleButton}>
            <label className={styles.switch}>
                <input type="checkbox" checked={checked} onChange={saveTheme} />
                <span className={styles.slider} />
            </label>
        </div>
    )
}

export default Theme;