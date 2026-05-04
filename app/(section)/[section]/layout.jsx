import appConfig from "@/app.config"

/**
 * @returns {import("next").Metadata}
 */
export async function generateMetadata({ params }) {
    const { section: slug } = await params;

    return {
        openGraph: {
            images: [
                {
                    url: `./${slug}/og.png`,
                    alt: appConfig.title,
                    type: 'image/png',
                    width: 1200,
                    height: 630
                }
            ]
        }
    }
}

export default function Layout({ children }) {
    return children
}