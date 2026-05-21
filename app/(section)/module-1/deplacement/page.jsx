import CodeBlock from "@/components/CodeBlock";
import ColoredBox from "@/components/ColoredBox";
import IC from "@/components/InlineCode";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Déplacements",
    description: "Démonstration du déplacement d'un élément dans le jeu en fonction du temps et des entrées d'un joueur.",
    keywords: ["vecteur", "direction", "vitesse", "acceleration", "delta", "rendu", "interpolation linéaire"],
    group: "notes"
}

const script = 
`extends Polygon2D

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass
`;

const input =
`func _process(delta: float) -> void:
	if Input.is_action_pressed("gauche"):
		pass
	if Input.is_action_pressed("droite"):
		pass
	if Input.is_action_pressed("haut"):
		pass
	if Input.is_action_pressed("bas"):
		pass
		
	var direction = Input.get_vector("gauche", "droite", "haut", "bas")`;

const move = 
`func _process(delta: float) -> void:
	if Input.is_action_pressed("gauche"):
		position.x -= 5
	if Input.is_action_pressed("droite"):
		position.x += 5
	if Input.is_action_pressed("haut"):
		position.y -= 5
	if Input.is_action_pressed("bas"):
		position.y += 5`;

const vector = 
`func _process(delta: float) -> void:
    var direction = Input.get_vector("gauche", "droite", "haut", "bas")
	position += direction * 5`;

const vector2 = 
`var direction := Vector2.ZERO
@export var vitesse := 5

func _process(delta: float) -> void:
    direction = Input.get_vector("gauche", "droite", "haut", "bas")
    position += direction * vitesse`;

const delta = 
`var direction := Vector2.ZERO
@export var vitesse := 500

func _process(delta: float) -> void:
    direction = Input.get_vector("gauche", "droite", "haut", "bas")
    position += direction * vitesse * delta`;

const lerp = 
`var direction := Vector2.ZERO
var vitesse := Vector2.ZERO
@export var max_vitesse := 500.0
@export var acceleration := 0.1

func _process(delta: float) -> void:
    direction = Input.get_vector("gauche", "droite", "haut", "bas")
	vitesse = lerp(vitesse, direction * max_vitesse, acceleration)
	position += vitesse * delta`;

const lerpDelta = 
`var direction := Vector2.ZERO
var vitesse := Vector2.ZERO
@export var max_vitesse := 500.0
@export var acceleration := 4.0

func _process(delta: float) -> void:
    direction = Input.get_vector("gauche", "droite", "haut", "bas")
	vitesse = lerp(vitesse, direction * max_vitesse, 1 - exp(-acceleration * delta))
	position += vitesse * delta`;

export default function Page() {
    return <>
        <section>
            <h2>Position d'un élément</h2>
            <p>
                Dans Godot, les éléments affichables sont généralements des nodes qui héritent de la classe <IC>Node2D</IC>. Cette classe
                contient une propriété "<em>position</em>" dans une section "<em>Transform</em>" qui représente la position du node dans le
                plan graphique du jeu. Cette position est représentée par un vecteur qui contient une coordonnée x et une coordonnée y. 
            </p>
            <p>
                Dans notre jeu, nous pouvons changer la position d'un node à partir de l'interface de Godot en sélectionnant le node dans le
                panneau de scène et en changeant les valeurs de sa position dans le panneau d'inspecteur. Toutefois, cela ne permet pas au 
                joueur de notre jeu de déplacer l'élément lui-même. Heureusement, il est aussi possible de changer la position d'un node à 
                partir d'un script.
            </p>
        </section>

        <section>
            <h2>Ajouter un script à un node</h2>
            <p>
                Si nous voulons ajouter du code à un node, nous devons lui ajouter un script. Pour ce faire, il suffit de faire un clic droit
                sur le node en question dans le panneau de scène et de sélectionner l'option "<em>Attach Script...</em>". Les options de base
                de création de script devraient être suffisantes pour la plupart des cas. Il faut juste s'assurer que le nom du script est
                correct puisque cette attachement de script va créer un nouveau fichier.
            </p>
            <p>
                Une fois le script créé, Godot devrait changer automatiquement l'interface en mode script. Le script créé par défaut devrait 
                ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{script}</CodeBlock>
            <p>
                Voici quelques éléments à noter à propos de ce script:
            </p>
            <ul>
                <li>
                    La première ligne du script contient le mot-clé <IC>extends</IC> suivi du nom d'une classe. La classe devrait être la 
                    même que le type du node auquel le script est attaché. 
                </li>
                <li>
                    La fonction <IC>_ready()</IC> est une fonction de base qui est appelée automatiquement par Godot lorsque le node entre
                    dans la scène. C'est un bon endroit pour exécuter du code d'initialisation lorsque nécessaire.
                </li>
                <li>
                    La fonction <IC>_process(delta)</IC> est une fonction de base qui est appelée automatiquement par Godot à chaque frame 
                    du jeu. C'est dans cette fonction que nous allons mettre le code pour changer l'état de notre élément dans le jeu. Nous 
                    allons d'ailleurs utiliser cette fonction pour déplacer le node. Cette fonction est appelée à très haute fréquence, 
                    généralement plus de 60 fois par seconde. Il faut prendre ça en compte lorsqu'on écrit du code dans cette fonction pour
                    éviter de faire des opérations trop lourdes qui pourraient ralentir le jeu.
                </li>
            </ul>
        </section>

        <section>
            <h2>Entrées du joueur</h2>
            <p>
                Nous allons vouloir déplacer notre élément en fonction des entrées du joueur de notre jeu. Les entrées du joueur peuvent 
                être très variées, comme des clics de souris, les touches d'un clavier, le glissement d'un doigt sur un écran tactile, 
                le mouvement d'un joystick, etc. Godot nous permet de facilement gérer les entrées du joueur grâce à son système d'actions.
            </p>
            <p>
                Dans Godot, une action est une entrée du joueur qui a été définie dans les paramètres du projet. Par exemple, nous pouvons
                définir une action <IC>gauche</IC> qui correspond à la touche de la flèche gauche du clavier et potentiellement à d'autres
                entrées, comme le mouvement d'un joystick vers la gauche. De cette façon, nous pouvons gérer les entrées du joueur de 
                manière abstraite sans avoir à se soucier de la source de l'entrée. 
            </p>
            <p>
                Pour définir une action, suivez les étapes suivantes : 
            </p>
            <ol>
                <li>
                    Allez dans le menu "<em>Project</em>" et dans l'option "<em>Project Settings...</em>".
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, allez dans l'onglet "<em>Input Map</em>".
                </li>
                <li>
                    Dans le champ "<em>Add New Action</em>", tapez le nom de l'action que vous voulez créer et appuyez sur le bouton "<em>Add</em>". 
                    Vous pouvez, par exemple, créer les actions <IC>gauche</IC>, <IC>droite</IC>, <IC>haut</IC> et <IC>bas</IC> pour les mouvements 
                    de base d'un personnage dans un jeu.
                </li>
                <li>
                    Pour chaque action que vous avez créée, vous pouvez ajouter des entrées en cliquant sur le bouton "+" à la droite de l'action. 
                    Vous pouvez ensuite appuyer sur la touche ou faire l'entrée que vous voulez associer à cette action et appuyer sur le bouton 
                    "OK" pour l'ajouter.  
                </li>
                <li>
                    Si vous le désirez, vous pouvez ajouter plusieurs entrées à la même action en répétant l'étape précédente. 
                </li>
            </ol>
            <p>
                Une fois que vous avez défini vos actions, vous pourrez les utiliser dans l'onglet de script pour détecter les entrées du
                joueur. Pour ce faire, nous allons généralement utiliser les 
                fonctions <IC>Input.is_action_pressed()</IC> et <IC>Input.get_vector()</IC>. On peut les utiliser de la façon suivante:
            </p>
            <CodeBlock language="gdscript">{input}</CodeBlock>
            <p>
                Voici quelques éléments à noter à propos de ce code:
            </p>
            <ul>
                <li>
                    La fonction <IC>Input.is_action_pressed()</IC> prend en paramètre le nom d'une action et retourne <IC>true</IC> si
                    l'action est actuellement activée par le joueur. Par exemple, si l'action <IC>gauche</IC> est activée lorsque le joueur
                    appuie sur la touche de la flèche gauche du clavier, alors la fonction retournera <IC>true</IC> tant que le joueur
                    maintient cette touche enfoncée.
                </li>
                <li>
                    La fonction <IC>Input.get_vector()</IC> prend en paramètre les noms de quatre actions qui représentent les directions
                    gauche, droite, haut et bas. Elle retourne un vecteur qui représente la direction combinée de ces actions. Le vecteur 
                    retourné aura une coordonnée x et y. La coordonnée x sera négative si l'action de gauche est activée, positive si 
                    l'action de droite est activée et zéro si aucune des deux actions n'est activée. C'est le même principe pour la
                    coordonnée y avec les actions de haut et de bas. 
                </li>
            </ul>
        </section>

        <section>
            <h2>Déplacement d'un élément</h2>
            <p>
                Maintenant que nous savons comment détecter les entrées du joueur, nous pouvons les utiliser pour déplacer notre élément
                dans le jeu. Nous allons faire ça dans la fonction <IC>_process(delta)</IC> de notre script en changeant la position du 
                node. Voici un exemple de code qui permet de déplacer un node en fonction des entrées du joueur:
            </p>
            <CodeBlock language="gdscript">{move}</CodeBlock>
            <p>
                Dans l'exemple ci-dessus, nous vérifions si les actions de gauche, droite, haut et bas sont activées et si elles le sont, 
                nous déplaçons le node de 5 pixels dans la direction correspondante. Rappellez-vous que la 
                fonction <IC>_process(delta)</IC> est appelée à très haute fréquence, donc ce code sera exécuté très souvent, ce qui permet 
                un déplacement relativement fluide du node. 
            </p>
            <p>
                Notez bien ici que nous utilisons une variable <IC>position</IC> que nous n'avons pas définie dans notre script. Le code 
                fonctionne pourtant correctement. C'est parce que notre node auquel nous avons attaché le script possède déjà une 
                propriété <IC>position</IC> que nous pouvons utiliser directement dans notre script grâce à l'héritage de la classe. Vous 
                verrez ce genre de variable fréquemment dans les scripts de Godot. 
            </p>
            <ColoredBox title="Attention: ">
                Le code de déplacement ci-dessus est très simple et fonctionne, mais il comporte de nombreux problèmes. Assurez-vous de bien
                lire les sections suivantes pour apprendre à améliorer ce code. Un des problèmes majeurs de ce code est que le déplacement 
                en diagonale est plus rapide que le déplacement horizontal ou vertical.
            </ColoredBox>
        </section>

        <section>
            <h2>Utilisation de vecteurs</h2>
            <p>
                L'utilisation de vecteurs en développement de jeux est très courante. Les vecteurs permettent entre autres de faire des 
                calculs mathématiques de manière plus simple et parfois plus efficace. Cela nous permettra de raccourcir notre code de
                déplacement et de le rendre plus facile à lire. Pour y arriver nous utiliserons la fonction <IC>Input.get_vector()</IC> que 
                nous précédemment vue pour obtenir un vecteur de direction à partir des entrées du joueur. Voici un exemple de code qui 
                déplace un node avec cette fonction:
            </p>
            <CodeBlock language="gdscript">{vector}</CodeBlock>
            <p>
                Ici, nous multiplions le vecteur de direction par 5, qui est la vitesse de déplacement du node. Nous multiplions donc le 
                vecteur par un scalaire, ce qui change la magnitude (la longueur) du vecteur sans changer sa direction. De cette façon, 
                nous pouvons facilement modifier la position du node en fonction de la direction combinée des entrées du joueur de façon 
                très courte. Cette façon de faire a un autre avantage. En effet, le déplacement en diagonale est maintenant de la même 
                vitesse que le déplacement horizontal ou vertical, ce qui n'était pas le cas dans l'exemple précédent.
            </p>
            <p>
                Ce code de déplacement peut toutefois être un peu optimisé. En effet, nous créons une nouvelle variable <IC>direction</IC> à 
                chaque frame. Il serait donc plus efficace de créer cette variable une seule fois et de la réutiliser à chaque frame. On 
                peut aussi suivre de meilleures pratiques et définir une constante pour la vitesse de déplacement au lieu d'utiliser un 
                nombre <em>hard codé</em> dans le code. 
            </p>
            <CodeBlock language="gdscript">{vector2}</CodeBlock>
            <ColoredBox title="À noter">
                Vous remarquerez que nous avons utilisé le mot-clé <IC>@export</IC> pour la variable de vitesse. Cela permet de rendre 
                cette variable modifiable à partir de l'interface de Godot. En effet, si vous mettez une variable en export, vous pourrez 
                changer sa valeur dans le panneau d'inspecteur lorsque vous sélectionnez le node auquel le script est attaché. C'est très
                pratique pour tester différentes valeurs de variables sans avoir à changer le code à chaque fois.
            </ColoredBox>
        </section>

        <section>
            <h2>Utilisation du delta</h2>
            <p>
                Le gros problème avec le code de déplacement que nous avons vu jusqu'à présent est que la vitesse de déplacement du node
                dépend de la fréquence d'appel de la fonction <IC>_process(delta)</IC>. Plus la fonction est appelée fréquemment, plus le
                node se déplacera rapidement. C'est problématique parque la fréquence d'appel de la fonction <IC>_process(delta)</IC> est 
                variable. En effet, un ordinateur plus puissant pourra appeler cette fonction plus fréquemment alors qu'un ordinateur plus 
                lent l'appellera moins fréquemment, ce qui fera une expérience de jeu différente pour les 2 joueurs. Pour pallier à ce 
                problème, nous allons utiliser le paramètre <IC>delta</IC>.
            </p>
            <p>
                Le paramètre <IC>delta</IC> de la fonction <IC>_process(delta)</IC> représente le temps écoulé depuis le dernier appel de la
                fonction en secondes. En utilisant ce paramètre, nous pouvons faire quelques calculs mathématiques pour faire en sorte que 
                le déplacement dépende du temps écoulé plutôt que de la fréquence d'appel de la fonction, créant ainsi un mouvement de même
                vitesse peu importe la fréquence d'appel de la fonction. 
            </p>
            <CodeBlock language="gdscript">{delta}</CodeBlock>
            <p>
                Comme vous pouvez le voir, nous avons besoin de très peu de changements pour que notre code dépende du temps écoulé. Il 
                suffit de multiplier le déplacement par le paramètre <IC>delta</IC>. Toutefois, puisque le delta est généralement un nombre
                très petit (par exemple, si la fonction est appelée 60 fois par seconde, le delta sera d'environ 0.016), nous devrons 
                ajuster la valeur de la vitesse pour que le déplacement soit suffisamment rapide. C'est pourquoi nous avons ici changer la 
                valeur de la vitesse à 500 au lieu de 5. 
            </p>
        </section>

        <section>
            <h2>Changement de vitesse</h2>
            <p>
                Si nous voulons que la vitesse de déplacement de notre node change graduellement au lieu de changer instantanément lorsque 
                nous appuyons sur une touche, nous pouvons utiliser une technique appelée interpolation linéaire. L'interpolation linéaire 
                nous permet de faire une transition graduelle entre deux valeurs, ce qui nous permettra de faire une transition graduelle
                pour la vitesse, simulant ainsi une accélération et une décélération. 
            </p>
            <CodeBlock language="gdscript">{lerp}</CodeBlock>
            <p>
                Si vous testez le code ci-dessus, vous devriez avoir un mouvement semblable à celui d'un objet qui serait sur une surface 
                glacée. Il prendra un certain temps pour atteindre la vitesse maximale lorsque vous appuyez sur une touche et il prendra 
                aussi un certain temps pour s'arrêter lorsque vous relâchez la touche. C'est parce que nous faisons une transition graduelle
                pour la vitesse avec la fonction <IC>lerp()</IC>. 
            </p>
            <p>
                La fonction <IC>lerp()</IC> prend en paramètre une valeur de départ, une valeur d'arrivée et un facteur d'interpolation qui
                doit être compris entre 0 et 1. Ici, la vitesse de départ est la vitesse actuelle du node, la vitesse d'arrivée est la 
                vitesse maximale dans la direction du mouvement, et le facteur d'interpolation est l'accélération que nous pouvons ajuster
                pour faire une transition plus ou moins rapide entre les deux vitesses.
            </p>
            <p>
                Cette technique d'interpolation linéaire a toutefois un problème majeur. Elle n'est pas dépendante du temps écoulé, ce qui 
                fait que la transition entre les vitesses sera plus rapide ou plus lente dépendant de la fréquence d'appel de la fonction. 
                Le code pour arriver à solutionner ce problème est mathématiquement complexe et son explication est hors de la portée de ce
                cours. Le voici tout de même pour pouvoir l'utiliser dans vos projets:
            </p>
            <CodeBlock language="gdscript">{lerpDelta}</CodeBlock>
            <p>
                Le code n'est pas très différent, mais il intègre un calcul du facteur d'interpolation dépendant du temps écoulé pour faire
                une transition graduelle parfaite entre les vitesses. Puisque nous utilisons le delta qui est une très petite valeur, comme 
                précedemment, nous devrons ajuster la valeur de l'accélération et l'augmenter pour que la transition soit suffisamment 
                rapide.
            </p>
        </section>
    </>;
}
