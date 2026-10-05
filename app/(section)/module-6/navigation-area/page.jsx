import Image from 'next/image'
import IC from '@/components/InlineCode'

import navRegion2D from '@/public/img/nav-region-2d.png'
import navPolygonTool from '@/public/img/nav-polygon-tool.png'
import navBake from '@/public/img/nav-bake.png'
import navPolygon from '@/public/img/nav-polygon.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Espace de navigation",
    description: "Démonstration de l'utilisation du node NavigationRegion2D pour déterminer les zones possible de navigation dans un jeu vidéo.",
    keywords: ["navigation", "region", "2D", "zones", "area"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>NavigationRegion2D</h2>
            <p>
                Avant de pouvoir diriger un élément de jeu vers une destination, il est nécessaire de déterminer les zones de navigation 
                possibles. Cela peut être en partie construit avec les zones de collision de votre jeu, mais c'est généralement un peu plus
                complexe. Nous devrons donc construire un espace de navigation qui détermine où sont les endroits où un élément de jeu peut
                se rendre.
            </p>
            <p>
                Dans le moteur Godot, nous pouvons utiliser le node <IC>NavigationRegion2D</IC> pour construire ces espaces de navigation à 
                partir de zones de collision ou de cartes de tuiles avec collisions. Nous voudrons généralement créer un 
                node <IC>NavigationRegion2D</IC> comme parent des nodes de collision de votre jeu, tel que les 
                nodes <IC>TileMapLayer</IC> ainsi que les <IC>StaticBody2D</IC>. La structure pourrait ressembler à ceci:
            </p>
            <Image src={navRegion2D} alt="Node de collisions sous le NavigationRegion2D" />
            <p>
                Une fois votre structure de nodes en place, il nous faudra configurer le node <IC>NavigationRegion2D</IC>.
            </p>
        </section>

        <section>
            <h2>Configuration</h2>
            <p>
                Pour configurer le node <IC>NavigationRegion2D</IC>, nous devons suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Dans l'inspecteur de propriétés du node <IC>NavigationRegion2D</IC>, créer une instance de <IC>NavigationPolygon</IC> dans 
                    la propriété "Navigation Polygon".
                </li>
                <li>
                    Dans l'éditeur de scène, cliquer pour créer les points du polygone de navigation pour cette zone. On va génréralement
                    vouloir créer un polygone qui entoure les zones de collision de notre jeu. Si votre niveau est très grand, vous voudrez
                    peut-être créer plusieurs nodes <IC>NavigationRegion2D</IC> pour couvrir l'ensemble de votre niveau. Vous pouvez utiliser
                    les outils de manipulation de polygone en haut de l'éditeur si nécessaire.
                    <Image src={navPolygonTool} alt="Outil de manipulation de polygone de navigation" />
                </li>
                <li>
                    Dans l'inspecteur de propriétés, modifier la propriété "Source Geometry Mode" et choisissez l'option "Group With Children".
                    Cela nous permettra de construire la zone de navigation avec les éléments de collision enfant de notre 
                    node <IC>NavigationRegion2D</IC>.
                </li>
                <li>
                    Dans l'inspecteur de propriétés, modifier la propriété "Source Geometry Group Name" et choisissez le nom du groupe de 
                    pour les éléments de collision qui sont enfant à votre node <IC>NavigationRegion2D</IC>. Vous pouvez mettre un nom plus 
                    simple comme "navigation". 
                </li>
                <li>
                    Dans l'inspecteur de propriétés, modifier la propriété "Radius" pour que la zone de navigation soit un peu plus petite 
                    que les zones de collision. On veut généralement mettre un rayon qui va être environ la moitié de la largeur des éléments
                    qui se déplaceront dans la zone de navigation. Cela permettra d'éviter que les éléments de jeu se rentrent en contact avec
                    les coins des zones de collision.
                </li>
                <li>
                    Cliquer sur un élément de collision enfant du node <IC>NavigationRegion2D</IC>, aller dans l'onglet "Groups" qui se trouve
                    juste à côté de l'inspecteur de propriétés et du panneau de signaux. Dans cet onglet, cliquer sur le bouton "+" pour 
                    créer un nouveau groupe.
                </li>
                <li>
                    Dans la fenêtre qui apparaît, nommer le groupe avec le nom que vous avez mis dans la propriété "Source Geometry Group Name".
                    Cela permettra de lier l'élément de collision au groupe de navigation.
                </li>
                <li>
                    Pour chaque autre élément de collision enfant du node <IC>NavigationRegion2D</IC>, sélectionner l'élément et cliquer sur 
                    le groupe que vous venez de créer dans l'onglet "Groups" pour l'ajouter au groupe de navigation.
                </li>
                <li>
                    Une fois que tous les éléments de collision sont dans le groupe de navigation, cliquer sur le 
                    node <IC>NavigationRegion2D</IC> et cliquer sur le bouton "Bake NavigationPolygon" juste au dessus de l'éditeur de scène
                    pour générer la zone de navigation. 
                    <Image src={navBake} alt="Bouton pour générer la zone de navigation" />
                </li>
            </ol>
            <p>
                Une fois toutes ces étapes terminées, vous devriez voir les polygones de la zone de navigation apparaître dans l'éditeur de
                scène. Cela pourrait ressembler à ceci:
            </p>
            <Image src={navPolygon} alt="Exemple de zone de navigation affichée dans l'éditeur de scène" />
            <p>
                Une fois que la zone de navigation est générée, il ne nous restera plus qu'à utiliser des agents de navigation pour déplacer
                nos éléments de jeu dans la zone de navigation. Nous verrons comment faire cela dans la prochaine page.
            </p>
        </section>
    </>;
}
