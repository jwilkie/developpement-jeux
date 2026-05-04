import { getGroupBySlug } from "@/model/group";
import { createOGImage } from "@/utils/createImage";

export const dynamic = 'force-static';

export { generateStaticParams } from '../page';

export async function GET(request, { params }) {
    const { group: slug } = await params;
    const group = await getGroupBySlug(slug);

    return createOGImage(group.title);
}