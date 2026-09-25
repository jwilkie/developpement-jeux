import Image from 'next/image'
import IC from '@/components/InlineCode'

import marioBlocks from '@/public/img/block-tile.jpg'
import CodeBlock from '@/components/CodeBlock';
import Gallery from '@/components/Gallery';

import coordonneesTileMap from '@/public/img/coordonnee-tilemap.png'
import coordonneesTile from '@/public/img/coordonnee-tile.png'
import indexTileSet from '@/public/img/index-tileset.png'

const eraseCell = 
`func _on_area_2d_body_entered(body: Node2D) -> void:
	# On vérifie que c'est bien le joueur qui entre 
	# dans le piège
	if body == $"/root/Main/Character":
		# Coordonnées des cellules à supprimer
		erase_cell(Vector2(11, 15))
		erase_cell(Vector2(12, 15))
		erase_cell(Vector2(13, 15))
		
		# On supprime le Area2D du piège une fois 
		# déclenché
		$Trap.queue_free()`;

const setCell =
`set_cell(Vector2(60, -14), 0, Vector2(7, 2))`;

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Tuile et carte complexe",
    description: "Présentation de tuile complexe ayant des comportements programmables que l'on peut ajouter aux palettes de tuiles.",
    keywords: ["tile", "tileset", "scene"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Tuile scène</h2>
            <p>
                Godot nous offre beaucoup plus de possibilités que simplement utiliser des tuiles statiques dans nos TileMap. 
                Nous pouvons, en effet, créer des tuiles qui vont avoir plus d'intéraction avec le joueur que de simplement 
                avoir des collisions avec celui-ci. On peut penser, entres autres à des tuiles comme les blocs ou les briques
                dans le jeu Super Mario Bros, ou encore des tuiles qui vont déclencher des événements lorsqu'on les touche. 
            </p>
            <Image src={marioBlocks} alt="Tuiles de blocs ou de briques dans Super Mario Bros" />
            <p>
                Pour y arriver, c'est très simple. Il nous suffit de programmer une scène qui va représenter notre tuile. De 
                préférence, le visuel de cette scène devrait avoir la même taille que les tuiles de notre palette de tuiles. 
                Vous pouvez ajouter tous les comportements nécessaire à cette scène pour qu'elle se comporte comme vous le 
                souhaitez. Ensuite, il ne nous restera qu'à ajouter cette scène dans notre palette de tuiles. 
            </p>
            <p>
                Voici comment faire:
            </p>
            <ol>
                <li>
                    Dans le panneau de TileSet, cliquer sur le petit bouton "+" dans le bas à gauche.
                </li>
                <li>
                    Choisissez l'option <em>Scenes Collection</em>.
                </li>
                <li>
                    Dans le bas, au milieu du panneau de TileSet, un autre bouton "+" est apparu. Cliquer sur celui-ci.
                </li>
                <li>
                    Sélectionner la scène que vous voulez ajouter à votre palette de tuiles et cliquer sur le bouton <em>Open</em>.
                </li>
            </ol>
            <p>
                Une fois la scène ajoutée à votre palette de tuiles, vous pourrez l'utiliser dans 
                votre <IC>TileMapLayer</IC> comme n'importe quelle autre tuile. Vous pourrez donc placer votre tuile dans la 
                carte de tuiles et elle se comportera comme vous l'avez programmé dans sa scène.
            </p>
        </section>

        <section>
            <h2>Programmer un TileMapLayer</h2>
            <p>
                Il est possible de programmer un <IC>TileMapLayer</IC>. Par exemple, nous pourrions vouloir faire disparaître 
                certaines lorsque certains événements se produisent dans le jeu. Nous pourrions aussi vouloir ajouter de 
                nouvelles tuiles ou encore modifier certaines tuiles selon certaines conditions. Pour ce faire, il nous suffit
                d'ajouter un script à notre <IC>TileMapLayer</IC> et d'utiliser les fonctions de l'API de Godot pour modifier 
                le contenu de notre carte de tuiles lorsque voulu.
            </p>

            <h3>Effacer des tuiles</h3>
            <p>
                Un exemple pourrait être un piège qui se déclenche si le joueur se déplace dans une certaine zone, supprimant 
                le sol sous les pieds du joueur. Nous pourrions y arriver de cette façon:
            </p>
            <ol>
                <li>
                    Ajouter un <IC>Area2D</IC> dans le <IC>TileMapLayer</IC> et lui ajouter un <IC>CollisionShape2D</IC> pour 
                    définir la zone de détection du piège.
                </li>
                <li>
                    Ajouter un script à notre <IC>TileMapLayer</IC>.
                </li>
                <li>
                    Connecter le signal <IC>body_entered</IC> de l'<IC>Area2D</IC> au script du <IC>TileMapLayer</IC>.
                </li>
                <li>
                    Dans la fonction qui est appelée lorsque le signal <IC>body_entered</IC> est émis, nous utiliserons la 
                    fonction <IC>set_cell</IC> pour supprimer les tuiles dans la zone du piège.
                </li>
            </ol>
            <p>
                Le code pourrait ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{eraseCell}</CodeBlock>
            <p>
                Ici, nous utilisons la fonction <IC>erase_cell()</IC> pour supprimer une tuile à une coordonnée spécifique. 
                Cette fonction prends un <IC>Vector2</IC> comme paramètre qui représente la coordonnée de la cellule à 
                supprimer. 
            </p>

            <h3>Ajouter ou modifier des tuiles</h3>
            <p>
                Si vous voulez plutôt modifier ou ajouter des tuiles, vous pourrez utiliser à la place la 
                fonction <IC>set_cell()</IC>.
            </p>
            <CodeBlock language="gdscript">{setCell}</CodeBlock>
            <p>
                Cette fonction prends trois paramètres:
            </p>
            <ul>
                <li>
                    Le premier paramètre est un <IC>Vector2</IC> qui représente la coordonnée de la cellule à modifier ou à
                    ajouter.
                </li>
                <li>
                    Le deuxième paramètre est un entier qui représente l'index de la palette de tuiles dans laquelle se trouve 
                    la tuile que vous voulez ajouter. En général, ce sera 0, mais si votre TileSet contient plusieurs images 
                    de tuiles, il faudra spécifier l'index de l'image de tuiles que vous voulez utiliser.
                </li>
                <li>
                    Le troisième paramètre est un <IC>Vector2</IC> qui représente la coordonnée de la tuile dans l'image de
                    tuiles que vous voulez ajouter.
                </li>
            </ul>

            <h3>Trouver l'information nécessaire</h3>
            <p>
                Pour trouver l'information nécessaire pour utiliser ces fonctions, comme les coordonnées des cellules à modifier,
                les index de la palette de tuiles ou encore les coordonnées des tuiles dans l'image de tuiles, vous pouvez 
                utiliser l'éditeur de <IC>TileMapLayer</IC> ou l'éditeur de TileSet.
            </p>
            <p>
                Voici où vous pouvez trouver cette information:
            </p>
            <Gallery pictures={[
                { image: coordonneesTileMap, caption: "On peut trouver les coordonnées des cellules dans l'éditeur si l'on sélectionne le node TileMapLayer et que l'on survole les cellules avec notre souris." },
                { image: indexTileSet, caption: "On peut trouver l'index de la palette de tuiles dans le panneau de TileSet en cliquant sur l'image du TileSet et en allant dans l'onglet Setup." },
                { image: coordonneesTile, caption: "On peut trouver les coordonnées des tuiles dans le panneau de TileSet, en allant dans l'onglet Select et en cliquant sur la tuile souhaitée." }
            ]} />
        </section>
    </>;
}
