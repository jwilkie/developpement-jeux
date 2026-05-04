import React from 'react';

import styles from './InlineCode.module.css';

export default function InlineCode(props) {
    return <span className={ styles.inline }>
        { props.children }
    </span>
}
