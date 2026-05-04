import Link from 'next/link';

import styles from './PageSwitcher.module.css';
import useCurrentPage from '@/hooks/useCurrentPage';

export default function PageSwitcher({sections, groups}) {
    const { currentSection, currentGroup, currentPage } = useCurrentPage(sections, groups);

    const isFirst = () => currentPage.index === 0;

    const isLast = () => {
        const pageList = (currentSection || currentGroup)?.pages;
        if(pageList) {
            return currentPage.index ===  pageList.length - 1;
        }
        else {
            return false;
        }
    }

    const getPath = (offset) => {
        if(currentSection) {
            return `/${currentSection.slug}/${currentSection.pages[currentPage.index + offset].slug}`
        }
        else if(currentGroup) {
            return `/group/${currentGroup.slug}/${currentGroup.pages[currentPage.index + offset].slug}`
        }
        else {
            return null;
        }
    }

    return currentPage && <div className={styles.switcher + ' ' + (isFirst() ? styles.first : (isLast() ? styles.last : ''))}>
        {!isFirst() &&
            <Link href={getPath(-1)} className={styles.link}>
                <span>&lt;&lt;</span> <span>Page précédente</span>
            </Link>
        }
        {!isLast() &&
            <Link href={getPath(1)} className={styles.link}>
                <span>Page suivante</span> <span>&gt;&gt;</span>
            </Link>
        }
    </div>
}