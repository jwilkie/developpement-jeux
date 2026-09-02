import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Instanciation dynamique",
    description: "Démonstration d'instanciation de nodes pour créer et ajouter des éléments dynamiques dans un jeu vidéo avec l'engin Godot.",
    keywords: ["get_tree", "root", "add_child", "instantiate", "queue_free", "supprimer"],
    group: "notes"
}

const preload = 
`var laser_scene: PackedScene = preload("res://laser.tscn")`;

const instrantiate = 
`if Input.is_action_pressed("laser"):
    var laser := laser_scene.instantiate()`;

const addChild = 
`if Input.is_action_pressed("laser"):
    # Instancier le laser
    var laser := laser_scene.instantiate()
    
    # Ajouter le laser dans le node principal du projet
    get_tree().root.add_child(laser)`;

const position = 
`if Input.is_action_pressed("laser"):
    # Instancier le laser
    var laser := laser_scene.instantiate()

    # Positionner le laser au même endroit que le vaisseau
    laser.position = position

    # Ajouter le laser dans le node principal du projet
    get_tree().root.add_child(laser)`;

const free = 
`# Détection de collision entre le laser et un ennemi
func _on_area_entered(area: Area2D) -> void:
    # On supprime le laser
	queue_free()`

export default function Page() {
    return <>
        <section>
            <h2>Charger une scène</h2>
            <p>
                Votre jeu va très probablement contenir certains éléments générés qui ne sont pas présent au chargement du jeu, mais qui 
                le seront après un certain délai ou après certaines actions du joueur. Ces éléments ne pourront pas être ajouté 
                directement dans l'interface de Godot puisque s'ils sont ajoutés de la sorte, ils resteront statique. Nous devons donc les
                ajouter directement dans le code.
            </p>
            <p>
                Pour créer un node, nous devons au préalable pré-charger la scène qui permettra de créer ce node. Nous utiliserons ici 
                l'instruction <IC>preload()</IC> pour y arriver. Vous pouvez charger ces scènes directement dans les variables du node qui
                fera l'instanciation dynamique.
            </p>
            <CodeBlock language="gdscript">{preload}</CodeBlock>
            <p>
                Ici, nous chargeons une scène <IC>laser.tscn</IC> qui représente un rayon laser qu'un vaisseau spatial peut tirer vers 
                ses ennemis. Voici quelques élément important à noter:
            </p>
            <ul>
                <li>
                    Dans l'instruction <IC>preload()</IC>, nous spécifions un chemin qui commence par <IC>res://</IC>. Ce préfix indique
                    que nous allons chercher dans les ressources du jeu. Vous devriez toujours aller chercher les ressources du jeu, 
                    comme les textures et les scènes de cette façon. Si vous n'êtes pas certain du chemin vers une ressource, vous 
                    pouvez vous fier au panneau "<em>FileSystem</em>" en bas à gauche de l'interface de Godot.
                </li>
                <li>
                    La variable <IC>laser_scene</IC> est spécifier de type <IC>PackedScene</IC>. Nous l'indiquons ici pour s'assurer que
                    l'autocomplétion de code fonctionne bien. Autrement, l'instruction <IC>preload()</IC> ne sait pas vraiment quel type
                    de ressource elle vient de charger.
                </li>
            </ul>
        </section>

        <section>
            <h2>Instancier un node</h2>
            <p>
                Pour créer un nouveau node, nous devons créer une instance d'une scène pré-chargé. Pour y arriver, nous utiliseront la
                méthode <IC>instantiate()</IC> de la classe <IC>PackedScene</IC>. Elle nous permettra, similaire à un constructeur, de 
                créer une instance d'une scène sous la forme d'un node.
            </p>
            <p>
                Dans notre situation, nous voulons créer un laser à chaque fois que notre joueur appuie sur une touche du clavier. Nous 
                avons donc créé une nouvelle action dans les configuration du projet et avons ajouter le code suivant à notre vaisseau
                spatial:
            </p>
            <CodeBlock language="gdscript">{instrantiate}</CodeBlock>
            <p>
                La fonction <IC>instantiate()</IC> va créer un nouveau node et le retourner pour qu'on puisse le stocker dans une 
                variable. Ici, c'est la variable <IC>laser</IC> qui contiendra notre node. Ce node n'existe toutefois qu'en mémoire
                pour l'instant. Il n'est pas ajouté au jeu automatiquement. Nous devrons donc l'ajouter manuellement à l'endroit où 
                nous le voulons.
            </p>
            <ColoredBox title="À noter:">
                <p>
                    L'instanciation d'un node est très similaire à la création d'élément HTML en Javascript. Dans votre cours de web, vous 
                    avez probablement appris que l'instruction <IC>document.createElement()</IC> permet de créer des éléments HTML en les 
                    programmant en Javascript. Ils faut par la suite ajouter ces éléments dans la page web avec la fonction <IC>append()</IC>.
                </p>
                <p>
                    Dans Godot, le principe est le même. La fonction <IC>instanciate()</IC> nous permet de créer un élément de jeu, 
                    un node, et l'instruction <IC>add_child()</IC> nous permettra d'ajouter cet élément dans le jeu par la suite.
                </p>
            </ColoredBox>
            <ColoredBox title="Attention:">
                Le code ci-dessus est un peu simplifié pour le tir de laser par notre vaisseau. En effet, il faudrait probablement y
                intégrer un timer. Autrement, le joueur verrait apparaître un nouveau laser à chaque frame de jeu où le bouton de laser 
                serait enfoncé, ce qui serait un peu intense.
            </ColoredBox>
        </section>

        <section>
            <h2>Ajouter un node au jeu</h2>
            <p>
                Pour ajouter le node créé précédemment au jeu, nous devrons utiliser la fonction <IC>add_child()</IC>. Cette fonction
                nous permet d'ajouter un élément dans la structure de node du jeu. Tous les nodes du jeu peuvent ajouter un sous-node 
                avec la fonction <IC>add_child()</IC>.
            </p>
            <p>
                Il n'est toutefois pas toujours intéressant d'ajouter le node comme un sous-node au node courant. C'est d'ailleur notre 
                cas ici. Si le vaisseau tire un laser et que le laser devient un sous-node du vaisseau, il sera alors alors dépendant de 
                certaines propriétés de notre vaisseau, comme par exemple sa position. Ça veut donc dire que le laser se déplacerait de 
                la même façon que le vaisseau, ce que nous ne voulons pas. Nous voulons que le déplacement du laser soit indépendant. 
                Dans ce genre de cas, nous voulons donc généralement ajouter les nouveaux nodes directement dans la scène principale.
                Bref, nous voulons l'ajouter à la racine de l'arbre de node. Pour y arriver, on utilisera <IC>get_tree().root</IC>.
            </p>
            <CodeBlock language="gdscript">{addChild}</CodeBlock>
            <p>
                Si nous laissons le code comme tel, le laser sera automatiquement positionné à la position par défaut de la scène du 
                laser, ce qui sera probablement (0, 0). Ici, ce n'est pas ce qu'on veut faire, nous voulons qu'il soit tiré par le 
                vaisseau et par conséquant, sa position de départ devrait être la même que le vaisseau. Nous pouvons donc ajouter cette 
                dernière ligne de code pour y arriver:
            </p>
            <CodeBlock language="gdscript">{position}</CodeBlock>
            <ColoredBox title="À noter:">
                <p>
                    Nous avons souvent tendance à modifier un node avant de l'ajouter dans le jeu avec <IC>add_child()</IC>. Cela fonctionnera
                    dans la majorité des cas. Toutefois, dans certains cas, des ressources sont chargées uniquement lorsque le node est 
                    ajouté au jeu. C'est entre autres le cas des textures des <IC>Sprite2D</IC>. Dans ce genre de cas, si vous avez besoin 
                    de faire des modification en fonction de données chargées uniquement à l'ajout dans le jeu, vous devrez faire les 
                    modification après l'instruction <IC>add_child()</IC>.
                </p>
                <p>
                    Vous pouvez toujours commencer par essayer vos modifications avant le <IC>add_child()</IC>. Si ça ne fonctionne pas,
                    essayez-le après.
                </p>
            </ColoredBox>
        </section>

        <section>
            <h2>Supprimer un node du jeu</h2>
            <p>
                Puisque nous pouvons créer des nodes dynamiquement, nous pouvons aussi les supprimer. Supposons, par exemple, que notre
                laser se heurte à un ennemi. Nous voudrons alors très probablement supprimer ce laser. Pour y arriver, nous pouvons 
                utiliser la fonction <IC>queue_free()</IC> pour supprimer le node courant. Dans notre exemple, nous pourrions mettre un
                script à notre laser qui le supprime lorsqu'il détecte une collision.
            </p>
            <CodeBlock language="gdscript">{free}</CodeBlock>
        </section>
    </>;
}
