import { createOGImage } from "@/utils/createImage";

export const dynamic = 'force-static';

export async function GET() {
    return createOGImage();
}