import Image from 'next/image';
import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';

import pointRectangle from '@/public/img/point-rectangle.svg'
import rectangle from '@/public/img/rectangle.svg'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Collisions par rectangle",
    description: "Démonstration de la technique de détection de collisions par rectangle.",
    keywords: ["rect2", "viewport", "clamp"],
    group: "notes"
}

const algoPoint =
`func point_dans_rectangle(point, rectangle):
    return point.x >= rectangle.debut.x && 
           point.x <= rectangle.fin.x &&
           point.y >= rectangle.debut.y && 
           point.y <= rectangle.fin.y`;

const algoRectangles =
`func intersection_rectangles(rectangle1, rectangle2):
    return rectangle1.debut.x <= rectangle2.fin.x &&
           rectangle2.debut.x <= rectangle1.fin.x &&
           rectangle1.debut.y <= rectangle2.fin.y &&
           rectangle2.debut.y <= rectangle1.fin.y`;

const hasPoint =
`var rectangle := Rect2(2, 1, 6, 4)
var point := Vector2(3, 2)

if rectangle.has_point(point):
    print("Le point se trouve à l'intérieur du rectangle")`;

const intersects =
`var rectangle1 := Rect2(2, 1, 4, 3)
var rectangle2 := Rect2(4, 3, 4, 2)

if rectangle1.intersects(rectangle2):
    print("Les rectangles sont en intersection")`;

const viewport =
`var limite: Rect2

func _ready() -> void:
    # La fonction get_viewport_rect() retourne un 
    # rectangle qui correspond à la taille de la 
    # fenêtre de jeu.
    limite = get_viewport_rect()`;

const clamp =
`func _process(delta: float) -> void:
    # ...
    
    if !limite.has_point(position):
        position = position.clamp(limite.position, limite.end)`;

export default function Page() {
    return <>
        <section>
            <h2>Côté mathématique</h2>
            <p>
                Les rectangles sont des formes géométriques simples qui sont mathématiquement intéressante pour la détection de collisions 
                puisqu'il nécessite seulement des calculs simples. Par exemple, il est facile de vérifier si un point se trouve à 
                l'intérieur d'un rectangle en comparant les coordonnées du point avec les coordonnées du rectangle. Il suffit de vérifier 
                que les coordonnées du point sont comprises entre les coordonnées du rectangle. 
            </p>
            <Image src={pointRectangle} alt="Exemple de point à l'intérieur d'un rectangle" />
            <p>
                L'algorithme ressemblerait à ceci:
            </p>
            <CodeBlock language="gdscript">{algoPoint}</CodeBlock>
            <p>
                Si nous voulons plutôt vérifier si deux rectangles sont en intersection, nous pouvons utiliser une technique similaire en 
                comparant les côtés des deux rectangles. Cette techniques est légèrement plus complexe, mais quand même très simple. Nous 
                avons qu'à vérifier que les côtés de l'un des rectangles ne sont pas complètement à l'extérieur de l'autre rectangle.
            </p>
            <Image src={rectangle} alt="Exemple de point à l'intérieur d'un rectangle" />
            <p>
                Dans ce cas-ci, l'algorithme ressemble à cela:
            </p>
            <CodeBlock language="gdscript">{algoRectangles}</CodeBlock>
        </section>

        <section>
            <h2>Utilisation dans Godot</h2>
            <p>
                Godot offre une classe intégrée pour les rectangles qui se nomme <IC>Rect2</IC>. Cette classe défini un rectangle à partir
                d'un point de départ, soit le point en haut à gauche du rectangle, et d'une taille. Ces 2 propriétés sont des vecteurs 2D 
                qui contiennent les coordonnées x et y.
            </p>
            <p>
                La classe <IC>Rect2</IC> offre plusieurs méthodes pour vérifier les collisions, notamment <IC>has_point()</IC> pour vérifier
                si un point se trouve à l'intérieur du rectangle.
            </p>
            <CodeBlock language="gdscript">{hasPoint}</CodeBlock>
            <p>
                De même façon, il existe déjà aussi une méthode pour vérifier si deux rectangles sont en intersection, 
                soit <IC>intersects()</IC>.
            </p>
            <CodeBlock language="gdscript">{intersects}</CodeBlock>
            <ColoredBox title="Attention: ">
                Ce genre de détection de collision par rectangle est très efficace, mais n'est pas très précis. Elle est très pratique pour 
                limiter une zone de déplacement ou pour faire des vérifications de collisions simples, mais elle n'est pas très adaptée pour
                déterminer des collisions d'éléments ayant des formes plus complexes ou qui bougent très rapidement.
            </ColoredBox>
        </section>

        <section>
            <h2>Exemple</h2>
            <p>
                Un cas typique de la détection de collision par rectangle est de limiter la zone de déplacement d'un personnage dans un jeu.
                Par exemple, si nous avons un personnage qui se déplace, nous pouvons utiliser un rectangle pour définir la zone dans 
                laquelle le personnage peut se déplacer. Dans notre jeu, nous pourrions définir cet espace par la taille de la fenêtre de
                jeu, que l'on appelle le <em>viewport</em>.
            </p>
            <CodeBlock language="gdscript">{viewport}</CodeBlock>
            <p>
                Par la suite, lorsque le personnage se déplace, nous pouvons vérifier que sa position ne dépasse pas les limites du 
                rectangle défini. Si le personnage dépasse les limites, nous pouvons simplement le repositionner à l'intérieur du rectangle.
            </p>
            <CodeBlock language="gdscript">{clamp}</CodeBlock>
            <p>
                Nous utilisons ici la fonction <IC>clamp()</IC> qui permet de limiter un élément entre une valeur minimum et maximum. Dans
                ce cas-ci, nous limitons la position du personnage entre les coordonnées du point en haut à gauche du rectangle 
                (<IC>limite.position</IC>) et les coordonnées du point en bas à droite du rectangle (<IC>limite.end</IC>).
            </p>
            <ColoredBox title="À noter:">
                Il n'est techniquement pas nécessaire d'utiliser la condition <IC>if !limite.has_point(position)</IC> avant d'utiliser la
                fonction <IC>clamp()</IC>. Dans ce cas-ci la détection de collision et le repositionnement du personnage sont des 
                traitements de complexité similaire. Il n'y a donc pas de gain de performance à faire la vérification. On pourrait 
                simplement appeler la fonction <IC>clamp()</IC> à chaque frame.
            </ColoredBox>
        </section>
    </>;
}
