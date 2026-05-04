import styles from './Logo.module.css'

export default function Logo() {
    return <div className={styles.logo}>
        <div className={styles.title}>
            <div>Programmation</div>
            <span>Internet</span>
        </div>
        <div className={styles.number}>2</div>
    </div>
}
