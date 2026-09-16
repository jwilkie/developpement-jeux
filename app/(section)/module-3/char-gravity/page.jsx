import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Personnage affecté par la gravité",
    description: "Présentation du node CharacterBody2D et de comment le programmer pour qu'il soit affecté par la gravité.",
    keywords: ["CharacterBody2D", "gravity", "sidescroller", "2D"],
    group: "notes"
}

const changeGravity = 
`PhysicsServer2D.area_set_param(
    get_viewport().find_world_2d().space, 
    PhysicsServer2D.AREA_PARAM_GRAVITY, 
    400
)`

export default function Page() {
    return <>
        <section>
            <h2>Jeu à défilement latéral</h2>
            <p>
                Les jeux à défilement latéral (sidescroller) sont des jeux où le personnage se déplace principalement vers la gauche ou la
                droite et est très souvent affecté par la gravité. Si vous avez besoin d'une image, pensez aux vieux jeux de Super Mario Bros. 
                ou à des jeux plus récents comme Celeste ou les personnages se déplacent de du sol à des plateformes en hauteur en sautant. 
                Ce genre de jeu est un classique dans le monde du jeu vidéo.
            </p>
            <p>
                Pour pouvoir développer un jeu à défilement latéral, nous devons ajouter quelques fonctionnalités à notre jeu, soit affecter 
                les éléments de notre jeu par la gravité, permettre au personnage de sauter et enfin établir des collisions entre le personnage
                et les planchers ou murs. Heureusement, Godot nous offre plusieurs nodes et éléments pour nous aider à accomplir ces tâches 
                avec un minimum de code.
            </p>
        </section>

        <section>
            <h2>CharacterBody2D</h2>
            <p>
                Pour créer un personnage affecté par la gravité, nous utiliserons le node <IC>CharacterBody2D</IC>. Ce node nous permet de créer
                un élément de jeu que nous pourrons programmer pour se déplacer et qui pourra entrer en collision avec d'autres éléments de
                notre jeu, ce qui lui permettra de se tenir sur des surfaces ou de frapper des murs. 
            </p>
            <p>
                Pour utiliser la base du node <IC>CharacterBody2D</IC>, nous suivrons les étapes suivantes:
            </p>
            <ol>
                <li>
                    Dans votre scène principale, ajoutez un node <IC>CharacterBody2D</IC> et renommez-le "Joueur", "Personnage" ou tout autre 
                    nom significatif.
                </li>
                <li>
                    Ce node a besoin d'une forme de collision pour entrer en collision avec d'autres éléments de votre jeu. Pour ce faire, 
                    ajoutez un node <IC>CollisionShape2D</IC> ou <IC>CollisionPolygon2D</IC> comme enfant du node <IC>CharacterBody2D</IC>.
                    Définissez ensuite la forme de collision à l'aide des propriétés nécessaires comme vu dans les modules précédents.
                </li>
                <li>
                    Pour que le node soit visible dans le jeu, ajoutez un node <IC>Sprite2D</IC> ou tout autre node d'affichage comme enfant du
                    node <IC>CharacterBody2D</IC>. Définissez ensuite les propriétés nécessaires pour afficher votre personnage.
                </li>
                <li>
                    Pour que le personnage puisse se déplacer, ajoutez un script à votre node <IC>CharacterBody2D</IC>. Les scripts qui héritent
                    de <IC>CharacterBody2D</IC> contiennent par défaut quelques lignes de code supplémentaires lors de leur génération. Ces 
                    ligne définisse un comportement de base pour déplacer le personnage et de le faire sauter. Il implémente aussi une gravité 
                    par défaut.
                </li>
            </ol>
            <p>
                Avec toutes ces étapes, vous aurez un personnage fonctionnel que vous pourrez déplacer et qui sera affecté par la gravité. 
                D'ailleur, si vous démarrez le jeu à ce moment, vous verrez votre personnage tomber jusqu'au bas de l'écran. Puisqu'il n'y a pas
                encore de plancher ou plateforme pour le retenir, notre personnage tombera à l'infini.
            </p>
            <ColoredBox title="À noter: ">
                Le node <IC>CharacterBody2D</IC> est très pratique pour créer un personnage que l'on contrôle, mais il est aussi très pratique 
                pour créer des ennemis ou des personnages non-joueurs (PNJ) qui se déplacent dans le jeu. La grande différence est que vous
                devrez programmer vous-même le déplacement de ces personnages au lieu d'utiliser les entrées du joueur pour les déplacer. 
            </ColoredBox>
            <ColoredBox title="Attention: ">
                Le code par défaut dans le node <IC>CharacterBody2D</IC> est bon pour faire des tests rapides, mais il faudra le changer 
                rapidement. Entre autres, vous devrez utiliser vos propres entrées pour déplacer le personnage et le faire sauter plutôt que 
                celles misent par défaut dans le script. Vous aurez aussi probablement à ajuster des valeurs comme la vitesse et certains 
                calculs de déplacement.
            </ColoredBox>
        </section>

        <section>
            <h2>Gravité</h2>
            <p>
                Si vous regarder le code généré pour votre <IC>CharacterBody2D</IC>, vous remarquerez que la gravité qui est affecté à votre 
                personnage est trouvé en appelant la fonction <IC>get_gravity()</IC>. En fait, Godot possède une constante de gravité qu'il 
                utilise dans son engin de physique et cette fonction nous permet d'y accéder. Au moment d'écrire ces notes, la valeur par 
                défaut de la constante d'accélération gravitationnelle dans Godot est de 980 pixel/seconde<sup>2</sup> (px/s<sup>2</sup>), ce
                qui est très similaire à la moyenne de l'accélération gravitationnelle sur la planète terre, qui est de 9,81 m/s<sup>2</sup>.
            </p>
            <p>
                Il est possible que votre jeu ne se passe pas sur la planète terre ou tout simplement que vous voulez que les éléments de votre 
                jeu soient plus flottant ou plus tombant. Vous devrez alors modifier la constante d'accélération gravitationnelle de Godot. Vous 
                pouvez y arriver de la façon suivante.
            </p>
            <ol>
                <li>
                    Ouvir le fenêtre de configuration de projet en allant dans le menu "Project", puis dans "Project Settings...".
                </li>
                <li>
                    Dans l'onglet général de la fenêtre de configuration du projet, allez dans la section "Physics" puis dans "2D".
                </li>
                <li>
                    Dans le menu de droite, modifier la valeur de la propriété "Default Gravity".
                </li>
            </ol>
            <p>
                Il est aussi possible de changer la gravité directement dans le code, par exemple si vous devez changer la gravité durant le 
                jeu. Pour y arriver, vous pouvez utiliser une instuction similaire à ceci:
            </p>
            <CodeBlock language="gdscript">{changeGravity}</CodeBlock>
            <ColoredBox title="À noter: ">
                Il est même possible de changer la direction de la gravité. On pourait par exemple inverser la gravité et faire tomber les 
                éléments vers le haut de l'écran. Plusieurs jeux utilisent cette technique pour créer des effets intéressants. Un jeu très 
                connu utilisant cette technique est <a href="https://store.steampowered.com/app/70300/VVVVVV/" target="_blank">VVVVVV</a>.
            </ColoredBox>
            <ColoredBox title="Attention">
                Si votre jeu nécessite fréquemment de changer la gravité ou la direction de la gravité, il pourrait être difficile de gérer 
                la gravité en modifiant toujours les constantes de l'engin. Il est toutefois possible d'utiliser le node <IC>Area2D</IC> pour 
                surcharger la gravité dans une zone de votre jeu ou encore de programmer vous-même vos propres constantes de gravité.
            </ColoredBox>
        </section>
    </>;
}
