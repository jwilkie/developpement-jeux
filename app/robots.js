import appConfig from '@/app.config'

export const dynamic = 'force-static';

/**
 * Return the data to generate the robots.txt file.
 * @returns {import("next").MetadataRoute.Robots}
 */
export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/'
        },
        sitemap: `${appConfig.domain}/sitemap.xml`
    }
}
