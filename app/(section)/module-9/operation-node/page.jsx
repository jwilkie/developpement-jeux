import Image from 'next/image';
import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

import noeud_organisateur from '@/public/img/noeud-organisation.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Opérations sur les noeuds",
    description: "Présentation de différentes opérations de base sur les noeuds, tel que leur création, leur ajout, leur déplacement ainsi que leur suppression dans l'arbre de jeu de Godot.",
    keywords: ["noeud", "node", "scène", "queue_free", "load", "preload", "change_scene_to_file", "instantiate", "add_child", "move_child"],
    group: "notes"
}

const preload =
`# Préchargement de la scène à la compilation du projet
var scene_laser = preload("res://laser.tscn")

func _process(delta: float) -> void:
    if Input.is_action_just_pressed("tirer"):
        # Créer une instance de la scène préchargée
        var laser = scene_laser.instantiate()

        # Ajouter la scène dans l'arbre du jeu
        get_root().add_child(laser)
        laser.position = position`;

const load =
`func _on_area_entered(area: Area2D) -> void:
    if area is Personnage:
        # Charger la scène à la demande
        var ennemi_boss_scene = load("res://ennemi_boss.tscn")
        
        # Créer une instance de la scène chargée
        var ennemi_boss = ennemi_boss_scene.instantiate()

        # Ajouter la scène dans l'arbre du jeu
        niveau1.add_child(ennemi_boss)`;

const changeSceneToFile = 
`func _on_area_entered(area: Area2D) -> void:
    if area is Personnage:
        # Le personnage arrive à la fin du 
        # niveau, on change de scène pour le 
        # niveau suivant
        get_tree().change_scene_to_file("res://niveau2.tscn")`;

const queueFree = 
`func _process(delta: float) -> void:
    if position.y < 100:
        queue_free()`;

const addChild = 
`var explosion_scene = preload("res://explosion.tscn")

# Déclenchement de l'explosion lorsque le 
# personnage entre dans la zone
func _on_area_entered(area: Area2D) -> void:
    if area is Personnage:
        var explosion = explosion_scene.instantiate()
        explosion.position = area.position

        # Ajouter l'explosion au noeud racine
        get_root().add_child(explosion)`;

const moveChild =
`# ...

# Créer une instance de la scène préchargée
var explosion = explosion_scene.instantiate()
explosion.position = area.position

# Ajouter la scene au noeud racine
get_root().add_child(explosion)

# Déplacer l'explosion à la première position
get_root().move_child(explosion, 0)`;

export default function Page() {
    return <>
        <section>
            <h2>Organisation en scène</h2>
            <p>
                Lorsque nous développons des éléments de jeu dans Godot, nous organisons nos projets en noeud et en scènes. Nous
                faisons d'ailleurs cela depuis le début de ce cours. Vous ne serez donc pas surpris que nous allons utiliser ces
                mêmes concepts pour gérer le changement de niveaux dans notre jeu. En effet, dans Godot, un niveau est simplement
                une scène.
            </p>
            <p>
                Toutefois, nous n'avons pas encore abordé la question de comment charger, décharger des scènes ajouter ou déplacer 
                les noeuds dans nos scènes. C'est ce que nous allons voir dans cette page.
            </p>
        </section>

        <section>
            <h2>Charger une scène</h2>
            <p>
                Pour charger une scène à partir de son fichier <IC>.tscn</IC>, il existe de nombreuses méthodes. Une de celle que
                nous avons déjà utilisé est la méthode <IC>preload</IC>. Il en existe toutefois d'autres. Elles ont toutes des
                avantages et des inconvénients. Nous choisirons donc la méthode à utiliser selon le contexte.
            </p>
            <p>
                Voici les méthodes les plus couramment utilisées:
            </p>
            <section>
                <h3>preload</h3>
                <p>
                    La méthode <IC>preload</IC> est une fonction qui permet de charger une scène à partir de son fichier <IC>.tscn</IC>.
                    Elle est exécutée au chargement du jeu. Cela signifie que la scène est chargée en mémoire avant même que le jeu 
                    n'est complètement démarré. On l'utilise généralement pour charger des petites scènes qui sont utilisées
                    fréquemment dans le jeu.
                </p>
                <p>
                    Avantages:
                </p>
                <ul>
                    <li>
                        Puisque la scène est chargée en mémoire avant même que le jeu ne commence à s'exécuter, le temps de chargement
                        est essentiellement inexistant lorsque le jeu roule.
                    </li>
                </ul>
                <p>
                    Inconvénients:
                </p>
                <ul>
                    <li>
                        La méthode <IC>preload</IC> ne peut être utilisée que pour charger des scènes à l'avance, ce qui peut ne pas
                        être toujours souhaitable. Si on ne sait pas toujours quelles scènes seront nécessaires, ce n'est pas pratique.
                    </li>
                    <li>
                        Puisque la scène est chargée en mémoire d'avance, cela peut consommer beaucoup de mémoire si le projet contient
                        beaucoup de scènes volumineuses avec beaucoup de ressources.
                    </li>
                </ul>
                <p>
                    Exemple d'utilisation:
                </p>
                <CodeBlock language="gdscript">{preload}</CodeBlock>
            </section>
            <section>
                <h3>load</h3>
                <p>
                    La méthode <IC>load</IC> est une fonction qui permet de charger une scène à partir de son fichier à n'importe quel
                    moment. Elle chargera la scène en mémoire lorsqu'elle sera appelée. On l'utilise généralement pour charger des scènes
                    qui ne sont pas utilisées fréquemment dans le jeu ou des scènes plus volumineuses qui nécessite un contrôle du moment
                    de leur chargement.
                </p>
                <p>
                    Avantages:
                </p>
                <ul>
                    <li>
                        La méthode <IC>load</IC> peut être utilisée pour charger des scènes à n'importe quel moment, ce qui est pratique
                        pour gérer le chargement des ressources selon les besoins du jeu.
                    </li>
                    <li>
                        La méthode permet une flexibilité dans le moment où les scènes sont chargées, ce qui nous permet d'avoir des
                        logiques de chargement plus complexes et adaptées aux besoins du jeu.
                    </li>
                </ul>
                <p>
                    Inconvénients:
                </p>
                <ul>
                    <li>
                        Le fait de charger des scènes à la demande peut entraîner des ralentissements si le chargement prend du temps,
                        surtout si les scènes sont volumineuses.
                    </li>
                    <li>
                        L'utilisation de la méthode <IC>load</IC> nécessite une gestion plus complexe de la mémoire et des ressources. Le
                        code est, par conséquant, plus complexe et plus difficile à maintenir.
                    </li>
                </ul>
                <p>
                    Exemple d'utilisation:
                </p>
                <CodeBlock language="gdscript">{load}</CodeBlock>
            </section>

            <section>
                <h3>get_tree().change_scene_to_file</h3>
                <p>
                    La méthode <IC>get_tree().change_scene_to_file</IC> est une fonction qui permet de changer la scène principale courante à partir 
                    de son fichier <IC>.tscn</IC>. Elle est exécutée à n'importe quel moment, comme la méthode <IC>load</IC>. On peut 
                    l'utiliser pour changer de niveau dans un jeu. On ne l'utilisera toutefois pas très souvent puisqu'elle efface
                    généralement l'état du jeu. On l'utilisera donc seulement dans des cas très spécifiques.
                </p>
                <p>
                    Avantages:
                </p>
                <ul>
                    <li>
                        La méthode <IC>get_tree().change_scene_to_file</IC> est simple à utiliser et permet de changer la scène courante rapidement.
                    </li>
                    <li>
                        La méthode permet de changer la scène courante à n'importe quel moment.
                    </li>
                </ul>
                <p>
                    Inconvénients:
                </p>
                <ul>
                    <li>
                        Le fait de charger des scènes à la demande peut entraîner des ralentissements si le chargement prend du temps,
                        surtout si les scènes sont volumineuses.
                    </li>
                    <li>
                        Le changement de la scène principale courante peut entraîner la perte de l'état du jeu, ce qui peut être 
                        problématique dans de nombreux cas pour les jeux plus complexes.
                    </li>
                </ul>
                <p>
                    Exemple d'utilisation:
                </p>
                <CodeBlock language="gdscript">{changeSceneToFile}</CodeBlock>
            </section>
        </section>

        <section>
            <h2>Supprimer une scène</h2>
            <p>
                Supprimer une scène dans Godot est beaucoup plus simple et nécessite beaucoup moins de décisions que de la charger. 
                En fait, nous avons déjà déjà vu comment supprimer une scène dans un module précédent. Il suffit simplement d'appeler 
                la méthode <IC>queue_free()</IC> sur le noeud racine de la scène que nous voulons supprimer. 
            </p>
            <CodeBlock language="gdscript">{queueFree}</CodeBlock>
            <p>
                La seule complexité est de savoir quand appeler cette méthode. Si vous supprimer plusieurs éléments en même temps, il 
                est possible que cela crée certaines lenteurs dans le jeu. Il est donc important de bien disperser les appels à cette 
                méthode si cela devient un problème. 
            </p>
        </section>

        <section>
            <h2>Ajouter un élément dans un noeud</h2>
            <p>
                Nous avons déjà vu plusieurs exemples d'ajout d'éléments à un noeud dans ce module et dans les modules précédents. En
                général, nous utiliserons la méthode <IC>add_child()</IC> pour ajouter un élément à un noeud. Cela ajoutera toujours
                l'élément à la fin de la liste des enfants du noeud. 
            </p>
            <CodeBlock language="gdscript">{addChild}</CodeBlock>
            <p>
                Parfois, l'ordre des enfants d'un noeud est important. C'est le cas lorsque nous voulons que certains éléments soient 
                affichés devant d'autres éléments sans utilisé de <IC>z_index</IC>. Dans ces cas, nous pouvons utiliser la
                méthode <IC>move_child()</IC> pour déplacer un élément à une position spécifique dans la liste des enfants d'un noeud.
            </p>
            <CodeBlock language="gdscript">{moveChild}</CodeBlock>
            <p>
                Si le déplacement doit mettre un node à un endroit très spécifique entre d'autres nodes dont on ne sait pas exactement 
                le nombre d'avance, il peux être difficile d'utiliser la méthode <IC>move_child()</IC>. Dans ce cas, il est possible 
                de mettre des nodes d'organisation dans le noeud parent pour mieux gérer l'ordre des enfants. Par exemple, nous pouvons
                mettre un node <IC>Node2D</IC> pour les ennemis et un autre pour les projectiles. Cela nous permettra de mieux gérer
                l'ordre des enfants dans le noeud parent sans avoir à nous soucier de l'ordre exact des enfants.
            </p>
            <Image src={noeud_organisateur} alt="Exemple de noeud organisateur dans un jeu" />
        </section>
    </>;
}
