import { readdir, readFile } from 'fs/promises';
import { join } from 'path/posix';

async function getSectionPages(section) {
    // Get pages from configs array
    let pageSlugs = section.pages || [];

    // Get pages from section directory
    let pageSlugsFromDirectory = (await readdir(join(process.cwd(), 'app', '(section)', section.slug), { withFileTypes: true }))
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name);

    // The configs array is used to keep an order to the pages. If a page is 
    // not in the configs array, we simply add it to the end of the pages. It 
    // will appear last on the section page.
    for (const pageSlug of pageSlugsFromDirectory) {
        if (!pageSlugs.includes(pageSlug)) {
            pageSlugs.push(pageSlug);
        }
    }

    // Get all pages' metadata
    let promises = pageSlugs.map(
        (pageSlug, index) => import(`@/app/(section)/${section.slug}/${pageSlug}/page.jsx`)
            .then(({ metadata }) => ({ slug: pageSlug, index, section: section.slug, ...metadata }))
    );

    // Remove pages with no metadata
    let pages = (await Promise.all(promises))
        .filter((page) => Object.keys(page).length > 1);

    return pages
}

async function getSectionGroups(section) {
    let groups = {};
    for (const page of section.pages) {
        if (!groups[page.group]) {
            groups[page.group] = []
        }

        groups[page.group].push(page);
    }

    return groups;
}

async function getSectionSlugs() {
    let sectionSlugs = (await readdir(join(process.cwd(), 'app', '(section)'), { withFileTypes: true }))
        .filter((entry) => entry.isDirectory() && entry.name !== '[section]')
        .map((entry) => entry.name)
        .sort((name1, name2) => parseInt(name1.split('-').at(-1)) - parseInt(name2.split('-').at(-1)));

    return sectionSlugs;
}

export async function getSectionBySlug(sectionSlug) {
    let fileText = await readFile(join(process.cwd(), 'app', '(section)', sectionSlug, 'section.json')).then((text) => text, () => null);
    if(fileText) {
        let section = JSON.parse(fileText);
        section.slug = sectionSlug;
        section.pages = await getSectionPages(section)
        section.groups = await getSectionGroups(section)

        return section;
    }
    else {
        // console.error('Invalid section error: ')
        throw new Error(`The directory of the section /app/(section)/${sectionSlug}/ does not contain a section.json file. See more info here DOC_URL_HERE`);
    }
}

export async function getSections() {
    let sectionSlugs = await getSectionSlugs();
    let promises = sectionSlugs.map((slug) => getSectionBySlug(slug));
    let sections = (await Promise.all(promises)).filter((section) => section);

    return sections;
}
