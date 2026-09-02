import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Tween",
    description: "Présentation des tweens, un outil de Godot pour simplifier la création d'animation dans le code.",
    keywords: ["transition", "boucle", "répétition", "aléatoire"],
    group: "notes"
}

const create = 
`var tween = create_tween()`;

const disparu = 
`@onready var sprite_2d := $Sprite2D

func disparait(temps) -> void:
    var tween = create_tween()
    tween.tween_property(sprite_2d, "modulate:a", 0, temps)
    tween.tween_callback(queue_free)`;

const rotation = 
`@onready var sprite_2d := $Sprite2D

func rotation(temps_min, temps_max) -> void:
    var tween = create_tween()
    tween.set_loops()
    tween.tween_property(
        sprite_2d, 
        "rotation", 
        TAU * [-1, 1].pick_random(), 
        randf_range(temps_min, temps_max)
    ).from(0)`;

const shake = 
`@onready var sprite_2d := $Sprite2D

func shake(temps, vitesse, intensite) -> void:
    var tween = create_tween()
    for i in temps / vitesse:
        tween.tween_property(
            sprite_2d, 
            "position", 
            Vector2.from_angle(randf() * TAU) * intensite, 
            vitesse
        )
        
    tween.tween_property(sprite_2d, "position", Vector2.ZERO, vitesse)`;

const statictweens =
`class_name Tweens

# Fonction de tween static
static func disparaitre(element, sprite, temps) -> void:
	var tween = element.create_tween()
	tween.tween_property(sprite, "modulate:a", 0, temps)
	tween.tween_callback(element.queue_free)`;

const staticuse = 
`@onready var sprite_2d := $Sprite2D

# ...

Tweens.disparaitre(self, sprite_2d, 2.5)`;

export default function Page() {
    return <>
        <section>
            <h2>Animation simplifié</h2>
            <p>
                Les <em>tweens</em> sont des objets de Godot qui nous permettent d'animer les propriétés d'un objet de façon un peu plus simple 
                dans le code. Au lieu d'avoir à modifier nous-même les propriétés dans la fonction <IC>_process()</IC>, les <em>tweens</em> nous 
                donne l'option de choisir quelle propriété nous voulons modifier, comment et sur combien de temps. Le reste sera 
                automatiquement géré par l'engin.
            </p>
            <p>
                Les <em>tweens</em> permettent de grandement simplifier le code des animations. On les utilisera généralement dès que l'on veut
                une animation dynamique qui ne peut pas être pré-créé à l'aide du <IC>AnimationPlayer</IC>.
            </p>
            <ColoredBox title="Attention:">
                Même si les <em>tweens</em> semblent peuvent remplacer presque toutes les animations possible dans le code, vous verrez à 
                l'utilisation que dans certaines situations, ils complexifient le code. C'est entre autres le cas pour le défilement
                de l'arrière-plan.
            </ColoredBox>
            <p>
                Pour créer un <em>tween</em>, vous devez le faire dans un script d'un objet. Au moment où vous voulez lancer l'animation, vous 
                n'avez qu'à créer le <em>tween</em> avec le code suivant:
            </p>
            <CodeBlock language="gdscript">{create}</CodeBlock>
            <p>
                Une fois le <em>tween</em> créé avec la ligne précédante, nous pouvons simplement le configurer pour qu'il fasse l'animation que 
                l'on veut.
            </p>
        </section>

        <section>
            <h2>Configurer un tween</h2>
            <p>
                La configuration d'un <em>tween</em> se fait à partir de fonction que l'on exécutera sur celui-ci. Voici quelques fonctions 
                utile à sa configuration:
            </p>
            <dl>
                <dt><IC>set_loop()</IC></dt>
                <dd>
                    Permet de répéter le <em>tween</em> un certain nombre de fois ou même indéfiniment. Si on spécifie un nombre entre les 
                    parenthèse de la fonction, le <em>tween</em> se répétera ce nombre exact de fois. Si aucune valeur n'est spécifié en 
                    paramètre, le <em>tween</em> se répétera à l'infini.
                </dd>

                <dt><IC>set_parallel()</IC></dt>
                <dd>
                    Permet d'indiquer que les changements du <em>tween</em> ne se font pas les uns après les autres, mais en même temps, en 
                    parallel. Par défaut, les <em>tweens</em> effectuent leurs modifications les unes après les autres. Il faut donc utiliser 
                    cette fonction pour indiquer que nous voulons tout modifier en même temps.
                </dd>

                <dt><IC>tween_property()</IC></dt>
                <dd>
                    Permet d'indiquer une modification de propriété dans notre animation. La fonction <IC>tween_property()</IC> est 
                    celle que vous aurez à utiliser le plus avec les <em>tweens</em>. Elle prends 4 paramètres. Les voici dans l'ordre:
                    <ul>
                        <li>
                            L'élément sur lequel on veut modifier la propriété. On peut ainsi modifier des propriétés de nodes enfants 
                            à notre élément. Si on veut modifier une propriété de l'élément lui-même, on spécifie <IC>self</IC>.
                        </li>
                        <li>
                            Le nom de la propriété à modifier dans une string. Si vous voulez modifier une sous-propriété, vous pouvez
                            utiliser les deux-points (<IC>:</IC>) de la façon suivante: <IC>position:x</IC>.
                        </li>
                        <li>
                            La valeur à laquelle on veut que la propriété se rende. Ça doit être une valeur compatible avec la propriété
                            spécifié.
                        </li>
                        <li>
                            Le temps, en secondes, pour que le changement de la propriété se fasse. Le changement de la propriété se fera 
                            graduellement jusqu'à ce qu'il atteigne la valeur voulu à la fin du temps spécifié.
                        </li>
                    </ul>
                </dd>

                <dt><IC>tween_interval()</IC></dt>
                <dd>
                    Permet d'effectuer une pause dans l'animation du <em>tween</em>. On spécifie le délai à attendre en seconde comme 
                    paramètre à cette fonction.
                </dd>

                <dt><IC>tween_callback()</IC></dt>
                <dd>
                    Permet d'exécuter une fonction à un certain moment de l'animation. Cette fonction reçoit en paramètre une autre 
                    fonction qui sera exécuter au moment de l'animation où <IC>tween_callback()</IC> est utilisé.
                </dd>

                <dt><IC>from()</IC></dt>
                <dd>
                    Permet de spécifier une valeur de départ pour une animation. C'est très pratique pour les animations qui se répète 
                    avec <IC>set_loop</IC> pour forcer une valeur à se réinitialiser à chaque bouclage.
                </dd>
            </dl>
            <p>
                Il existe de nombreuses autres fonctions utilitaire aux <em>tweens</em>. Si vous voulez en avoir un aperçu, vous pouvez 
                consulter la documentation de Godot ici:
            </p>
            <ul>
                <li>
                    <a href="https://docs.godotengine.org/en/stable/classes/class_tween.html">
                        Tween - Documentation
                    </a>
                </li>
                <li>
                    <a href="https://docs.godotengine.org/en/stable/classes/class_propertytweener.html">
                        PropertyTweener - Documentation
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <h2>Exemples de tweens</h2>
            <h3>Faire disparaître un élément</h3>
            <CodeBlock language="gdscript">{disparu}</CodeBlock>
            <p>
                Fait disparaître un élément en modifiant sa propriété alpha (<IC>modulate:a</IC>) vers zéro dans un certain temps. Ici,
                on supprime l'élément lorsque qu'il est rendu invisible en appelant la fonction <IC>queue_free</IC> à la fin de 
                l'animation, mais ce n'est pas obligatoire.
            </p>

            <h3>Faire tourner un objet aléatoirement à l'infini</h3>
            <CodeBlock language="gdscript">{rotation}</CodeBlock>
            <p>
                Crée un <em>tween</em> qui se répète à l'infini. On modifie ici la propriété rotation d'un <IC>Sprite2D</IC> qui démarre à l'angle 
                zéro (en radian) et que l'on veut amener vers la valeur de <IC>TAU</IC> qui est <IC>2π</IC> (360° en radian). Pour 
                que la rotation soit dans une direction aléatoire, on multiplie la valeur par 1 ou -1 aléatoirement. La vitesse de 
                rotation est configurable entre les paramètres <IC>temps_min</IC> et <IC>temps_max</IC>.
            </p>

            <h3>Shake</h3>
            <CodeBlock language="gdscript">{shake}</CodeBlock>
            <p>
                Fait bouger un <IC>Sprite2D</IC> dans différentes directions très rapidement, comme si on secouait notre élément. Les 
                trois paramètres utilisé ici sont le temps total de l'animation, la vitesse du secouage, qui doit être plus petit que 
                le temps total et l'intensité, qui est la quantité de pixel du déplacement de notre élément. Ce <em>tween</em> répète 
                un mouvement de déplacement à plusieurs reprise. Plus la vitesse est petite en comparaison au temps total, plus l'élément
                se déplacera rapidement.
            </p>
            <p>
                Pour décider de la prochaine position pour chaque mouvement, nous utilisons un calcul intéressant où nous générons un 
                vecteur de la taille de notre intensité dans une direction aléatoire.
            </p>
        </section>

        <section>
            <h2>Réutilisation de tweens</h2>
            <p>
                Les <em>tweens</em> sont très pratique, mais ils ne sont techniquement pas réutilisable. Essentiellement, une fois que
                la variable <IC>tween</IC> est créé, on ne peut pas la garder pour réutiliser l'animation plus tard. Elle lance l'animation
                une fois et c'est tout. C'est pour cette raison que les exemples de <em>tweens</em> ci-dessus sont programmé dans des 
                fonctions. Puisque la fonction recrée une nouvelle variable <IC>tween</IC> à chaque exécution, il est possible de 
                réutiliser le <em>tween</em> si voulu. Ce n'est toutefois pas nécessaire et vous pourriez simplement mettre le tween 
                à l'endroit voulu dans le code s'il n'est pas réutilisé.
            </p>
            <p>
                Si vous voulez réutiliser un <em>tween</em> entre plusieurs éléments, vous pourriez vous créer un fichier de script 
                contenant des fonctions statiques de tween. On peut réutiliser les fonction ci-dessus avec quelques petits changement. 
                Cette classe pourrait ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{statictweens}</CodeBlock>
            <p>
                Comme vous pouvez le voir, on a spécifier un nom de classe pour ce fichier. Ici, on l'a appeler <IC>Tweens</IC>, mais vous 
                pourriez lui donner un autre nom. On a aussi ajouter 2 paramètres à notre fonction de <em>tween</em>. Une qui est 
                l'élément sur lequel nous voulons ajouter le <em>tween</em> et l'autre le <IC>Sprite2D</IC> sur lequel l'animation aura 
                lieu. Si vous voulez l'utiliser dans un autre fichier, vous pourriez l'utiliser de la façon suivante:
            </p>
            <CodeBlock language="gdscript">{staticuse}</CodeBlock>
        </section>
    </>;
}
