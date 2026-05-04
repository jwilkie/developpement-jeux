import styles from './OverflowContainer.module.css'

export default function OverflowContainer({children}) {
    return <div className={styles.container}>
        {children}
    </div>
}