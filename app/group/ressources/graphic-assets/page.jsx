import ColoredBox from "@/components/ColoredBox";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Assets et ressources visuelles",
    description: "Sites web contenant des assets et ressources visuelles pour le développement de jeux vidéo.",
    keywords: ["assets", "sprite", "sheet", "ressources", "graphique"],
    group: "ressources"
}

export default function Page() {
    return <>
        <section>
            <h2>Ressources</h2>
            <p>
                Voici une liste de sites web contenant un lot de ressources visuelles gratuite ou payante pour le développement de jeux vidéo. 
                Ces ressources peuvent vous aider à développer vos jeux vidéo plus rapidement même si vous n'avez pas les compétences pour 
                créer vos propres assets.
            </p>
            <p>
                Assurez-vous de bien lire les conditions d'utilisation de chaque site web ou de chaque ressource avant de les utiliser dans 
                vos projets. Certaines ressources peuvent être utilisées gratuitement, mais d'autres peuvent nécessiter un achat ou le 
                respect de certaines conditions d'utilisation, tel que l'attribution de l'auteur dans les crédits de votre jeu vidéo.
            </p>
            <ColoredBox title="À noter: ">
                Si vous connaissez d'autres ressources intéressantes, n'hésitez pas à les partager avec votre enseignant pour qu'il puisse
                les ajouter à cette liste.
            </ColoredBox>
            <ul>
                <li>
                    <a href="https://itch.io/game-assets/free" target="_blank">itch.io</a>
                </li>
                <li>
                    <a href="https://craftpix.net/freebies/" target="_blank">craftpix.net</a>
                </li>
                <li>
                    <a href="https://kenney.nl/assets/category:2D" target="_blank">kenney.nl</a>
                </li>
                <li>
                    <a href="https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=9&sort_by=count&sort_order=DESC" target="_blank">opengameart.org</a>
                </li>
                <li>
                    <a href="https://www.gameart2d.com/freebies.html" target="_blank">gameart2d.com</a>
                </li>
            </ul>
        </section>
    </>;
}
