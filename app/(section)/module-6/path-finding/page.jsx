import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Déplacement et recherche de chemin",
    description: "Présentation des fonctions spécialisées pour déplacer des éléments de jeu et des algorithmes de recherche de chemin.",
    keywords: ["pathfinding", "algorithme", "A*", "Dijkstra", "direction_to"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Déplacement dans une direction</h2>
            <p>
                Déplacer un élément de jeu n'est généralement pas très difficile. Dépendant du node que vous 
                utilisez dans le moteur Godot, la méthode de déplacement peut toutefois varier.
            </p>
            <ul>
                <li>
                    <IC>CharacterBody2D</IC>: Nous pouvons modifier la propriété <IC>velocity</IC> pour changer 
                    la vitesse et la direction du déplacement. Il nous suffit ensuite d'appeler la 
                    méthode <IC>move_and_slide()</IC> pour que le moteur applique le déplacement.
                </li>
                <li>
                    <IC>Node2D</IC> et classes dérivées: Nous pouvons modifier la 
                    propriété <IC>position</IC>. Il suffit généralement de calculer nous-même la vitesse dans 
                    une direction et de l'ajouter à la position actuelle. 
                </li>
            </ul>
            <p>
                Nous avons déjà fait tout ça dans les modules précédents. Il y a toutefois quelques méthodes
                utilitaires qui pourrait vous servir, mais que nous n'avons pas encore abordé. En voici 
                quelques-unes:
            </p>
            <ul>
                <li>
                    <IC>Vector2.move_toward()</IC>: Cette méthode nous permet de retourner une position qui se 
                    rapproche d'une destination à une vitesse donnée. C'est très pratique pour déplacer un
                    élément vers une destination sans avoir à calculer la direction et la vitesse nous-même, mais
                    ça ne fonctionne pas très bien avec l'engin physique de Godot.
                </li>
                <li>
                    <IC>Vector2.direction_to()</IC>: Cette méthode nous permet de calculer la direction entre
                    deux points. Elle nous retourne un vecteur normalisé (longueur de 1) qui pointe vers le 
                    deuxième point à partir du premier. C'est très pratique pour déplacer un élément vers une
                    destination, spécialement avec la méthode <IC>move_and_slide()</IC> du node <IC>CharacterBody2D</IC>.
                </li>
                <li>
                    <IC>Vector2.angle_to_point()</IC>: Cette méthode nous permet de calculer l'angle entre une 
                    direction et un point. Elle nous retourne un angle en radians. C'est très pratique pour
                    faire tourner un élément vers une destination.
                </li>
            </ul>
        </section>

        <section>
            <h2>Recherche de chemin</h2>
            <p>
                Les fonctions de déplacement précédemment vu sont très pratiques pour déplacer un élément vers une destination, 
                mais elles ne tiennent pas compte des obstacles. Si un ennemi essai de se diriger vers le joueur, mais qu'il y a
                un mur entre les deux, l'ennemi va simplement essayer de traverser le mur, ce qu'il ne pourra pas faire. Il 
                restera donc bloqué contre le mur. Pour des petits ennemis, ça peut être acceptable, mais pour des ennemis plus 
                intelligents, il serait préférable qu'ils puissent contourner les obstacles pour atteindre leur cible. C'est là 
                que la recherche de chemin entre en jeu.
            </p>
            <p>
                La recherche de chemin est un algorithme qui permet de trouver le meilleur chemin entre deux points, en tenant 
                compte des obstacles. Il existe plusieurs algorithmes de recherche de chemin tels que les suivants:
            </p>
            <ul>
                <li>
                    <strong>A*</strong>: C'est l'algorithme de recherche de chemin le plus populaire. Il est très efficace et 
                    trouve généralement un des meilleurs chemins. Il utilise une heuristique qui est une estimation de la distance 
                    entre un point et la destination. Il ne trouve pas toujours le chemin qui est mathématiquement le plus court, 
                    mais il est généralement très proche et on l'accepte puisque l'algortihme est très rapide.
                </li>
                <li>
                    <strong>Dijkstra</strong>: C'est un algorithme de recherche de chemin qui est plus lent que A*, mais qui
                    trouve toujours le chemin le plus court. Il explore tous les chemins possibles jusqu'à trouver le meilleur. 
                    Il est donc plus lent que A*. Dans les jeux vidéo, on préfère généralement A* puisque la vitesse est plus
                    importante que la perfection.
                </li>
                <li>
                    <strong>Greedy Best-First Search</strong>: C'est un algorithme de recherche de chemin qui est plus rapide que A*,
                    mais qui ne trouve pas toujours le meilleur chemin. Il utilise une heuristique pour explorer les chemins les 
                    plus prometteurs en premier. Il est donc plus rapide que A*, mais il peut se retrouver bloqué dans des impasses.
                </li>
            </ul>

            <p>
                Dans les jeux vidéo, on utilise généralement A* puisque c'est un bon compromis entre vitesse et qualité du chemin trouvé.
                Godot nous offre d'ailleurs des nodes spécialisés pour la recherche de chemin qui utilisent A* pour nous. Nous les verrons
                dans les prochaines pages.
            </p>
        </section>
    </>;
}
