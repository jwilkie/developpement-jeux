import Link from 'next/link'
import useCurrentPage from '@/hooks/useCurrentPage'
import appConfig from '@/app.config.js'

import styles from './Breadcrumb.module.css'
import capitalize from '@/utils/capitalize';

export default function Breadcrumb({ sections, groups }) {
    let { currentSection, currentGroup, currentPage } = useCurrentPage(sections, groups);

    const getPath = () => {
        if (currentSection) {
            return `/${currentSection.slug}`;
        }
        else if (currentGroup) {
            return `/group/${currentGroup.slug}`;
        }
        else {
            return null;
        }
    }

    const getTitle = () => {
        if (currentSection) {
            // We are showing the section number instead of the section title (currentSection.title)
            // Ex: Instead of `Title of the section` we show `Section 1`
            return `${capitalize(appConfig.sectionName)} ${currentSection.slug.substring(appConfig.sectionName.length + 1)}`;
        }
        else if (currentGroup) {
            return currentGroup.label;
        }
        else {
            return null;
        }
    }

    return currentPage && <nav className={styles.breadcrumb}>
        <span>
            <Link href={getPath()}>
                {getTitle()}
            </Link>
            <span className={styles.separator}>&gt;</span>
        </span>

        {currentSection &&
            <span>
                {groups[currentPage.group].label}
                <span className={styles.separator}>&gt;</span>
            </span>
        }

        <span>
            {currentPage.title}
        </span>
    </nav>
}
