'use client'

import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

import styles from './Spoiler.module.css';

export default function Spoiler({children, label='Voir / Cacher', border=true}) {
    const [height, setHeight] = useState(0);

    const toggleHeight = () => {
        setHeight(height === 0 ? 'auto' : 0);
    };

    return <div className={styles.spoiler}>
        <button className={styles.button + (height === 0 ? ' ' + styles.hidden : '')} onClick={toggleHeight}>
            {label}
        </button>
        <AnimateHeight height={height} duration={300} animateOpacity={true}>
            <div className={styles.container + (!border ? ' ' + styles['no-border'] : '')}>
                {children}
            </div>
        </AnimateHeight>
    </div>
};