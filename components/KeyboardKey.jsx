import styles from './KeyboardKey.module.css'

export default function KeyboardKey({ children }) {
    return <kbd className={styles.key}>
        {children}
    </kbd>
}