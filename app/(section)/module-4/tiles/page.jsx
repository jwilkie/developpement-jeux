import Image from 'next/image'
import IC from '@/components/InlineCode'
import Gallery from '@/components/Gallery'

import tileset from '@/public/img/tileset.png'
import tilemap from '@/public/img/tilemap.png'
import tilesetMario from '@/public/img/tileset-super-mario-world.jpg'
import tilesetZelda from '@/public/img/tileset-zelda-seasons.jpg'
import tilesetChrono from '@/public/img/tileset-chrono-trigger.jpg'
import tilesetCeleste from '@/public/img/tileset-celeste.jpg'
import tilesetFF from '@/public/img/tileset-final-fantasy-tactic.png'
import tilesetUndertale from '@/public/img/tileset-undertale.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Carte et palette de tuiles",
    description: "Explication du fonctionnement des palettes de tuiles pour créer des cartes de tuiles dans un jeu.",
    keywords: ["tile", "tileset", "tilemap"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Environnement de jeu</h2>
            <p>
                Créer un environnement de jeu peut être une tâche complexe. La création d'un environnement nécessite souvent 
                la création de nombreux éléments graphiques et leur assemblage pour former un monde intéressant et cohérant. 
                Dans les jeux vidéo à 2 dimensions, il est courant d'utiliser des palettes de tuiles, aussi 
                appelées <em>tilesets</em>. Ces palettes de tuiles sont des images qui contiennent plusieurs tuiles qui peuvent 
                être répété dans un environnement de jeu. Un tileset pourrait ressembler à ceci:
            </p>
            <Image src={tileset} alt="Un exemple de palette de tuile" />
            <p>
                En répétant les tuiles de la palette dans une carte de tuiles, aussi appelée <em>tilemap</em>, on peut créer un 
                environnement de jeu complexe. Avec la palette de tuiles précédante, on pourrait créer une carte de tuiles comme
                ceci:
            </p>
            <Image src={tilemap} alt="Un exemple de carte de tuile faite avec une palette de tuile" />
            <p>
                Dans ce module, nous verrons comment utiliser des palettes de tuiles pour créer des environnements de jeu dans 
                Godot en utilisant les assets de TileSet et le node <IC>TileMapLayer</IC>.
            </p>
        </section>

        <section>
            <h2>Jeux utilisant des tilesets</h2>
            <p>
                De nombreux jeux vidéo en 2 dimensions utilisent des palettes de tuiles pour créer leurs environnements. 
                Certains d'entre eux sont très connus. Voici quelques exemples de jeux utilisant des palettes de tuiles:
            </p>
            <Gallery pictures={[
                { image: tilesetMario, caption: "Super Mario World (1990) sur Super Nintendo utilisant plusieurs couches de tuiles" },
                { image: tilesetChrono, caption: "Chrono Trigger (1995) sur Super Nintendo" },
                { image: tilesetZelda, caption: "The Legend of Zelda: Oracle of Seasons (2001) sur Gameboy" },
                { image: tilesetFF, caption: "Final Fantasy Tactics A2: Grimoire of the Rift (2007) sur Nintendo DS utilisant des tuiles isométriques" },
                { image: tilesetUndertale, caption: "Undertale (2015) sur PC utilisant de très petites tuiles" },
                { image: tilesetCeleste, caption: "Celeste (2018) sur PC" }
            ]} />
        </section>

        <section>
            <h2>Variations</h2>
            <p>
                Il existe de nombreuses variations de palettes de tuiles. Voici une courte liste de variations que l'on peut 
                rencontrer:
            </p>
            <ul>
                <li>
                    <strong>Tilesets isométriques:</strong> Les tuiles sont dessinées en perspective isométrique, donc en forme
                    de losange ou d'hexagone. Ces tuiles sont souvent utilisées pour créer des jeux de stratégie ou de simulation.
                </li>
                <li>
                    <strong>Tilesets animés:</strong> Les tuiles sont animées, donc elles changent d'apparence au fil du temps.
                    Ces tuiles sont souvent utilisées pour créer des effets visuels, comme de l'eau ou du feu.
                </li>
                <li>
                    <strong>Tilesets pour plusieurs couches:</strong> Les tuiles peuvent être mises sur plusieurs couches, donc 
                    elles peuvent être superposées pour créer des effets de profondeur. Ces tuiles sont souvent utilisées pour
                    créer des environnements plus complexes, comme des forêts ou des villes.
                </li>
                <li>
                    <strong>Tilesets en 3D:</strong> Les tuiles sont essentiellement des modèles 3D, donc elles peuvent être 
                    utilisées pour créer des environnements en 3D ou pour simuler un jeu 2D en 3D. 
                </li>
            </ul>
        </section>
    </>;
}
