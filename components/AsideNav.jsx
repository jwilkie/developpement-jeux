import NavLink from './NavLink';
import appConfig from '@/app.config';
import useCurrentPage from '@/hooks/useCurrentPage';
import capitalize from '@/utils/capitalize';
import formatUnsignedInt from '@/utils/formatUnsignedInt';

import styles from './AsideNav.module.css';

export default function AsideNav({ sections, groups, closeAside }) {
    let { currentSection, currentPage } = useCurrentPage(sections, groups)

    /**
     * Indicates whether the section slug passed in parameter is the current section or not.
     * @param {string} sectionSlug The section slug to match with the current section.
     * @returns A value indicating whether the section slug passed in parameter is the current section or not.
     */
    const isInCurrentSection = (sectionSlug) =>
        currentSection && sectionSlug === currentSection.slug;

    /**
     * Indicates whether the group slug passed in parameter is the current group or not.
     * @param {string} groupSlug The group slug to match with the current group.
     * @returns A value indicating whether the group slug passed in parameter is the current group or not.
     */
    const isInCurrentGroup = (groupSlug) =>
        currentSection && currentPage && currentPage.group === groupSlug

    return <nav className={styles.nav}>
        <ul className={styles['section-list']}>
            {sections.map((section, index) =>
                <li key={section.slug}>
                    {section.disabled ?
                        <span className={styles.disabled}>
                            {`${capitalize(appConfig.sectionName)} ${formatUnsignedInt(index + 1, 2)}`}
                        </span>
                        :
                        <NavLink href={`/${section.slug}`} activeClassName={styles.active} onClick={closeAside}>
                            {`${capitalize(appConfig.sectionName)} ${formatUnsignedInt(index + 1, 2)}`}
                        </NavLink>
                    }

                    {isInCurrentSection(section.slug) &&
                        <ul className={styles['group-list']}>
                            {Object.entries(section.groups).map(([groupSlug, pages]) => (
                                <li key={groupSlug}>
                                    <span className={isInCurrentGroup(groupSlug) ? styles.active : ''}>
                                        {groups[groupSlug].label}
                                    </span>
                                    <ul className={styles['page-list']}>
                                        {pages.map((page) => (
                                            <li key={page.slug}>
                                                <NavLink href={`/${section.slug}/${page.slug}`} onClick={closeAside} activeClassName={styles.active}>
                                                    {page.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    }
                </li>
            )}
        </ul>
    </nav>
}
