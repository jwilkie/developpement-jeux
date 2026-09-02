import Image from 'next/image';
import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';

import movingBG from '@/public/img/moving-bg.png';
import movingBG2 from '@/public/img/moving-bg-2.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Animation par code",
    description: "Présentation de techniques simple pour effectuer des animations par code dans Godot, sans utiliser l'interface graphique.",
    keywords: ["propiétés", "background", "défiler"],
    group: "notes"
}

const defilement = 
`# Vitesse configurable de défilement de l'arrière-plan
@export var vitesse := 150

func _process(delta: float) -> void:
    # On modifie la position de l'arrière-plan en 
    # fonction du temps écoulé et de sa vitesse
	position.y += vitesse * delta

    # Si l'arrière-plan a complètement défilé, on le 
    # remet à sa position de départ
	if position.y >= 0:
		position.y -= texture.get_height()`;

const draw =
`# Modifier la fonction de dessin
func _draw() -> void:
	draw_texture(texture, Vector2(0, texture.get_height()))`;

export default function Page() {
    return <>
        <section>
            <h2>AnimationPlayer ou code</h2>
            <p>
                Le AnimationPlayer de Godot est un outil très puissant pour créer des animations complexes, mais il nous limite 
                généralement à des animations pré-définies. Parfois, nous voulons jouer des animations de manière plus dynamique, en 
                fonction de l'état du jeu, des actions du joueur ou à partir d'élément aléatoires. Dans ces cas, il est souvent plus 
                pratique de créer les animations directement dans le code en modifiant les propriétés des éléments de jeu.
            </p>
            <p>
                Un exemple classique est celui d'un arrière-plan qui défile. Cet arrière-plan pourrait défiler à différente vitesse en
                fonction de l'image utilisé, du niveau choisi par le joueur ou encore par la vitesse du personnage. Plutôt que de créer
                une animation pour chaque cas possible, ce qui serait impossible vu la multitude de possibilités, il est plus simple de
                faire défiler l'arrière-plan en modifiant sa position dans le code. 
            </p>
        </section>

        <section>
            <h2>Défilement d'arrière-plan</h2>
            <p>
                Pour faire défiler un arrière-plan, il nous faut d'abord créer ou aller chercher une image d'arrière-plan qui se 
                répète bien horizontalement ou verticalement dépendant de la direction du défilement souhaité. L'image devrait être
                assez grande pour couvrir l'écran de jeu. Il est théoriquement possible de faire défiler une image plus petite que 
                l'écran, mais ça complexifie un peu le code.
            </p>
            <p>
                Une fois l'image choisie, il nous suffit de modifier sa position dans le code pour créer l'effet de défilement. Nous 
                allons donc ajouter un script à notre arrière-plan et dans ce script, nous allons modifier la 
                fonction <IC>_process()</IC>.
            </p>
            <CodeBlock language="gdscript">{defilement}</CodeBlock>
            <p>
                Le code ci-dessus fait défiler l'arrière-plan vers le bas à une vitesse configurable. On modifie la position Y de
                l'arrière-plan à chaque frame en fonction du temps écoulé (delta) et de la vitesse. Lorsque l'arrière-plan est 
                complètement en dehors de l'écran, on le remet à sa position de départ pour créer un effet de défilement continu.
            </p>
            <p>
                Si vous testez ce code, vous verrez que l'arrière-plan défile bien, mais il y a définitivement un problème. Il y a 
                beaucoup de vide qui apparaît à l'écran lorsque l'image se déplace.
            </p>
        </section>

        <section>
            <h2>Problème d'arrière-plan qui défile</h2>
            <p>
                Comme vous avez pu le remarquer à l'étae précédante, on rencontrera un généralement un problème avec notre arrière-plan 
                qui défile: Si l'image est de la taille de l'écran, elle ne pourra pas défiler, car elle sera trop petite pour être 
                déplacée sans laisser de vide.
            </p>
            <Image src={movingBG} alt="Problème d'arrière-plan qui défile" />
            <p>
                La solution à ce problème est de dupliquer l'image d'arrière-plan et de les placer côte à côte. De cette manière, lorsque
                l'une des images sort de l'écran, l'autre prend sa place, créant ainsi un effet de défilement continu. 
            </p>
            <Image src={movingBG2} alt="Solution au problème d'arrière-plan qui défile" />
            <p>
                Pour y arriver, on a pas besoin de créer un deuxième <IC>Sprite2D</IC>. On peut simplement dupliquer l'affichage de 
                l'image d'arrière-plan en le dessinant une deuxième fois à une position décalée dans la scène. Pour y arriver, on 
                utilisera la fonction <IC>_draw()</IC> de Godot qui nous permet de changer l'affichage d'un élément de jeu.
            </p>
            <CodeBlock language="gdscript">{draw}</CodeBlock>
            <p>
                Ici, nous utilisons la fonction <IC>draw_texture()</IC> pour redessiner l'image d'arrière-plan à une position décalée. 
                Dans l'exemple ci-dessus, nous dessinons l'image d'arrière-plan une deuxième fois juste en dessous de la première image
                en spécifiant sa position Y égale à la hauteur de l'image.
            </p>
        </section>

        <section>
            <h2>Autres animations par code</h2>
            <p>
                Le défilement d'arrière-plan est un exemple classique d'animation par code, mais il existe de nombreuses autres 
                possibilités. Vous pouvez effectivement modifier n'importe quelle propriété d'un élément de jeu pour créer des animations
                dynamiques. Voici quelques exemples:
            </p>
            <ul>
                <li>
                    Vous pourriez faire clignoter un élément de jeu en modifiant la composante alpha de la couleur de la propriété 
                    <IC>modulate</IC>.
                </li>
                <li>
                    Vous pouvez faire tourner un élément pour qu'il pointe toujours vers le joueur en modifiant sa propriété 
                    de <IC>rotation</IC>.
                </li>
                <li>
                    Vous pouvez faire trembler un élément aléatoirement en modifiant sa propriété <IC>position</IC> à plusieurs reprise 
                    rapidement.
                </li>
            </ul>
        </section>
    </>;
}
