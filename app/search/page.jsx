import { Suspense } from "react";
import { getIndexOfPages } from "@/model/pageIndex";
import SearchResults from "@/components/SearchResults";

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Résultats de recherche',
    description: `Liste des pages correspondant au texte recherché.`
}

export default async function Search() {
    const index = await getIndexOfPages();

    return <>
        <h1>Résultats de recherche</h1>
        <Suspense>
            <SearchResults index={index} />
        </Suspense>
    </>
}