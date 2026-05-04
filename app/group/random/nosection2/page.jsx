/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: 'No Section 2',
    description: 'Une page qui ne se retrouve pas dans une section',
    keywords: ["non section", "apprentissage"],
}

export default function NoSection() {
    return <>
        <h1>Page sans section 2</h1>
        <p>Une page sans section 2</p>
    </>
}