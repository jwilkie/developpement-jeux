import { Fragment } from 'react'
import Link from 'next/link'
import appConfig from '@/app.config'
import { getGroupBySlug, getGroups } from '@/model/group'
import { getSections } from '@/model/section'
import capitalize from '@/utils/capitalize';

import styles from './page.module.css'

export async function generateStaticParams() {
    let groups = await getGroups();

    return Object.values(groups)
        .filter((group) => !group.noIndex)
        .map((group) => ({ group: group.slug }));
}

export async function generateMetadata({params}) {
    const { group: slug } = await params;
    let group = await getGroupBySlug(slug);

    return {
        title: group.title,
        description: group.description
    }
}

export default async function Group({params}) {
    const { group: slug } = await params;
    const group = await getGroupBySlug(slug);
    const sections = await getSections();

    return <>
        <h1>{group.title}</h1>
        {group.noSection ?
            <ul className={styles.list}>
                {group.pages.map((page) =>
                    <li key={page.slug}>
                        <Link href={`/group/${group.slug}/${page.slug}`}>{page.title}</Link>
                    </li>
                )}
            </ul>
        :
            sections.map((section, index) => section.groups[group.slug] && !section.disabled &&
                <Fragment key={section.slug}>
                    <h2>{capitalize(appConfig.sectionName)} {index + 1} - {section.title}</h2>
                    <ul className={styles.list}>
                        {section.groups[group.slug].map((page) => (
                            <li key={page.slug}>
                                <Link href={`/${section.slug}/${page.slug}`}>{page.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )
        }
    </>
}
