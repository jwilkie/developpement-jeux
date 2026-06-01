import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Couches de collision",
    description: "Présentation des couches et masques de collision pour filtrer et contrôler quels éléments peuvent détecter des intersections.",
    keywords: ["layer", "mask"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Contrôle des collisions</h2>
            <p>
                Les couches de collision, ou <em>collision layers</em> en anglais, sont un système de Godot pour organiser et trier les 
                différents éléments qui peuvent entrer en collision et contrôller avec quels autres objets ils peuvent détecter des 
                collisions. C'est un système puissant qui ne nécessite pas de code et qui permet un contrôle intéressant directement dans
                l'interface graphique de Godot.
            </p>
            <p>
                Pour avoir accès aux <em>collision layers</em>, nous devons préalablement avoir des objets qui les utilisent. Dans un jeu 
                2D, les nodes <IC>Area2D</IC> y ont accès, mais aussi d'autres, 
                comme <IC>CharacterBody2D</IC>, <IC>RigidBody2D</IC> ou <IC>StaticBody2D</IC> que nous verrons plus tard. Voici comment les
                trouver:
            </p>
            <ol>
                <li>
                    Dans le panneau de scènes, cliquer sur un node de collision, comme le <IC>Area2D</IC>. Attention, les nodes de forme
                    de collision ne sont pas valide ici.
                </li>
                <li>
                    Dans le panneau d'inpecteur de propriétés, aller dans la section "<em>CollisionObject2D</em>" et dans la sous-section 
                    "<em>Collision</em>".
                </li>
                <li>
                    Vous y verrez ici 2 listes de contrôle pour les collisions: les "<em>Layer</em>" et les "<em>Mask</em>".
                </li>
            </ol>
        </section>

        <section>
            <h2>Layers</h2>
            <p>
                La section "<em>Layer</em>" de l'inspecteur de propriétés, soit les couches de collision, permettent d'organiser les 
                différents éléments qui peuvent détecter les collisions de notre jeu. En général, on utilisera un layer pour 
                chaque type d'éléments.
            </p>
            <p>
                Par exemple, pour un jeu de type <em>Space Shooter</em>, on pourrait mettre le vaisseau du joueur sur le layer 1
                et mettre les ennemis sur le layer 2. Si on a d'autres éléments qui peuvent entrer en collision, comme des rayons lasers,
                par exemple, on pourrait les mettre sur un autre layer aussi. Pour y arriver, vous pouvez simplement cliquer sur les 
                boutons des petits nombres dans la sous-section "<em>Layer</em>" de l'inspecteur de propriété.
            </p>
            <p>
                Le but ici, c'est d'organiser les différents éléments pour pouvoir contrôler quels layers peuvent entrer en collision 
                avec quels autres layer à l'aide des masques.
            </p>
        </section>

        <section>
            <h2>Mask</h2>
            <p>
                Les masques sont une façon de contrôler avec quels layers nous voulons que les collisions intéragissent. Lorsque nous 
                activons un masque sur un node, nous indiquons que nous voulons que notre node puisse détecter les collisions avec les
                éléments de ce layers. Si les layers permettent d'organiser les différents nodes selon leurs collisions, les masques sont
                un filtrage pour indiquer avec quels layers nous voulons détecter les collision.
            </p>
            <p>
                Dans notre exemple précédant du jeu de type <em>Space Shooter</em>, si le vaisseau du joueur est sur le layer 1 et les 
                ennemis sont sur le layer 2, nous allons probablement activer les masques de la façon suivante:
            </p>
            <ul>
                <li>
                    Sur le vaisseau, nous activons le masque 2 seulement, pour qu'il détecte les collisions avec les ennemis.
                </li>
                <li>
                    Sur les ennemis, nous activons le masque 1 seulement, pour qu'ils détectent les collisions avec le vaisseau du joueur.
                </li>
            </ul>
            <p>
                Au final, le concept n'est pas si difficile à comprendre. On organise avec les layers et ensuite on indique avec 
                lesquels on détecte les collisions avec les masques. Ce petit système nous permet de bien contrôler les collisions 
                presque uniquement avec l'interface graphique de Godot de façon très simple.
            </p>
        </section>
    </>;
}
