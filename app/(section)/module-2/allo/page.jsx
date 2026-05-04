/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Allo",
    description: "Une page Allo de test.",
    keywords: ["gabarit", "allo", "lorem ipsum"],
    group: "notes",
}

export default function Allo() {
    return <>
        <h1>Allo</h1>
        <p>Ceci est un allo test</p>
    </>
}