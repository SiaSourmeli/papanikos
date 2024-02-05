import styles from './button.module.css';

function Button(props) {  
    return (
        <button className={`${styles.navButton} ${props.active ? 'active' : ''}`} onClick={() => {props.onClick()}}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
    )
}

export default Button;