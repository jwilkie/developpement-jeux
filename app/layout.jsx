import { Comfortaa, Montserrat, Open_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import Footer from '@/components//Footer'
import ClientLayout from '@/components/ClientLayout'
import { getGroups } from '@/model/group'
import { getSections } from '@/model/section'
import appConfig from '@/app.config'
import { icons } from '@/model/icons'

import 'normalize.css/normalize.css'
import '@/styles/globals.css'
import '@/styles/themes.css'
import styles from './layout.module.css'

const comfortaa = Comfortaa({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    variable: '--font-confortaa'
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-montserrat'
});

const opensans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-open-sans'
});

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    metadataBase: new URL(appConfig.domain),
    title: {
        template: `%s | ${appConfig.title}`,
        default: appConfig.title
    },
    icons: {
        icon: icons.map(({id}) => `./icons/${id}`)
    },
    openGraph: {
        images: [
            {
                url: `./og.png`,
                alt: appConfig.title,
                type: 'image/png',
                width: 1200,
                height: 630
            }
        ]
    }
}

export default async function RootLayout({ children }) {
    let sections = await getSections();
    let groups = await getGroups();

    return <html lang="fr" className={`${comfortaa.variable} ${montserrat.variable} ${opensans.variable}`} suppressHydrationWarning>
        <body className={styles.layout}>
            <ThemeProvider>
                <Header groups={groups} />
                <ClientLayout sections={sections} groups={groups}>
                    {children}
                </ClientLayout>
                <Footer />
            </ThemeProvider>
        </body>
    </html>
}
