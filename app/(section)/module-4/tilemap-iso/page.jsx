import Image from 'next/image';
import IC from '@/components/InlineCode'
import Gallery from '@/components/Gallery';

import rtc2 from '@/public/img/iso-roller-coaster-tycoon-2.jpg'
import aoe2 from '@/public/img/iso-age-of-empire-ii.webp'
import bg1 from '@/public/img/iso-baldurs-gate.webp'
import sc1 from '@/public/img/iso-sim-city.jpg'
import tileset from '@/public/img/iso-tileset-forest.png'
import diamond from '@/public/img/iso-tileset-diamond.png'
import hexagon from '@/public/img/iso-tileset-hexagon.png'
import tilemap from '@/public/img/iso-tilemap.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Carte de tuiles isométrique",
    description: "Démonstration de la création de carte de tuiles isométrique à partir de palettes de tuiles en losange ou hexagonale dans Godot.",
    keywords: ["tile", "tileset", "tilemap", "isométrique", "losange", "hexagone", "carte", "layer", "couche", "TileMapLayer"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Vue isométrique</h2>
            <p>
                Une vue isométrique est une vue en perspective qui permet de représenter un environnement en 3 dimensions sur 
                une surface en 2 dimensions. Pour ce faire, on changera le point de vue de la caméra pour qu'elle soit en
                diagonale par rapport à l'environnement, ce qui donnera l'impression que l'environnement est en 3 dimensions et 
                où chaque dimension a la même importance. C'est d'ailleurs pour cette raison que l'on parle de vue isométrique, 
                car le terme isométrique signifie que tous les espaces sont égaux.  
            </p>
            <p>
                Voici quelques jeux qui utilisent une vue isométrique:
            </p>
            <Gallery pictures={[
                { image: rtc2, caption: "Roller Coaster Tycoon 2" },
                { image: aoe2, caption: "Age of Empire II" },
                { image: bg1, caption: "Baldur's Gate" },
                { image: sc1, caption: "Sim City" }
            ]} />
            <p>
                Les jeux isométriques sont souvent associés à des palettes de tuiles ou des carte de tuiles isométriques pour 
                bien représenter l'environnement de jeu. Les palettes de tuiles isométriques sont souvent en forme de losange 
                ou d'hexagone.
            </p>
            <p>
                Dans Godot, il est possible de créer des cartes de tuiles isométriques en utilisant le même 
                node <IC>TileMapLayer</IC> et les même ressources de TileSet que nous avons utilisé jusqu'à présent. Nous aurons 
                seulement quelques propriétés à modifier.
            </p>
        </section>

        <section>
            <h2>TileSet isométrique</h2>
            <p>
                Supposons que vous ayez une palette de tuiles isométrique. Par exemple, celle-ci, créé 
                par <a href="https://scrabling.itch.io/">scrabling</a> sur la 
                plateforme <a href="https://scrabling.itch.io/pixel-isometric-tiles">itch.io</a>.
            </p>
            <Image src={tileset} alt="Tileset isométrique de plaine et rivière" />
            <p>
                Ce genre de tuiles peuvent être représenté par des tuiles en forme de losange ou d'hexagone. Dans Godot, nous 
                devrons donc créer le TileSet de la façon suivante:
            </p>
            <ol>
                <li>
                    Créer une ressource de type TileSet comme nous l'avons vu dans les pages précédentes.
                </li>
                <li>
                    Ajouter l'image de la palette de tuiles dans le TileSet.
                </li>
                <li>
                    Dans les propriétés du TileSet, changer la propriété <IC>Tile Shape</IC> pour mettre 
                    soit <em>Isometric</em> ou <em>Hexagon</em>.
                </li>
                <li>
                    Dans les propriétés du TileSet, changer la propriété <IC>Tile Layout</IC>. Vous pourrez ici essayer les 
                    différentes options pour voir laquelle vous convient le mieux. En général, 
                    l'option <em>Diamond Down</em> fonctionne bien pour les tuiles isométriques.
                </li>
                <li>
                    Dans les propriétés du TileSet, modifier la propriété <IC>Tile Size</IC> pour qu'elle corresponde à la 
                    taille de vos tuiles. Vous pouvez visualiser si la taille est correcte en regardant les losanges ou les 
                    hexagones qui apparaissent sur la palette de tuiles. 
                </li>
                <li>
                    Dans le panneau de TileSet, modifier les propriétés <em>Margins</em> et <em>Separation</em> si nécessaire 
                    pour bien aligner les losanges ou les hexagones sur la palette de tuiles. 
                </li>
            </ol>
            <Gallery pictures={[
                { image: diamond, caption: "Exemple de tuile isométrique configuré en losange" },
                { image: hexagon, caption: "Exemple de tuile isométrique configuré en hexagone" }
            ]} />
            <p>
                Une fois le TileSet configuré, nous pourrons l'utiliser dans un node <IC>TileMapLayer</IC> pour créer une carte
                de tuiles isométrique.
            </p>
        </section>

        <section>
            <h2>TileMap isométrique</h2>
            <p>
                La création d'un <IC>TileMapLayer</IC> isométrique se fait de la même façon que pour 
                un <IC>TileMapLayer</IC> normal. Nous devons seulement nous assurer que le TileSet utilisé est bien configuré
                pour les tuiles isométriques. Une fois le <IC>TileMapLayer</IC> créé, nous pourrons placer les tuiles dans
                la carte de tuiles en utilisant les mêmes outils que pour un <IC>TileMapLayer</IC> normal.
            </p>
            <Image src={tilemap} alt="TileMap isométrique en construction" />
        </section>
    </>;
}
