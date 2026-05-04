/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: 'No Section',
    description: 'Une page qui ne se retrouve pas dans une section',
    keywords: ["non section", "apprentissage"],
}

export default function NoSection() {
    return <>
        <h1>Page sans section</h1>
        <p>Une page sans section</p>
    </>
}