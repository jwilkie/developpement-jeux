import Link from 'next/link'
import appConfig from '@/app.config'
import Bubble from '@/components/Bubble'
import { getSections } from '@/model/section'
import capitalize from '@/utils/capitalize'

import styles from './page.module.css'

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: `Accueil | ${appConfig.title}`,
    description: `Accueil et table des matières du cours ${appConfig.title}.`
}

export default async function Home() {
    let sections = await getSections();

    return <>
        <div className={styles.text}>
            {appConfig.description}
        </div>

        <ul className={styles.list}>
            { sections.map((section, index) => (
                <li key={index} className={(section.disabled ? styles.disabled : '')}>
                    <Bubble name={capitalize(appConfig.sectionName)} number={index + 1} />
                    <div className={ styles.description }>
                        {!section.disabled ? 
                            <Link href={`/${section.slug}/`} className={styles.link}><h2>{section.title}</h2></Link>
                            :
                            <h2>{section.title}</h2>
                        }
                        <p>{section.description}</p>
                    </div>
                </li>
            )) }
        </ul>
    </>
}
