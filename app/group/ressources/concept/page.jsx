import ColoredBox from "@/components/ColoredBox";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Différents articles sur la conception de jeux vidéo",
    description: "Sites web contenant différents articles sur le design de jeux vidéo et sa conception.",
    keywords: ["concept", "article", "design"],
    group: "ressources"
}

export default function Page() {
    return <>
        <section>
            <h2>Ressources</h2>
            <p>
                Voici une liste de sites web contenant différents articles sur le design de jeux vidéo et sa conception. Ces articles peuvent
                vous aider à mieux comprendre les concepts de design de jeux vidéo et à développper certains aspects plus complexe de vos 
                jeux vidéo. 
            </p>
            <ColoredBox title="À noter: ">
                Si vous connaissez d'autres ressources intéressantes, n'hésitez pas à les partager avec votre enseignant pour qu'il puisse
                les ajouter à cette liste.
            </ColoredBox>
            <ul>
                <li>
                    <a href="https://www.gamedevs.org/" target="_blank">gamedevs.org</a>
                </li>
                <li>
                    <a href="https://develop.games/" target="_blank">develop.games</a>
                </li>
            </ul>
        </section>
    </>;
}
