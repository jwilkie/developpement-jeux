import Image from 'next/image'
import IC from '@/components/InlineCode'

import toolPoint from '@/public/img/path2d-new-points.png'
import addPoint from '@/public/img/path2d-add-points.png'
import toolCurve from '@/public/img/path2d-set-curve.png'
import addCurve from '@/public/img/path2d-add-curve.png'
import pathFollow2D from '@/public/img/pathfollow2d.png'
import OverflowContainer from '@/components/OverflowContainer';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Collision suivant un chemin",
    description: "Présentation des nodes Path2D et PathFollow2D pour créer des éléments intéractifs qui suivent un chemin.",
    keywords: ["animated", "collision", "moving", "platform", "path", "follow"],
    group: "notes"
}

const followPathScript =
`extends Path2D

@export var speed: float = 100.0
@onready var path_follow: PathFollow2D = $PathFollow2D
@onready var element: AnimatableBody2D = $PathFollow2D/AnimatableBody2D

func _physics_process(delta: float) -> void:
	# Déplacer le point sur la courbe
	path_follow.progress += speed * delta
	
	# Correctif pour le bogue 
	# https://github.com/godotengine/godot/issues/58269
	element.global_position = element.global_position`

const reverseDirectionScript = 
`func _physics_process(delta: float) -> void:
	# Déplacer le point sur la courbe
	path_follow.progress += speed * direction * delta
	element.global_position = element.global_position
	
	# Inverser la direction si on arrive au bout du chemin
	if path_follow.progress_ratio >= 1.0 || path_follow.progress_ratio <= 0.0:
		path_follow.progress_ratio = clampf(path_follow.progress_ratio, 0, 1)
		direction *= -1`;

export default function Page() {
    return <>
        <section>
            <h2>AnimatableBody2D</h2>
            <p>
                Créer une animation de déplacement d'un élément de collision n'est pas si difficile si le déplacement est simple. Par
                exemple, créer une animation de translation pour un ascenceur est assez simple. Toutefois, si le déplacement est plus 
                complexe, comme un déplacement sur un chemin compliqué ou courbé, il sera difficile de le faire avec 
                votre <IC>AnimationPlayer</IC>. Le node <IC>AnimatableBody2D</IC> pourra être utilisé, mais il faudra trouver un autre 
                moyen pour animer le déplacement de votre élément.
            </p>
            <p>
                Heureusement, Godot nous offre deux nodes qui vont nous permettre de déplacer des éléments sur des chemins complexes. Ces
                nodes sont <IC>Path2D</IC> et <IC>PathFollow2D</IC>. À l'aide de ces deux nodes, nous pouvons créer des chemins complexes 
                et faire suivre ces chemins à différents éléments de notre jeu, y compris des éléments de collision comme 
                le <IC>AnimatableBody2D</IC>.
            </p>
        </section>

        <section>
            <h2>Création d'un chemin</h2>
            <p>
                Pour créer un chemin, il nous faut d'abord créer un node <IC>Path2D</IC>. Ce node va contenir le chemin que nous voulons 
                créer. Voici comment créer et configurer un chemin:
            </p>
            <ol>
                <li>
                    Créer un node <IC>Path2D</IC> dans votre scène.
                </li>
                <li>
                    Dans le panneau de scène, sélectionner le nouveau node <IC>Path2D</IC>.
                </li>
                <li>
                    Dans l'éditeur de scène, utiliser l'outil pour ajouter des points de chemin.
                    <Image src={toolPoint} alt="Outil pour ajouter des points de chemin" />
                </li>
                <li>
                    Cliquer dans la scène pour ajouter des points au chemin. Vous pouvez ajouter des points en utilisant le clic gauche 
                    de la souris et les supprimer en utilisant le clic droit.
                    <Image src={addPoint} alt="Ajout de points au chemin dans l'éditeur de scène" />
                </li>
                <li>
                    Pour créer des courbes dans le chemin, vous pouvez utiliser l'outil pour ajouter des courbes.
                    <Image src={toolCurve} alt="Outil pour ajouter des courbes au chemin" />
                </li>
                <li>
                    Pour créer une courbe, cliquer sur un point du chemin et glisser la souris pour créer une courbe. Vous pouvez ajuster
                    la courbe en déplaçant les points de contrôle de la courbe.
                    <Image src={addCurve} alt="Ajout de courbes au chemin dans l'éditeur de scène" />
                </li>
            </ol>
            <p>
                Une fois le chemin créé, il nous reste qu'à faire suivre ce chemin à un élément de notre jeu. Pour ce faire, nous allons 
                utiliser le node <IC>PathFollow2D</IC>.
            </p>
        </section>
        
        <section>
            <h2>PathFollow2D</h2>
            <p>
                Le node <IC>PathFollow2D</IC> est un node qui va suivre le chemin défini par un node <IC>Path2D</IC>. Ce node doit 
                obligatoirement être placé sous un node <IC>Path2D</IC> pour bien fonctionner. Ce qui est 
                intéressant avec ce node est que ses enfants vont aussi suivre le chemin. Pour faire suivre un chemin à un élément de 
                collision, nous aurions donc une structure similaire à celle-ci:
            </p>
            <Image src={pathFollow2D} alt="Structure de node pour faire suivre un chemin à un élément de collision" />
            <p>
                Le node <IC>PathFollow2D</IC> possède quelques propriétés intéressantes que nous pouvons configurer pour ajuster le 
                comportement du suivi du chemin. 
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Propriété</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rotates</td>
                            <td>
                                Si cette propriété est activée, le node <IC>PathFollow2D</IC> va tourner pour suivre la direction du 
                                chemin. Si cette propriété est désactivée, les enfants du node <IC>PathFollow2D</IC> vont rester dans la
                                même orientation, peu importe la direction du chemin.
                            </td>
                        </tr>
                        <tr>
                            <td>Loop</td>
                            <td>
                                Si cette propriété est activée, le node <IC>PathFollow2D</IC> va recommencer à suivre le chemin à partir
                                du début une fois qu'il a atteint la fin du chemin. Cela permet de créer des mouvements continus le long 
                                d'un chemin fermé. 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Malheureusement, le node <IC>PathFollow2D</IC> ne possède pas de propriété ou de comportement pour animer le suivi du 
                chemin. Il nous faudra donc utiliser des scripts pour que le déplacement se fasse selon nos besoins. 
            </p>
        </section>

        <section>
            <h2>Script pour le suivi du chemin</h2>
            <p>
                Pour que notre node <IC>PathFollow2D</IC>, ainsi que ses enfants, se déplacent le long du chemin du node <IC>Path2D</IC>,
                nous allons devoir ajouter un script. Je vous recommande d'ajouter le script sur le node <IC>Path2D</IC> pour avoir une 
                meilleure flexibilité. 
            </p>
            <p>
                Voici un exemple de script qui va faire suivre le chemin à notre node <IC>PathFollow2D</IC>:
            </p>
            <CodeBlock language="gdscript">{followPathScript}</CodeBlock>
            <p>
                Le code n'est pas très compliqué. Nous changeons simplement la propriété <IC>progress</IC> du node <IC>PathFollow2D</IC> 
                pour qu'il soit plus avancé sur le chemin à chaque frame, dépendant de la vitesse que nous avons configurée. 
            </p>
            <ColoredBox title="À noter: ">
                Vous pouvez remarquer ici la ligne de code qui modifie la position globale de l'élément de collision. Cette ligne est un
                correctif pour un bogue présentement dans Godot. Si nous ne mettons pas cette ligne, l'élément de collision ne suivra pas
                correctement le chemin. Si vous avez un élément qui ne possède pas de collision, vous n'avez toutefois pas besoin de cette 
                ligne. 
            </ColoredBox>
            <p>
                Vous pouvez, bien entendu, modifier ce script pour y ajouter des comportements supplémentaires, comme faire en sorte que 
                l'élément de collision s'arrête à certains points du chemin, ou encore qu'il puisse changer de direction selon certaines
                conditions. 
            </p>
            <p>
                Voici un exemple qui inverse la direction du déplacement lorsque l'élément de collision atteint les extrémités du chemin:
            </p>
            <CodeBlock language="gdscript">{reverseDirectionScript}</CodeBlock>
        </section>
    </>;
}
