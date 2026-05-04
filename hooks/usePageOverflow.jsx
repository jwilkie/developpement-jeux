import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import debounce from '@/utils/debounce.js';
import useWindowSize from './useWindowSize';

export default function usePageOverflow(ratio = 1) {
    /**
     * State variable indicating whether the page content is overflowing over 
     * a certain ratio of the screen or not.
     */
    const [overflow, setOverflow] = useState(false);

    /**
     * Check if there is an overflow by comparing the height of the window and 
     * the height of the page. This function is debounced, so it can be called 
     * multiple times without any problems.
     */

    // Check if there is an overflow after the first render, after each 
    // resize of the window or after changing pages.
    // TODO: FIX searchParams for search page
    // TODO: FIX page overflow wrong value when changing CSS overflow when opening aside
    const { windowResizing } = useWindowSize();
    const pathname = usePathname();
    // const searchParams = useSearchParams();
    useEffect(() => {
        debounce(() => {
            setOverflow(window.innerHeight * ratio < document.body.offsetHeight);
        }, 500)();
    }, [windowResizing, pathname/*, searchParams*/]);

    return overflow;
}