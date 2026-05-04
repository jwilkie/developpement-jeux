'use client'

import { useEffect, useState } from 'react';
import Aside from './Aside'
import Breadcrumb from './Breadcrumb';
import PageSwitcher from './PageSwitcher';
import PageTitle from './PageTitle';
import ToTop from './ToTop';
import useWindowSize from '@/hooks/useWindowSize';

import styles from './ClientLayout.module.css'

export default function ClientLayout({sections, groups, children}) {
    const [isAsideOpen, setAsideOpen] = useState(false);

    const { windowResizing } = useWindowSize();
    useEffect(() => {
        document.body.classList.toggle('resizing', windowResizing);
    }, [windowResizing])

    return <>
        <Aside state={[isAsideOpen, setAsideOpen]} sections={sections} groups={groups} />

        <main className={styles.main + (isAsideOpen ? ' ' + styles.aside : '')}>
            <div>
                <Breadcrumb sections={sections} groups={groups} />
                <PageTitle sections={sections} groups={groups} />
                {children}
                <PageSwitcher sections={sections} groups={groups} />
            </div>
        </main>

        <ToTop isAsideOpen={isAsideOpen} />
    </>
}
