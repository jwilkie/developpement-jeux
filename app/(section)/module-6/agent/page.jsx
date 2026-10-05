import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Agent de navigation",
    description: "Démonstration de l'utilisation d'un agent de navigation avec le node NavigationAgent2D pour déplacer un élément de jeu vers une destination.",
    keywords: ["agent", "navigation", "pathfinding", "déplacement", "direction_to"],
    group: "notes"
}

const setTarget = 
`# On va chercher l'agent de navigation et le personnage
# dans la scène. 
@onready var navigation_agent: NavigationAgent2D = $NavigationAgent2D
@onready var personnage: CharacterBody2D = $/root/Main/Personnage

# Lorsque le node est prêt, on va définir la position de 
# destination de l'agent de navigation à la position du 
# personnage
func _ready() -> void:
	navigation_agent.target_position = personnage.global_position`;

const move = 
`func _physics_process(delta: float) -> void:
    # On vérifie si l'agent de navigation a terminé son 
    # chemin pour éviter les calculs inutiles
	if !navigation_agent.is_navigation_finished():
        # On va chercher la prochaine position du chemin 
        # calculé par l'agent de navigation
        var next_position: Vector2 = navigation_agent.get_next_path_position()

        # On calcule la direction entre notre position 
        # actuelle et la prochaine position du chemin. 
        var direction = position.direction_to(next_position)

        # On déplace notre élément de jeu dans la 
        # direction calculée 
        velocity = direction * SPEED
        move_and_slide()`;

export default function Page() {
    return <>
        <section>
            <h2>NavigationAgent2D</h2>
            <p>
                Nous avons fait la première étape pour qu'un élément de jeu puisse trouver son chemin vers une destination. Nous avons 
                construit un espace de navigation avec le node <IC>NavigationRegion2D</IC>. Il nous reste maintenant à utiliser un agent
                de navigation pour finir le travail. Dans le moteur Godot, nous pouvons utiliser le node <IC>NavigationAgent2D</IC> pour 
                trouver un chemin entre la position actuelle d'un élément de jeu et une destination. Pour y arriver, nous devrons suivre les
                étapes suivantes:
            </p>
            <ol>
                <li>
                    Ajouter un node <IC>NavigationAgent2D</IC> comme enfant de l'élément de jeu que nous voulons déplacer.
                </li>
                <li>
                    Dans l'inspecteur de propriétés du node <IC>NavigationAgent2D</IC>, modifier la propriété "Path Desired Distance" pour 
                    définir la distance en pixel à laquelle l'agent de navigation considère qu'il est est arrivé à la prochaine étape de 
                    son chemin. Une valeur plus courte donnera un chemin plus précis, alors qu'une valeur plus longue donnera un chemin plus
                    fluide.
                </li>
                <li>
                    Dans l'inspecteur de propriétés du node <IC>NavigationAgent2D</IC>, modifier la propriété "Target Desired Distance" pour
                    définir la distance en pixel à laquelle l'agent de navigation considère qu'il est arrivé à sa destination. Ça permet à 
                    notre élément de jeu de s'arrêter un peu avant d'atteindre la destination ou d'éviter qu'il ne dépasse la destination.
                </li>
            </ol>
            <p>
                Une fois le node <IC>NavigationAgent2D</IC> configuré, nous pourrons l'utiliser pour déplacer notre élément à l'aide d'un 
                peu de code GDScript.
            </p>
        </section>

        <section>
            <h2>Définir la destination</h2>
            <p>
                Pour déplacer notre élément avec le node <IC>NavigationAgent2D</IC>, nous devrons utiliser un peu de code. La première chose 
                à faire est de définir la destination de l'agent de navigation. Nous pouvons le faire en modifiant la 
                propriété <IC>target_position</IC> de l'agent de navigation et en lui donnant un <IC>Vector2</IC> qui représente la position
                de la destination. 
            </p>
            <p>
                Le code pourrait ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{setTarget}</CodeBlock>
            <p>
                Dans l'exemple ci-dessus, on défini la destination de l'agent à partir de la fonction <IC>_ready()</IC>. On peut toutefois 
                le faire à partir de n'importe quelle fonction, par exemple dans le <IC>_process()</IC>, <IC>_physics_process</IC> ou 
                encore dans le <em>timeout</em> d'un <IC>Timer</IC>.
            </p>
            <p>
                De plus, il est possible de changer la destination de l'agent à tout moment. Lorsque la destination est changée, l'agent de
                navigation va automatiquement recalculer le chemin pour se rendre à la nouvelle destination.
            </p>
        </section>

        <section>
            <h2>Déplacer l'élément</h2>
            <p>
                Une fois la destination définie, il ne nous reste plus qu'à déplacer notre élément de jeu sur le chemin calculé par l'agent
                vers la destination. Ici, nous voudrons généralement ajouter du code à la fonction <IC>_physics_process()</IC> de notre 
                élément de jeu pour qu'il se déplace à chaque frame. Le code pourrait ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{move}</CodeBlock>
            <p>
                Le code ci-dessus est assez classique pour déplacer un élément de jeu vers une destination. Ici, on utilise toutefois un 
                node <IC>CharacterBody2D</IC>, ce qui nous permet d'utiliser la méthode <IC>move_and_slide()</IC>. Si vous utilisez un 
                autre node, vous devrez peut-être changer la position de l'élément vous-même, mais le principe reste le même. 
            </p>
            <p>
                Si vous voulez voir le chemin calculé par l'agent de navigation, vous pouvez activer la propriété "Debug" dans l'inspecteur
                de propriétés du node <IC>NavigationAgent2D</IC>. Cela affichera le chemin calculé par l'agent dans l'éditeur de scène ainsi 
                que les points de chemin que l'agent va suivre. C'est très pratique pour déboguer votre code et voir si l'agent de
                navigation calcule le chemin correctement.
            </p>
        </section>
        
        <section>
            <h2>Ressources</h2>

            <p>
                Il existe plusieurs autres configurations possibles pour le node <IC>NavigationAgent2D</IC>, mais nous nous en tiendrons à
                celles-ci pour le moment. Si vous voulez en savoir plus sur les autres configurations, vous pouvez consulter la documentation
                officielle du moteur Godot.
            </p>
            <ul>
                <li>
                    <a href="https://docs.godotengine.org/en/latest/classes/class_navigationagent2d.html" target="_blank">
                        Godot - Documentation de NavigationAgent2D
                    </a>
                </li>
                <li>
                    <a href="https://docs.godotengine.org/en/latest/tutorials/navigation/index.html" target="_blank">
                        Godot - Tutoriels sur la Navigation
                    </a>
                </li>
            </ul>
        </section>
    </>;
}
