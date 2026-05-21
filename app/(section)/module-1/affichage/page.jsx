import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Affichage d'éléments",
    description: "Présentation de l'affichage de formes ou d'images dans le plan d'un jeu vidéo.",
    keywords: ["sprite", "image", "texture", "polygone", "coordonnée"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Node</h2>
            <p>
                Dans Godot, chaque élément d'un jeu vidéo est représenté par un noeud (<em>node</em>). Lorsque nous voulons afficher quelque
                chose à l'écran, nous devons donc créer un node. Ce n'est pas tous les nodes qui sont en mesure d'afficher quelque chose.
                Effectivement, certains nodes sont là pour représenter des éléments logiques du jeu. Toutefois il existe plusieurs nodes qui
                sont capables d'afficher des éléments à l'écran. Dans ce module, nous en verrons 2: Le <IC>Polygon2D</IC> et 
                le <IC>Sprite2D</IC>.
            </p>
            <p>
                Pour ajouter un node au jeu, il suffit d'aller dans le panneau de scène en haut à gauche de l'interface de Godot, de faire 
                un clic droit sur le node racine ou un autre node et de sélectionner l'option "<em>Add child node...</em>". Ensuite, il 
                suffit de sélectionner le node que l'on veut ajouter et de cliquer sur le bouton "<em>Create</em>".
            </p>
            <ColoredBox title="Attention: ">
                Pour vous assurer de garder votre projet bien organisé, assurez-vous de toujours renommer les nodes que vous ajoutez pour 
                savoir ce qu'ils représentent. Pour y arriver, vous n'avez qu'à faire un clic droit sur le node que vous voulez et choisir 
                l'option "<em>Rename</em>".
            </ColoredBox>
        </section>
        <section>
            <h2>Polygones</h2>
            <p>
                Si nous voulons afficher une forme simple à l'écran, comme un triangle ou un carré, nous pouvons utiliser le 
                node <IC>Polygon2D</IC>. Ce node nous permet de définir une forme en lui donnant une liste de points qui représentent les
                sommets du polygone. Par exemple, voici la marche à suivre pour créer un triangle rouge à l'écran: 
            </p>
            <ol>
                <li>
                    Ajouter un node <IC>Polygon2D</IC> à la scène et renommer le à "TriangleRouge".
                </li>
                <li>
                    Assurez-vous d'être dans la vue 2D de l'éditeur de scène. Vous pouvez y accéder en cliquant sur le bouton "2D" en haut 
                    au millieu de l'interface de Godot.
                </li>
                <li>
                    Sélectionnez le node "TriangleRouge" dans le panneau de scène et allez dans le panneau d'inspecteur à droite de 
                    l'interface de Godot où vous trouverez les propriétés du node que nous allons changer.
                </li>
                <li>
                    Trouvez la propriété "<em>Color</em>" et changez sa valeur pour du rouge.
                </li>
                <li>
                    Dans la section "<em>Data</em>" du panneau de propriétés, trouvez la propriété "<em>Polygon</em>" et cliquez sur le 
                    bouton "<em>Add element</em>" trois fois pour ajouter trois points à la liste. 
                </li>
                <li>
                    Modifier les coordonnées de chaque point pour former un triangle. Les coordonnées sont données en pixels et le point 
                    (0, 0) correspond au coin supérieur gauche de l'élément. Par exemple, dans ce cas-ci, nous pouvons utiliser les 
                    coordonnées suivantes pour les trois points: (0, 0), (100, 0) et (50, 100).
                </li>
            </ol>
        </section>

        <section>
            <h2>Sprites</h2>
            <p>
                Si nous voulons plutôt afficher une image à l'écran, nous pouvons utiliser le node <IC>Sprite2D</IC>. Ce node nous permet de
                définir une image à afficher en lui fournissant ce qu'on appelle dans le jargon du jeu vidéo une texture. Une texture est une
                image qui peut être affichée à l'écran par la carte graphique. Créer un sprite est très simple et similaire à la création
                d'un polygone. Voici les étapes à suivre pour créer un sprite qui représente un personnage dans notre jeu:
            </p>
            <ol>
                <li>
                    Ajouter un node <IC>Sprite2D</IC> à la scène et renommer le "Personnage".
                </li>
                <li>
                    Dans le panneau de système de fichiers en bas à gauche de l'interface de Godot, faites un clic droit sur le 
                    dossier <IC>ress://</IC> et sélectionnez l'option "<em>New Folder</em>" pour créer un nouveau dossier. Nommez ce 
                    dossier <IC>assets</IC>.
                </li>
                <li>
                    Ouvrir l'explorateur de fichier de votre ordinateur et trouver l'image que vous voulez ajouter à votre projet. Ensuite, 
                    glisser et déposer cette image dans le dossier <IC>assets</IC> que vous venez de créer dans Godot.
                </li>
                <li>
                    Assurez-vous d'être dans la vue 2D de l'éditeur de scène. Vous pouvez y accéder en cliquant sur le bouton "2D" en haut 
                    au millieu de l'interface de Godot.
                </li>
                <li>
                    Sélectionnez le node "Personnage" dans le panneau de scène et allez dans le panneau d'inspecteur à droite de 
                    l'interface de Godot où vous trouverez les propriétés du node que nous allons changer.
                </li>
                <li>
                    Identifier l'emplacement de la propriété "Texture" dans le panneau de propriétés. Vous pouvez ensuite glisser et déposer
                    l'image que vous avez ajoutée à votre projet dans le répertoire <IC>assets</IC> sur la case à côté de la propriété
                    "Texture" pour l'assigner à cette propriété.
                </li>
            </ol>
        </section>

        <section>
            <h2>Ordre d'affichage</h2>
            <p>
                L'ordre d'affichage des éléments dans le jeu n'est pas défini par défaut, ce qui peut entraîner certaines textures ou 
                polygones à s'afficher par-dessus d'autres dans le mauvais ordre. Bref, vous pourriez avoir certaines images qui s'affiche
                par-dessus ou en-dessous d'un autre élément incorrectement. Pour corriger tout ça, nous pouvons toutefois utiliser le
                "<em>Z Index</em>". Voici comment faire:
            </p>
            <ol>
                <li>
                    Sélectionner l'élément dont vous voulez changer l'ordre d'affichage.
                </li>
                <li>
                    Dans le panneau d'inspection de propriétés à la droite de l'interface de Godot, aller dans la section "<em>CanvasItem</em>"
                    et ensuite dans la sous-section "<em>Ordering</em>".
                </li>
                <li>
                    Modifier la valeur du "<em>Z Index</em>" ou activer le "<em>Y Sort Enabled</em>".
                </li>
            </ol>
            <p>
                Une valeur plus grande de "<em>Z Index</em>" va mettre un élément par-dessus les autres. Une valeur plus petite, en dessous.
                Vous pouvez donc organiser les éléments cette valeur.
            </p>
            <p>
                L'option "<em>Y Sort Enabled</em>" permet d'indiquer au jeu que l'on veut qu'il choisisse lui-même le "<em>Z Index</em>" en
                fonction de la position de l'élément dans le jeu. C'est une technique fréquemment utilisé dans les jeux 2D puisque dans ces 
                jeux, les images qui sont plus basse dans l'écran sont souvent affiché sur le dessus, comme si elles étaient plus proche du
                joueur.
            </p>
        </section>
    </>;
}
