import Image from 'next/image'
import IC from '@/components/InlineCode'
import Gallery from '@/components/Gallery'

import platformMario1 from '@/public/img/platform-moving-mario.webp'
import platformMario2 from '@/public/img/platform-rotating-mario.png'
import platformCeleste from '@/public/img/platform-moving-celeste.jpg'
import platformCrossyRoad from '@/public/img/platform-moving-crossy-road.webp'
import animatableBody2D from '@/public/img/animatablebody2d.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Collision animée",
    description: "Présentation du node AnimatableBody2D pour créer des éléments de collision statiques qui peuvent être animés dans Godot.",
    keywords: ["animated", "collision", "moving", "platform"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Le problème de la plateforme qui bouge</h2>
            <p>
                Un des éléments de base dans plusieurs jeux est la plateforme qui bouge. C'est une plateforme sur laquelle le joueur
                peut marcher et qui se déplace dans le monde. Des jeux de plateforme comme Mario Bros ou Celeste utilisent ce genre de
                plateforme à plusieurs endroits.
            </p>
            <Gallery pictures={[
                {image: platformMario1, caption: "Plateforme qui se déplace sur un chemin dans Super Mario Bros 3."},
                {image: platformMario2, caption: "Plateforme qui tourne dans Super Mario World."},
                {image: platformCeleste, caption: "Plateforme qui se déplace dans Celeste."},
                {image: platformCrossyRoad, caption: "Plateforme qui se déplace dans l'eau dans Crossy Road."},
            ]} />
            <p>
                Le problème avec ce genre de plateforme est qu'elle est essentiellement une collision statique, mais qui se 
                déplace et déplacera aussi les éléments qui sont dessus. C'est donc un élément intermédiaire entre 
                un <IC>StaticBody2D</IC> et un <IC>CharacterBody2D</IC>. La programmation de ce genre d'élément n'est donc 
                pas si simple. 
            </p>
            <p>
                Heureusement, puisque c'est un concept assez commun, Godot nous offre un node pour résoudre ce
                problème: le node <IC>AnimatableBody2D</IC>.
            </p>
        </section>

        <section>
            <h2>AnimatableBody2D</h2>
            <p>
                Le node <IC>AnimatableBody2D</IC> est un node qui agit comme un <IC>StaticBody2D</IC>, mais que l'on peut 
                animer. Il est donc possible de lui appliquer des transformations géométriques, comme la translation pour le 
                déplacer, mais aussi la rotation et l'homothétie. 
            </p>
            <p>
                À la base, ce node s'utilise de la même façon qu'un <IC>StaticBody2D</IC>. Vous devez donc lui ajouter 
                un <IC>CollisionShape2D</IC> ou un <IC>CollisionPolygon2D</IC> pour définir sa forme de collision. Il est 
                aussi important de lui ajouter un visuel, comme un <IC>Sprite2D</IC>.
            </p>
            <Image src={animatableBody2D} alt="Node AnimatableBody2D avec un CollisionShape2D et un Sprite2D" />
            <p>
                Le <IC>AnimatableBody2D</IC> possède quelques propriétés supplémentaires que le <IC>StaticBody2D</IC>. Nous ne 
                les couvrerons toutefois pas dans ce cours. Si vous êtes intéressé, vous pouvez faire vos propres recherches 
                sur le sujet.
            </p>
            <p>
                Le côté intéressant de ce node est que nous pourrons utiliser d'autres nodes pour l'animer. Par exemple, nous
                pourrons utiliser le <IC>AnimationPlayer</IC>.
            </p>
        </section>

        <section>
            <h2>Animer avec un AnimationPlayer</h2>
            <p>
                Nous avons déjà vu le node <IC>AnimationPlayer</IC> dans un module précédent. Nous ne le couvrirons donc pas
                en détail ici. Nous allons simplement l'utiliser pour animer notre <IC>AnimatableBody2D</IC>. Pour ce faire, 
                suivez les étapes suivantes:
            </p>
            <ol>
                <li>
                    Ajouter un <IC>AnimationPlayer</IC> sous le node <IC>AnimatableBody2D</IC>.
                </li>
                <li>
                    Dans le panneau d'Animation en bas de l'éditeur, créer une nouvelle animation sur une ou plusieurs 
                    propriétés du <IC>AnimatableBody2D</IC>, comme sa position, par exemple. 
                </li>
                <li>
                    Dans le panneau d'Animation, configurer l'animation selon vos besoins. Vous pouvez, par exemple, faire 
                    en sorte que l'animation se répète à l'infini, qu'elle démarre automatiquement, etc.
                </li>
            </ol>
            <p>
                Une fois l'animation configurée, vous pouvez lancer le jeu et voir que votre <IC>AnimatableBody2D</IC> se
                déplace selon l'animation que vous avez créée. Le joueur pourra marcher sur la plateforme et sera déplacé avec
                elle. Aucun script n'est nécessaire pour que cela fonctionne!
            </p>
        </section>
    </>;
}
