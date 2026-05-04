import { getGroups } from './group';
import { getSections } from './section';

function addToIndex(index, key, value) {
    if(!index[key.toLowerCase()]) {
        index[key.toLowerCase()] = [];
    }

    index[key.toLowerCase()].push(value)
}

function addPageToIndex(index, page, groups) {
    // Add page title to index
    addToIndex(index, page.title, page);

    // Add page group to index
    addToIndex(index, groups[page.group].label, page);

    // Add all keywords to index
    for(const keyword of page.keywords){
        addToIndex(index, keyword, page);
    }
}

export async function getIndexOfPages() {
    const sections = await getSections();
    const groups = await getGroups();

    let index = {};

    // Add all pages from sections
    for(const section of sections){
        for(const page of section.pages){
            addPageToIndex(index, page, groups);
        }
    }

    // Add all pages from groups
    for(const group of Object.values(groups).filter((group) => group.noSection)) {
        for(const page of group.pages){
            addPageToIndex(index, page, groups);
        }
    }

    return index;
}