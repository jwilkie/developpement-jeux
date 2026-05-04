import formatUnsignedInt from '@/utils/formatUnsignedInt';

import styles from './Bubble.module.css';

export default function Bubble({ name, number }) {
    return  <div className={styles.bubble}>
        <span className={styles.name}>{name}</span>
        <span className={styles.number}>{formatUnsignedInt(number, 2)}</span>
    </div>
}
