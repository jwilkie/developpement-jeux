import IC from './InlineCode'
import styles from './Color.module.css'

export default function Color({value}) {
    return <span className={styles.color}>
        <IC>
            <span className={styles.box} style={{backgroundColor: value}}></span>
            {value}
        </IC>
    </span>
}