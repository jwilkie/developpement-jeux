import Image from 'next/image'
import IC from '@/components/InlineCode'

import tilemapArea from '@/public/img/tilemap-area.png'
import tilemapTools from '@/public/img/tilemap-tool.png'
import layers from '@/public/img/tilemap-layer-super-mario-world.jpg'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Carte de tuiles",
    description: "Démonstration de la création de carte de tuiles à partir de palettes de tuiles dans Godot.",
    keywords: ["tile", "tileset", "tilemap", "carte", "layer", "couche", "TileMapLayer"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>TileMapLayer</h2>
            <p>
                Une fois les palettes de tuiles créées et configurées, nous pouvons passer à l'étape suivante, soit la création 
                d'une carte de tuiles. Pour y arriver, nous utiliserons le node <IC>TileMapLayer</IC>. Ce node défini une 
                grille que nous pourrons remplir avec les tuiles de nos palettes de tuiles.
            </p>
            <p>
                Pour créer et configurer une carte de tuiles, vous pouvez suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Dans l'éditeur de scène, ajouter un nouveau node de type <IC>TileMapLayer</IC> à l'endroit voulu dans la 
                    hiérarchie des nodes.
                </li>
                <li>
                    Dans l'inspecteur de propriétés, sélectionner l'option <em>Load</em> ou <em>Quick Load</em> pour la 
                    propriété <IC>TileSet</IC>.
                </li>
                <li>
                    Dans la fenêtre de sélection de ressource, sélectionner le TileSet que vous voulez utiliser pour votre carte
                    de tuiles.
                </li>
                <li>
                    Dans le panneau de TileMap dans le bas de l'éditeur, sélectionner la ou les tuiles que vous voulez utiliser
                    et les placer dans la carte de tuiles à l'endroit voulu en cliquant dans l'interface principal de l'éditeur 
                    2D.
                </li>
                <li>
                    Recommencer l'étape 4 pour chaque tuile que vous voulez placer dans votre carte de tuiles.
                </li>
            </ol>
            <Image src={tilemapArea} alt="Éditeur 2D où on modifie la carte de tuiles" />
        </section>

        <section>
            <h2>Outils pour les TileMaps</h2>
            <p>
                Pour mettre les tuiles dans la carte, Godot nous offre plusieurs outils pour nous aider et nous accélérer dans 
                le processus. Ces outils sont disponibles dans la barre d'outils du panneau de TileMap. 
            </p>
            <p>
                Voici les outils disponibles:
            </p>
            <Image src={tilemapTools} alt="Barre d'outils pour les TileMaps" />
            <ol>
                <li>
                    <strong>Outils de formes</strong>: Permet de mettre une ou plusieurs tuiles selon certaines formes. Le 
                    crayon permet de mettre une tuile à la fois et la ligne permet de mettre des tuiles en ligne droite en 
                    cliquant et glissant. Finalement, le rectangle permet de mettre des tuiles dans un rectangle en cliquant et 
                    glissant aussi.
                </li>
                <li>
                    <strong>Pot de peinture</strong>: Permet de remplir une zone par des tuiles. La zone doit être préalablement
                    délimitée et fermée par des tuiles, peu importe lesquelles. C'est très pratique pour remplir rapidement une
                    grande zone avec une tuile.
                </li>
                <li>
                    <strong>Pipette</strong>: Permet de sélectionner une tuile dans la carte de tuiles pour l'utiliser ensuite. 
                    On l'utilise pour copier rapidement une tuile déjà placée dans la carte de tuiles.
                </li>
                <li>
                    <strong>Effaceur</strong>: Permet d'effacer une ou plusieurs tuiles dans la carte de tuiles. L'effaceur 
                    utilisera la même forme que l'outil de forme sélectionné pour effacer les tuiles. 
                </li>
                <li>
                    <strong>Transformateurs</strong>: Permet de faire des transformations sur les tuiles de la palette de tuiles 
                    avant de les placer dans la carte de tuiles. On peut faire des rotations et des inversions horizontales ou
                    verticales. 
                </li>
                <li>
                    <strong>Aléatoire</strong>: Permet de placer aléatoirement une tuile parmi une sélection de tuiles. On peut
                    sélectionner plusieurs tuiles et si l'option aléatoire est activée, chaque tuile placée dans la carte de 
                    tuiles sera choisie aléatoirement parmi les tuiles sélectionnées. C'est pratique lorsqu'on veut créer un 
                    environnement plus varié et moins répétitif.
                </li>
                <li>
                    <strong>Grille</strong>: Permet d'afficher ou de cacher la grille de la carte de tuiles. Il est souvent 
                    utile d'afficher la grille lorsqu'on commence à placer des tuiles, mais une fois qu'on en a placé plusieurs, 
                    il est souvent plus  agréable de cacher la grille pour mieux voir le résultat final.
                </li>
            </ol>
        </section>

        <section>
            <h2>Multiples couches</h2>
            <p>
                Il est possible d'avoir plusieurs couches de tuiles dans une même scène. On utilisera ce concept pour créer des
                environnements plus complexes. Regardons pas exemple cette image du jeu Super Mario World sur Super Nintendo.
            </p>
            <Image src={layers} alt="Exemple de plusieurs couches de tuiles dans le jeu Super Mario World" />
            <p>
                On peut potentiellement retrouver 3 ou 4 couches de tuiles dans cette image. Les voici:
            </p>
            <ol>
                <li>
                    <strong>L'arrière-plan</strong>: Cette couche est la plus éloignée de la caméra. Dans certains jeux, cette
                    couche est une image, mais on peut aussi les créer avec des tuiles. 
                </li>
                <li>
                    <strong>Couche décorative</strong>: Cette couche n'est pas dans l'arrière-plan, mais elle est derrière le 
                    personnage. Cette couche contient les éléments décoratifs qui ne sont pas interactifs avec le personnage.
                    Dans cette image, on y retrouve le buisson et une partie du poteau de la fin du niveau. 
                </li>
                <li>
                    <strong>Couche d'intéraction</strong>: Cette couche est au même niveau que le personnage. Cette couche contient les 
                    éléments avec lesquels le personnage peut interagir, comme le sol, les plateformes et les obstacles.
                    Dans certains jeux, cette couche peut être divisée en plusieurs couches si certaines tuiles contiennent des 
                    éléments transparents. Dans les jeux de Super Mario, on y retrouve généralement le sol et les plateformes, 
                    mais aussi les blocs et les briques avec lesquels le personnage peut interagir. 
                </li>
                <li>
                    <strong>Couche décorative d'avant-plan</strong>: Cette couche est devant le personnage. Cette couche contient
                    les éléments décoratifs qui ne sont pas interactifs. Dans le cas de cette image, c'est le poteau de la fin 
                    du niveau qui se retrouve dans cette couche.
                </li>
            </ol>
            <p>
                Dépendant de la complexité de vos jeux et de leur environnement, vous pourriez avoir besoin de plus ou moins de
                couches de tuiles. Il n'y a pas une seul formule gagnante ici. Vous devez determiner vous-même combien de couches
                sont nécessaire pour bien représenter votre environnement de jeu.
            </p>
            <p>
                Dans Godot, pour créer plusieurs couches de tuiles, il suffit simplement de créer plusieurs 
                nodes <IC>TileMapLayer</IC> dans la hiérarchie des nodes. Chaque node <IC>TileMapLayer</IC> sera une couche de 
                tuiles que vous pourrez remplir avec les tuiles et organiser dans l'ordre que vous voulez.
            </p>
        </section>
    </>;
}
