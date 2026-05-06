/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Engin de jeu",
    description: "Présentation des engins de jeu souvent utilisés pour faciliter la création de jeux vidéos.",
    keywords: ["unity", "unreal", "godot", "monogame", "gamemaker"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Définition</h2>
            <p>
                Un engin de jeu aussi appelé moteur de jeu ou <em>game engine</em> en anglais, est un ensemble d'outils et de bibliothèques
                de code qui facilitent la création de jeux vidéo. Il fournit une base solide pour les développeurs de jeux en leur offrant 
                des fonctionnalités pré-construites pour gérer les aspects courants du développement de jeux, tels que la boucle de jeu, le 
                rendu graphique, la gestion des entrées, la physique, l'audio et bien plus encore. Vous pouvez penser à un engin de jeu comme 
                à une boîte à outils pour les développeurs de jeux. 
            </p>
            <p>
                Vous avez potentiellement déjà entendu parler de certains engins de jeu populaires. Dans cette page, nous listerons 
                quelques-uns des engins de jeu les plus utilisés dans l'industrie du développement de jeux vidéo, mais il en existe beaucoup
                d'autres.
            </p>
        </section>

        <section>
            <h2>Unreal Engine</h2>
            <p>
                Unreal Engine est un moteur de jeu développé par Epic Games, les créateurs de Fortnite. Il est largement utilisé dans 
                l'industrie du développement de jeux vidéo pour créer des jeux de haute qualité avec des graphismes avancés, mais aussi plus 
                récemment pour créer des expériences de réalité virtuelle et/ou augmentée. Unreal Engine est connu pour sa puissance et sa
                flexibilité, mais il est volumineux, complexe et peut être difficile à apprendre pour les débutants. Les jeux vidéo programmés 
                avec Unreal Engine sont généralement écrits en C++.
            </p>
            <p>
                Unreal Engine est gratuit à utiliser, mais Epic Games prend généralement une part des revenus générés par les jeux créés 
                avec leur moteur, ce qui peut être un inconvénient pour les développeurs indépendants ou les petites équipes.
            </p>
            <p>
                <a target="_blank" href="https://www.unrealengine.com/">Unreal Engine</a>
            </p>
        </section>

        <section>
            <h2>Unity</h2>
            <p>
                Unity est un moteur de jeu développé par Unity Technologies. Il a connu une popularité croissante au fil des années depuis 
                sa création et est aujourd'hui l'un des moteurs de jeu les plus utilisés dans l'industrie du développement de jeux vidéo. 
                Unity est connu pour sa facilité d'utilisation, sa flexibilité et sa large communauté de développeurs. Les jeux vidéo 
                programmés avec Unity sont généralement écrits en C#.
            </p>
            <p>
                Unity est gratuit pour les développeurs indépendants et les petites équipes. Toutefois, si un développeur ou une équipe 
                génère plus d'un certain montant de revenus avec leurs jeux créés avec Unity, ils doivent acheter une licence payante pour
                continuer à utiliser le moteur. Unity a été hautement critiqué dans les dernières années pour avoir essayé de changer son
                modèle de tarification. Bien que ces changements aient été annulés, plusieurs développeurs ont perdu confiance en Unity 
                après cet évènement.
            </p>
            <p>
                <a target="_blank" href="https://unity.com/">Unity</a>
            </p>
        </section>

        <section>
            <h2>Godot</h2>
            <p>
                Godot est un moteur de jeu open-source développé par la communauté. Il est connu pour sa légèreté, sa flexibilité et sa
                facilité d'utilisation. Godot est particulièrement populaire parmi les développeurs indépendants et les petites équipes en
                raison de sa nature open-source, de sa communauté active et de son absence de frais. Godot a connu une croissance rapide
                dans les dernières années, surtout après les controverses entourant Unity. Les jeux vidéo programmés avec Godot sont 
                généralement écrits en GDScript, un langage de programmation spécifique à Godot qui est similaire au Javascript et au Python.
            </p>
            <p>
                Godot est entièrement gratuit à utiliser. Son absence de frais et sa nature open-source en font un très bon choix pour les
                développeurs. Son code source est disponible sur GitHub, ce qui permet aux développeurs de contribuer au projet.
            </p>
            <ul>
                <li>
                    <a target="_blank" href="https://godotengine.org/">Godot</a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/godotengine">GitHub - Godot</a>
                </li>
            </ul>
        </section>

        <section>
            <h2>MonoGame</h2>
            <p>
                MonoGame est un moteur de jeu open-source développé par la communauté. Il est basé sur une vielle plateforme de développement
                de Microsoft appelée XNA. MonoGame est connu pour sa simplicité et sa flexibilité. Il est particulièrement reconnu pour sa
                capacité à créer des jeux 2D. Il a été utilisé pour créer de nombreux jeux indépendants populaires, tels que Stardew Valley, 
                Celeste et, techniquement, Terraria. On le vois de moins en moins utilisé dans les dernières années, suite à la croissance de 
                Godot, mais son développement est toujours actif. Les jeux vidéo programmés avec MonoGame sont généralement écrits en C#.
            </p>
            <p>
                MonoGame est entièrement gratuit à utiliser. Même s'il est basé sur XNA, qui était un produit de Microsoft, MonoGame est un 
                projet open-source indépendant de Microsoft. Il est possible de voir et contribuer au code source de MonoGame sur GitHub.
            </p>
            <ul>
                <li>
                    <a target="_blank" href="https://www.monogame.net/">MonoGame</a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/monogame/monogame">GitHub - MonoGame</a>
                </li>
            </ul>
        </section>

        <section>
            <h2>GameMaker</h2>
            <p>
                GameMaker est un moteur de jeu développé par YoYo Games. Il est connu pour sa facilité d'utilisation, même pour les débutants
                en programmation. GameMaker est particulièrement populaire pour la création de jeux 2D. Ce moteur de jeu est assez simple et
                permet donc de créer des jeux rapidement, mais il est aussi limité en termes de fonctionnalités et de flexibilité. Les jeux
                vidéo programmés avec GameMaker sont généralement écrits en GML, un langage de programmation spécifique à GameMaker.
            </p>
            <p>
                GameMaker propose une version gratuite pour ceux qui désire l'essayer. Toutefois, pour toutes utilisations commerciales, il 
                est nécessaire d'acheter une licence payante ou de payer un abonnement pour avoir accès à des fonctionnalités supplémentaires.
            </p>
            <p>
                <a target="_blank" href="https://gamemaker.io/">GameMaker</a>
            </p>
        </section>

        <section>
            <h2>Dans ce cours</h2>
            <p>
                Dans ce cours, nous utiliserons Godot comme moteur de jeu pour créer nos jeux vidéo. Godot a été choisi pour plusieurs 
                raisons:
            </p>
            <ul>
                <li>
                    L'absence de frais d'utilisation
                </li>
                <li>
                    La nature open-source de l'engin de jeu
                </li>
                <li>
                    La simplicité d'installation et d'utilisation du moteur de jeu
                </li>
                <li>
                    La simplicité du langage de programmation GDScript 
                </li>
                <li>
                    Sa capacité à créer des jeux 2D ou 3D, simple ou complexe
                </li>
                <li>
                    La communauté active autour de Godot qui offre beaucoup de ressources d'apprentissage
                </li>
                <li>
                    La popularité actuelle de Godot 
                </li>
            </ul>
        </section>
    </>;
}
