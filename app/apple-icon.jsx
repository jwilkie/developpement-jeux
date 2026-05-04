import { createIcon } from '@/utils/createImage';

export const dynamic = 'force-static';

export const size = {
    width: 180,
    height: 180
}

export const contentType = 'image/png';

export default async function Icon() {
    return await createIcon(size);
}