import BorderedBox from '@/components/BorderedBox';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Utilisation de signaux",
    description: "Présentation des signaux pour échanger des informations entre les nodes et les scènes.",
    keywords: ["listener", "observer", "event", "données"],
    group: "notes"
}

const sousnode = 
`var sprite = $Sprite2D`;

const sousnodeAlt = 
`# Chercher de l'information
var taille_vaisseau: Vector2 = $Sprite2D.texture.get_size()

# Modifier des données
$Sprite2D.modulate = "#aa0000"`;

const signal = 
`# Script du personnage
extend Area2D

# Signal simple
signal est_mort

# Signal avec paramètre
signal changement_energie(energie: float, max_energie: float)

# ...`;

const emit = 
`@export var max_energie := 100
var energie := max_energie

# Lorsqu'un ennemie entre en collision avec notre 
# personnage
func _on_area_entered(area: Area2D) -> void:
    # On change la valeur de l'énergie
    energie -= 5

    # On emet le signal pour que d'autres puisse 
    #savoir que l'énergie du personnage a changer
    changement_energie.emit(energie, max_energie)`;

export default function Page() {
    return <>
        <section>
            <h2>Échange d'information</h2>
            <p>
                Jusqu'à présent, les données utilisées par nos nodes sont disponible directement dans le node lui-même que nous 
                programmons. Toutefois, nous devrons fréquemment partager et utiliser l'information venant d'autres nodes ou même 
                venant d'autres scènes. Cela va compliquer un peu les choses puisque pour travailler entre différentes nodes ou 
                scènes, le partage de variable ne se fait pas automatiquement. Nous devrons donc utiliser des techniques différentes.
            </p>
            <p>
                Dans cette page, nous verrons 2 techniques pour accéder à des informations venant d'autres nodes:
            </p>
            <ul>
                <li>L'accès aux données des sous-nodes.</li>
                <li>L'utilisation de signaux</li>
            </ul>
        </section>

        <section>
            <h2>Accéder aux sous-nodes</h2>
            <p>
                En général, les scripts sont associé au node principal d'une scène. Dans ce script, nous pouvons donc accéder aux données 
                du node principal. Il est toutefois aussi possible d'accéder aux informations des sous-nodes avec très peu de travail.
            </p>
            <p>
                Dans un script, si nous utilisons le symbole <IC>$</IC>, nous pouvons faire référence à un sous-node en utilisant son nom.
                Par exemple:
            </p>
            <CodeBlock language="gdscript">{sousnode}</CodeBlock>
            <p>
                Le nom après le symbole <IC>$</IC> est très important. Il doit être exactement celui du node qui est affiché dans le panneau
                de scène. Si le nom n'est pas bon, le code va retourner <IC>null</IC> et il va très probablement planter.
            </p>
            <p>
                Lorsque nous accédons à un sous-node de cette façon dans un script, nous pouvons lire l'information, mais aussi la modifier.
            </p>
            <CodeBlock language="gdscript">{sousnodeAlt}</CodeBlock>
            <p>
                Cette simple technique fonctionne très bien et vous permettra d'accéder ou de modifier les informations voulues dans la 
                grande majorité des cas. Toutefois, elle ne fonctionnera pas pour accéder aux informations d'un node parent, d'un node 
                frère ou soeur ou encore d'un node dans une autre scène. Dans ces cas-là, nous devrons utiliser les signaux.
            </p>
        </section>

        <section>
            <h2>Création d'un signal</h2>
            <p>
                Nous avons déjà utilisé les signaux pour les collisions. En effet, lorsqu'une collision était détecter avec 
                les <IC>Area2D</IC>, nous exécutions une fonction. C'est le principe du "<em>event listener</em>" ou de 
                "<em>observer</em>". Nous utiliserons souvent des signaux préexistant dans l'engin Godot pour détecter différentes 
                situations et y réagir. Nous pouvons toutefois pousser les choses un peu plus loin et créer nos propres signaux. Voici 
                le genre de situation ou cela pourrait arriver:
            </p>
            <BorderedBox>
                Dans notre jeu, le personnage a un certain nombre de points de vie. À chaque fois qu'un ennemie l'attaque, il perd un 
                certain nombre de point de vie. Si le nombre de point de vie du personnage atteint zéro, la partie est terminé. Nous 
                voulons afficher la quantité restante de points de vie du personnage sous la forme d'une barre d'énergie dans l'interface 
                du jeu.
            </BorderedBox>
            <p>
                Le problème ici, c'est que la barre d'énergie restante qui sera visible dans l'interface graphique n'est définitivement 
                pas un sous-node du personnage. En fait, ils seront probablement chacun dans des scènes différentes. Nous allons donc 
                opter pour l'utilisation de signaux pour partager la données de l'énergie restante du personnage vers la barre d'énergie.
                À chaque fois que l'énergie du personnage sera changé, nous enverrons un signal pour indiquer qu'il y a eu changement et
                spécifier les valeurs qui ont changé.
            </p>
            <p>
                Pour créer ce signal, nous devons utiliser l'instruction <IC>signal</IC> du GDScript. Dans notre cas, nous allons 
                l'utiliser dans le script du personnage puisque c'est ici que se trouve la donnée de l'énergie restante que nous voulons 
                partager.
            </p>
            <CodeBlock language="gdscript">{signal}</CodeBlock>
            <p>
                Nous utilisons généralement le mot-clé <IC>signal</IC> dans le haut du fichier de script pour déclarer tous les signaux 
                disponible dans ce fichier. Ce mot-clé nous permet de déclarer une structure de fonction qui pourra être utilisé pour 
                partager l'information. Il est donc possible de lui mettre des paramètres entre les parenthèses, comme pour une fonction.
                Il est aussi possible de ne pas mettre de paramètre dans le cas où il n'est pas nécessaire d'en envoyer. C'est à vous de 
                décider en fonction de ce que vous voulez faire.
            </p>
            <ColoredBox title="À noter">
                Les signaux utilise la même nomemclature que les variables en GDScript. Cela veut dire que vous devez les mettre 
                en <IC>snake_case_minuscule</IC>.
            </ColoredBox>
            <p>
                Une fois le signal déclarer, nous allons devoir l'émettre à chaque fois que nécessaire. Dans le cas du 
                signal <IC>changement_energie</IC>, nous devrions l'émettre à chaque fois que l'énergie du personnage est changé.
            </p>
            <CodeBlock language="gdscript">{emit}</CodeBlock>
            <p>
                Lorsque vous émettez un signal, n'oubliez pas de lui fournir les paramètres nécessaires. Dans notre exemple, le 
                signal <IC>changement_energie</IC> prends 2 paramètres, soit l'énergie courante du personnage et son maximum d'énergie.
                Il faut donc passer ces valeurs à la fonction <IC>emit</IC> pour les partager à ceux qui écouteront ce signal.
            </p>
        </section>

        <section>
            <h2>Détecter un signal</h2>
            <p>
                Pour détecter un signal qui a été émit et exécuter une fonction, nous devons faire comme avec les collisions. Nous devrons
                indiquer à notre élément que nous voulons écouter pour cet évènement au travers de l'interface graphique de Godot et 
                ensuite programmer la fonction qui va se ratacher au signal dans un script.
            </p>
            <p>
                Dans notre exemple, supposons que nous avons créer un node pour la barre d'énergie et que nous y avons ajouté un script
                pour la programmer. Nous pourrions utiliser le signal de la façon suivante:
            </p>
            <ol>
                <li>
                    Cliquer sur le node de votre personnage et aller dans le panneau de signal à la droite de l'interface graphique de 
                    Godot.
                </li>
                <li>
                    Double-cliquer sur le nom du signal que vous avez créé. Dans notre cas, c'est <IC>changement_energie(...)</IC>.
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, l'endroit où vous voulez ajouter la détection de ce signal. Dans notre cas, ce sera dans 
                    le node de la barre d'énergie.
                </li>
                <li>
                    Laisser le nom de méthode tel quel et cliquer sur le bouton "<em>Connect</em>".
                </li>
                <li>
                    Écrivez le code de la fonction a exécuter lorsque l'évènement survient. Dans notre exemple, on mettrait du code pour
                    modifier le visuel de la barre d'énergie en fonction de la valeur des variables <IC>energie</IC> et <IC>max_energie</IC> qui 
                    sont passé automatiquement en paramètre à la fonction.
                </li>
            </ol>
        </section>
    </>;
}
