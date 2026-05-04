import appConfig from "@/app.config";
import { icons } from "@/model/icons";
import { getColors } from "@/utils/createImage";

export const dynamic = 'force-static';

/**
 * Return the data to generate the manifest.webmanifest file.
 * @returns {import("next").MetadataRoute.Manifest}
 */
export default async function manifest() {
    const colors = await getColors(['--bg-color', '--bg-accent-color']);

    return {
        name: appConfig.title,
        short_name: appConfig.title,
        description: appConfig.description,
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: colors['--bg-accent-color'],
        background_color: colors['--bg-color'],
        icons: [
            ...icons.map((icon) => ({
                src: `icon/${icon.id}`,
                sizes: `${icon.size.width}x${icon.size.height}`,
                type: icon.contentType
            })),
            {
                src: 'apple-icon',
                sizes: '180x180',
                type: 'image/png'
            }
        ]
    }
}