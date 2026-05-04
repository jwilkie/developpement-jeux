import appConfig from "@/app.config";
import { getSectionBySlug, getSections } from "@/model/section";
import capitalize from "@/utils/capitalize";
import { createOGImage } from "@/utils/createImage";

export const dynamic = 'force-static';

export async function generateStaticParams() {
    const sections = await getSections();
    return sections.flatMap(
        (section) => section.pages.map(
            (page) => ({ section: section.slug, page: page.slug })
        )
    );
}

export async function GET(request, { params }) {
    const slugs = await params;
    const section = await getSectionBySlug(slugs.section);
    const index = slugs.section.substring(appConfig.sectionName.length + 1)
    const page = section.pages.find(({ slug }) => slug === slugs.page);

    return createOGImage(`${capitalize(appConfig.sectionName)} ${index}`, page.title);
}