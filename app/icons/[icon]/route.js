import { icons } from '@/model/icons'
import { createIcon } from '@/utils/createImage'

export const dynamic = 'force-static';

export function generateStaticParams() {
    return icons.map(({ id }) => ({ icon: id }));
}

export async function GET(request, { params }) {
    const { icon: iconId } = await params;
    const size = icons.find(({ id }) => id === iconId).size;

    return createIcon(size);
}