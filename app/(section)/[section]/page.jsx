import Link from 'next/link'
import appConfig from '@/app.config'
import Bubble from '@/components/Bubble'
import { getGroups } from '@/model/group'
import { getSectionBySlug, getSections } from '@/model/section'
import capitalize from '@/utils/capitalize'

import styles from './page.module.css'

export async function generateStaticParams() {
    let sections = await getSections();
    
    return sections
        .filter((section) => !section.disabled)
        .map((section) => ({ section: section.slug }));
}

export async function generateMetadata({params}) {
    const { section: slug } = await params;
    let section = await getSectionBySlug(slug);
    let index = slug.substring(appConfig.sectionName.length + 1)

    return {
        title: `${capitalize(appConfig.sectionName)} ${index}`,
        description: section.description
    }
}

export default async function Section({params}) {
    const { section: slug } = await params;
    let section = await getSectionBySlug(slug);
    let groups = await getGroups();
    let index = slug.substring(appConfig.sectionName.length + 1)

    return <section className={styles.section}>
        <div className={styles.header}>
            <Bubble name={capitalize(appConfig.sectionName)} number={index} />
            <h1>{section.title}</h1>
        </div>

        {Object.entries(section.groups).map(([groupSlug, pages]) => (
            <section key={groupSlug} className={styles.group}>
                <h2>{groups[groupSlug].label}</h2>
                <ul>
                    {pages.map((page) => (
                        <li key={page.slug}>
                            <Link href={`/${section.slug}/${page.slug}`}>{page.title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        ))}
    </section>
}
