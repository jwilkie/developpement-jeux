import { readdir, readFile } from 'fs/promises';
import { join } from 'path/posix';

async function getGroupPages(group) {
    // Get pages from group directory
    let pageSlugs = (await readdir(join(process.cwd(), 'app', 'group', group.slug), { withFileTypes: true }))
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name);

    // Get all pages' metadata
    let promises = pageSlugs.map(
        (pageSlug, index) => import(`../app/group/${group.slug}/${pageSlug}/page.jsx`)
            .then(({ metadata }) => ({ slug: pageSlug, index, ...metadata, group: group.slug }))
    );

    // Remove pages with no metadata
    let pages = (await Promise.all(promises))
        .filter((page) => Object.keys(page).length > 1);

    return pages;
}

async function getGroupSlugs() {
    let groupSlugs = (await readdir(join(process.cwd(), 'app', 'group'), { withFileTypes: true }))
        .filter((entry) => entry.isDirectory() && entry.name !== '[group]')
        .map((entry) => entry.name);

    return groupSlugs;
}

export async function getGroupBySlug(groupSlug) {
    let fileText = await readFile(join(process.cwd(), 'app', 'group', groupSlug, 'group.json'));
    let group = JSON.parse(fileText);
    group.slug = groupSlug;
    if(group.noSection) {
        group.pages = await getGroupPages(group);
    }

    return group;
}

export async function getGroups() {
    let groupSlugs = await getGroupSlugs()
    let promises = groupSlugs.map((groupSlug) => getGroupBySlug(groupSlug));
    let groupsArray = await Promise.all(promises);
    let groups = groupsArray.reduce((groups, group) => ({ ...groups, [group.slug]: group}), {});

    return groups;
}
