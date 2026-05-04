import styles from './ColoredBox.module.css'

export default function ColoredBox({ title, children }) {
    return <div className={styles.box}>
        <div className={styles.heading}>{title}</div>
        <div>{children}</div>
    </div>
}
