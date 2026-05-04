'use client'

import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import AnimateHeight from 'react-animate-height';
import { useTheme } from 'next-themes';
import appConfig from '@/app.config';

import styles from './CodeBlock.module.css';
import { useEffect, useState } from 'react';

// Load each languages highlignting from the app configuration
for (const [key, value] of Object.entries(appConfig.code.languages)) {
    SyntaxHighlighter.registerLanguage(key, value.renderer);
}

// TODO: Create my own syntax highlighter because react-syntax-highlighter is buggy
// I need to wait for the components to be mounted to set the styles, which is stupid
export default function CodeBlock({ language, children }) {
    const { resolvedTheme } = useTheme();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight('auto');
    }, []);

    return <div className={styles.container}>
        <div className={styles.tag}>{appConfig.code.languages[language]?.tag || language}</div>
        <AnimateHeight height={height} duration={300} animateOpacity={true}>
            {height && <SyntaxHighlighter
                language={language}
                style={appConfig.code.themes[resolvedTheme] || {}}
                customStyle={{ margin: 0, fontSize: '1rem', border: 'none' }}>
                {children}
            </SyntaxHighlighter>}
        </AnimateHeight >
    </div >
}
