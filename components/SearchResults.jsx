'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import styles from './SearchResults.module.css';

export default function SearchResults({ index }) {
    const searchParams = useSearchParams();
    const searchValue = searchParams.get('value');
    const [results, setResults] = useState(null);

    const getPagePath = (page) => {
        if (page.section) {
            return `/${page.section}/${page.slug}`;
        }
        else {
            return `/group/${page.group}/${page.slug}`;
        }
    }

    useEffect(() => {
        // TODO: Put more asyn function in there to prevent blocking the main thread
        if(searchValue) {
            let text = searchValue.toLowerCase();
            let results = {};
            for (const key of Object.keys(index)) {
                if (key.includes(text)) {
                    for (const page of index[key]) {
                        if (!results[page.slug]) {
                            results[page.slug] = page;
                        }
                    }
                }
            }

            setResults(Object.values(results))
        }
        else {
            setResults(Object.values([]))
        }
    }, [searchValue]);

    return results && results.length > 0 ?
        <ul className={styles.results}>
            {results.map((page) => (
                <li key={page.slug}>
                    <Link href={getPagePath(page)}>{page.title}</Link>
                    <p className={styles.description}>{page.description}</p>
                </li>
            ))}
        </ul>
        :
        <div className={styles.empty}>Aucune page trouvée</div>

}