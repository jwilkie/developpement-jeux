'use client'

import { Children, useState, useCallback, useRef, useId } from 'react';
import AnimateHeight from 'react-animate-height';
import CodeBlock from './CodeBlock';

import styles from './WebExample.module.css';

/**
 * Code component that sould be inside the WebExample component.
 */
export function Code({ display = true, language, children }) {
    return <>
        {display &&
            <CodeBlock language={language}>
                {children}
            </CodeBlock>
        }
    </>
}

/**
 * Web example component that can contain HTML, CSS or Javascript code to 
 * display as code and in a frame.
 */
export function WebExample({ title, children }) {
    /**
     * Generate an ID so we can use multiple WebExample in the same page 
     * without causing problems when we post message from the iFrame.
     */
    const id = useId();

    /**
     * Generate the source code of the iframe from the Code components inside 
     * the WebExample. The built source code will have the CSS and Javascript 
     * in their respective tags in the header and the HTML in the body.
     * @returns The built source code from the Code components.
     */
    const renderSource = () => {
        // Object containing the concatenation of all the code from each 
        // supported language.
        let code = { html: '', css: '', js: '' }

        // Looping through each Code components and adding their code to the 
        // corresponding variable in the code object.
        Children.forEach(children, (child) => {
            let { language, children } = child.props;
            if(typeof code[language] === 'string') {
                code[language] += children;
            }
        });

        // Create the source code with the HTML, CSS and Javascript inserted
        // at the right place. We also remove the default margin on the body 
        // of the iFrame and make it fire an event when it's loaded. 
        return `<html>` +
            `<head>` +
                `<style>body{margin:0;padding:1rem}</style>` + 
                `<style>${code.css}</style>` + 
                `<script type="module">${code.js}</script>` + 
                `<script type="module">parent.postMessage('${id}','*');</script>` + 
            `</head>` +
            `<body>${code.html}</body>` +
        `</html>`;
    }

    /**
     * Event handler when receiving a message from the iFrame. We make sure 
     * the message is actually for the current iFrame before modifying its 
     * height.
     * @param {string} param0 Message data sent by the iFrame.
     */
    const onIFrameLoad = useCallback(({data}) => {
        if(data === id) {
            setIFrameHeight(iFrameRef.current);
        }
    }, [id]);

    /**
     * Resize an iFrame to its content height.
     * @param {HTMLIFrameElement} iframe The iFrame we want to resize to its content height.
     */
    const setIFrameHeight = (iframe) => {
        const iFrameHeight = iframe.contentWindow.document.body.scrollHeight + 1;
        const iFrameBorderHeight = iframe.offsetHeight - iframe.clientHeight;
        setHeight(iFrameHeight + iFrameBorderHeight);
    } 

    /**
     * The height of the iFrame.
     */
    const [height, setHeight] = useState(0);

    /**
     * The HTML ref of the iFrame.
     */
    const iFrameRef = useRef();

    /**
     * The callback ref of the iFrame. We use this to add, remove or trigger 
     * events when the ref is modified. We also manage the HTML ref of the 
     * iFrame here.
     */
    const iFrameCallback = useCallback((iframe) => {
        if(iframe) {
            setIFrameHeight(iframe);
            iFrameRef.current = iframe;
            window.addEventListener('message', onIFrameLoad)
        }
        else {
            iFrameRef.current = null;
            window.removeEventListener('message', onIFrameLoad)
        }
    }, [onIFrameLoad]);

    return <div className={styles.container}>
        {children}
        <AnimateHeight height={height} duration={300} animateOpacity={true}>
            <iframe ref={iFrameCallback} title={title} srcDoc={renderSource()} height={height}></iframe>
        </AnimateHeight>
    </div>
}
