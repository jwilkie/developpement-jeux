import appConfig from "@/app.config";
import { getSectionBySlug } from "@/model/section";
import capitalize from "@/utils/capitalize";
import { createOGImage } from "@/utils/createImage";

export const dynamic = 'force-static';

export { generateStaticParams } from '../page';

export async function GET(request, { params }) {
    const { section: slug } = await params;
    let section = await getSectionBySlug(slug);
    let index = slug.substring(appConfig.sectionName.length + 1)

    return createOGImage(`${capitalize(appConfig.sectionName)} ${index}`, section.title);
}