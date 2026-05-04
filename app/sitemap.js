import appConfig from "@/app.config";
import { getGroups } from "@/model/group";
import { getSections } from "@/model/section"

export const dynamic = 'force-static';

/**
 * Return the data to generate the sitemap.xml file.
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default async function sitemap() {
    let sections = await getSections();
    let groups = await getGroups();

    return [
        {
            url: appConfig.domain,
            lastModified: new Date()
        },
        ...sections
            .filter((section) => !section.disabled)
            .map((section) => ({
                url: `${appConfig.domain}/${section.slug}`,
                lastModified: new Date()
            })),
        ...Object.values(groups)
            .filter((group) => !group.noIndex)
            .map((group) => ({
                url: `${appConfig.domain}/group/${group.slug}`,
                lastModified: new Date()
            })),
        ...sections
            .filter((section) => !section.disabled)
            .map((section) => section.pages)
            .flat()
            .map((sectionPage) => ({
                url: `${appConfig.domain}/${sectionPage.section}/${sectionPage.slug}`,
                lastModified: new Date()
            })),
        ...Object.values(groups)
            .filter((group) => group.noSection)
            .map((group) => group.pages)
            .flat()
            .map((groupPage) => ({
                url: `${appConfig.domain}/group/${groupPage.group}/${groupPage.slug}`,
                lastModified: new Date()
            }))
    ];
}