import appConfig from "@/app.config"

/**
 * @returns {import("next").Metadata}
 */
export async function generateMetadata({params}) {
    // Hack to get pathname of current page
    // Change once the Next offers a legit way to get the pathname in the 
    // generateMetadata for static builds.
    const pathname = Object.getOwnPropertySymbols(params)
        .map((item) => params[item])
        .find((state) => state?.hasOwnProperty("incrementalCache"))?.route;

    return {
        openGraph: {
            images: [
                {
                    url: `./${pathname}/og.png`,
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