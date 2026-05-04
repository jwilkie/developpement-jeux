import { useEffect, useState } from 'react';
import useCleanPathname from './useCleanPathname';
import appConfig from '@/app.config';

export default function useCurrentPage(sections, groups) {
    const pathname = useCleanPathname();

    const getCurrentSection = () => {
        if (pathname.startsWith(`/${appConfig.sectionName}-`)) {
            let sectionSlug = pathname.split('/')[1];
            return sections.find((section) => section.slug === sectionSlug);
        }
        else {
            return null;
        }
    }

    const getCurrentGroup = () => {
        if (pathname.startsWith(`/group/`)) {
            let groupSlug = pathname.split('/')[2];
            return groups[groupSlug];
        }
        else {
            return null;
        }
    }

    const getCurrentPage = (section, group) => {
        if (section && pathname.startsWith(`/${section.slug}/`)) {
            // We are in a section's page
            let pageSlug = pathname.substring(pathname.lastIndexOf('/') + 1);
            return section.pages.find((page) => page.slug === pageSlug);
        }
        else if (group && pathname.startsWith(`/group/${group.slug}/`)) {
            // We are in a group's page
            let pageSlug = pathname.substring(pathname.lastIndexOf('/') + 1);
            return group.pages.find((page) => page.slug === pageSlug);
        }
        else {
            // We are not in a page
            return null;
        }
    }

    const defaultSection = getCurrentSection();
    const defaultGroup = getCurrentGroup();
    const defaultPage = getCurrentPage(defaultSection, defaultGroup)

    const [currentSection, setCurrentSection] = useState(defaultSection);
    const [currentGroup, setCurrentGroup] = useState(defaultGroup);
    const [currentPage, setCurrentPage] = useState(defaultPage);

    useEffect(() => {
        const section = getCurrentSection();
        const group = getCurrentGroup();
        const page = getCurrentPage(section, group)

        setCurrentSection(section);
        setCurrentGroup(group);
        setCurrentPage(page);
    }, [pathname])

    return { currentSection, currentGroup, currentPage }
}
