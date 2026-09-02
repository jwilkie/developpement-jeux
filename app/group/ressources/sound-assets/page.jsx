import ColoredBox from "@/components/ColoredBox";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Assets et ressources sonores",
    description: "Sites web contenant des assets et ressources sonores pour le développement de jeux vidéo.",
    keywords: ["assets", "son", "musique", "effet", "ressources"],
    group: "ressources"
}

export default function Page() {
    return <>
        <section>
            <h2>Ressources</h2>
            <p>
                Voici une liste de sites web contenant un lot de ressources sonores gratuites ou payantes pour le développement de jeux vidéo. 
                Ces ressources peuvent vous aider à développer vos jeux vidéo plus rapidement même si vous n'avez pas les compétences d'un 
                technicien de son pour créer vos propres effets sonores ou musiques.
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
                    <a href="https://freesound.org/" target="_blank">freesound.org</a>
                </li>
                <li>
                    <a href="https://kenney.nl/assets/category:Audio" target="_blank">kenney.nl</a>
                </li>
                <li>
                    <a href="https://freemusicarchive.org/home" target="_blank">freemusicarchive.org</a>
                </li>
                <li>
                    <a href="https://www.newgrounds.com/audio/" target="_blank">newgrounds.com</a>
                </li>
                <li>
                    <a href="https://incompetech.com/music/royalty-free/music.html" target="_blank">incompetech.com</a>
                </li>
            </ul>
        </section>
    </>;
}
