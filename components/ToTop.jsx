import usePageOverflow from '@/hooks/usePageOverflow';

import styles from './ToTop.module.css'

export default function ToTop({isAsideOpen}) {
    /**
     * Variable indicating whether the the page is overflowing or not.
     */
    const isPageOverflowing = usePageOverflow(1.5)

    /**
     * Scroll back to the top of the page smoothly.
     */
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div className={styles.container}>
        <button 
            className={
                styles.button + 
                (!isPageOverflowing ? ' ' + styles.hidden : '') + 
                (isAsideOpen ? ' ' + styles.aside : '')
            } 
            title="Défiler vers le haut" 
            onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="89 0 334 512" preserveAspectRatio="none"><path d="m142.253 372.47-4.117-11.426c-2.203-6.119-14.204-40.084-24.068-80.469l-25.066 20.052v109.686l53.932-35.954zm255.68-91.895c-9.864 40.386-21.866 74.352-24.071 80.476l-4.115 11.419-.681 1.889 53.932 35.954V300.627zM265.824 6.793 256 0l-9.824 6.792C241.639 9.928 135.07 84.795 135.07 188.213c0 61.675 34.122 157.091 35.574 161.124l4.115 11.42h162.483l4.115-11.42c1.451-4.031 35.573-99.447 35.573-161.122 0-103.42-106.569-178.286-111.106-181.422"></path><path className={styles.fire} d="M348.479,395.31H163.521l-9.214,46.069h36.864c0.198,3.882,0.753,7.877,1.772,11.943c5.898,23.533,24.824,42.294,56.251,55.763L256,512l6.805-2.916c31.427-13.468,50.353-32.23,56.251-55.763c1.019-4.067,1.574-8.061,1.772-11.943h36.864L348.479,395.31z"></path></svg>
            <i className={ styles.arrow }></i>
        </button>
    </div>
}
