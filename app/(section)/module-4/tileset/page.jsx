import Image from 'next/image'
import IC from '@/components/InlineCode'
import OverflowContainer from '@/components/OverflowContainer'

import physicsTileSet from '@/public/img/physics-tileset.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Palette de tuiles",
    description: "Présentation des ressources de type TileSet dans Godot et leur configuration.",
    keywords: ["tile", "tileset", "physique", "physics", "collision"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Création d'un Tileset</h2>
            <p>
                Dans Godot, les palettes de tuile sont considéré comme des <em>assets</em> ou des ressources. Un peu comme une
                image. Nous ferons donc la création d'une ressource de type TileSet directement dans le panneau de ressources 
                en bas à gauche de l'éditeur.
            </p>
            <p>
                Voici les étapes pour créer un TileSet dans Godot:
            </p>
            <ol>
                <li>
                    Faites un clic droit sur le dossier ou un sous-dossier du dossier <IC>res://</IC> dans le panneau de 
                    ressources.
                </li>
                <li>
                    Dans le menu contextuel, sélectionnez l'option <em>Create New</em> et puis l'option <em>Resource...</em>.
                </li>
                <li>
                    Dans la fenêtre de création de ressource, rechercher le type <IC>TileSet</IC> et cliquer sur le 
                    bouton <em>Create</em>.
                </li>
                <li>
                    Dans la nouvelle fenêtre, entrer le nom du fichier pour le TileSet et cliquer sur le bouton <em>Save</em>.
                    Assurez-vous de donner un nom significatif à votre TileSet pour pouvoir le retrouver facilement plus tard.
                </li>
                <li>
                    Le nouveau TileSet sera maintenant visible dans le panneau de ressources. Double-cliquer sur celui-ci pour
                    l'ouvrir dans le panneau de propriétés ainsi que dans l'éditeur de TileSet en bas de l'éditeur.
                </li>
            </ol>
        </section>

        <section>
            <h2>Configuration d'un Tileset</h2>
            <p>
                Une fois le TileSet ouvert dans l'éditeur de TileSet, nous pourrons commencer à le configurer. Les premières 
                configurations à modifier vont se retrouver dans l'inspecteur de propriétés. Voici celles auxquelles vous 
                aurez à porter attention:
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
                            <td>Tile Shape</td>
                            <td>
                                Cette propriété permet de définir la forme des tuiles dans le TileSet. Dans plusieurs jeux 
                                classique, les tuiles sont carrées, mais il est possible de créer des tuiles en forme de losange
                                ou d'hexagone pour créer des jeux isométriques.
                            </td>
                        </tr>
                        <tr>
                            <td>Tile Size</td>
                            <td>
                                Cette propriété permet de définir la taille des tuiles dans le TileSet. La taille des tuiles est
                                définie en pixels. Assurez-vous que la taille de vos tuiles correspond bien à la taille de vos 
                                images de tuiles pour que les tuiles s'affichent correctement dans votre jeu.
                            </td>
                        </tr>
                        <tr>
                            <td>Physics Layers</td>
                            <td>
                                Si vos tuiles sont destinées à être utilisées pour la physique, par exemple pour que votre 
                                personnage potentiellement être bloqué par certaines tuiles, vous devrez configurer au moins une
                                couche de physique pour votre TileSet. Vous n'avez qu'à cliquer sur le 
                                bouton <em>Add Element</em> pour ajouter une nouvelle couche de physique si c'est nécessaire.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>

            <p>
                Une fois ces propriétés de base configurées, nous pourrons commencer à ajouter des tuiles à notre TileSet. Pour
                ce faire, nous devrons suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Assurez-vous que votre image de palette de tuiles est bien ajouté dans les ressources de votre projet. 
                </li>
                <li>
                    Dans l'éditeur de TileSet en bas de l'écran, cliquez sur le petit bouton "+" pour ajouter une 
                    nouvelle source de tuile.
                </li>
                <li>
                    Choisissez le type de tuile "Atlas". Nous verrons plus tard les tuiles de type "Scène".
                </li>
                <li>
                    Naviguer dans la nouvelle fenêtre pour trouver l'image de votre palette de tuiles et cliquer sur le
                    bouton <em>Open</em>.
                </li>
                <li>
                    Une fois l'image de la palette de tuiles ajoutée, l'éditeur vous demandera si vous voulez automatiquement 
                    créer des tuiles à partir de l'image. Si vous avez bien configuré la taille de vos tuiles dans les 
                    propriétés, vous pouvez cliquer sur le bouton <em>Yes</em>.
                </li>
            </ol>
            <p>
                Si vous n'avez pas pu demander à l'éditeur de créer automatiquement les tuiles pour vous, vous pouvez toujours 
                le faire manuellement en cliquant individuellement sur chaque tuile dans l'image de la palette de tuiles qui 
                sera affiché dans l'éditeur de TileSet. 
            </p>
        </section>

        <section>
            <h2>Ajout de collision</h2>
            <p>
                Dans un TileSet, chaque tuile peut avoir sa propre forme de collision. Pour ajouter des formes de collision à 
                vos tuiles, vous devrez suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Dans l'éditeur de TileSet, naviguer vers l'onglet <em>Paint</em>.
                </li>
                <li>
                    Dans le menu déroulant <em>Paint Properties</em>, choisissez l'option <em>Physics Layer 0</em>.
                </li>
                <li>
                    Dessiner la forme de collision que vous voulez à l'aide des points dans l'éditeur. Vous pouvez ajouter des 
                    points en cliquant sur les segments de la forme de collision et glisser pour les déplacer. Vous pouvez 
                    également supprimer des points en faisant un clic droit dessus.
                    <Image src={physicsTileSet} alt="Exemple de forme de collision pour une tuile" />
                </li>
                <li>
                    Une fois la forme dessiné, vous pouvez l'appliquer aux tuiles voulues en cliquant sur celles-ci dans le 
                    panneau de droite.
                </li>
                <li>
                    Recommencer les étapes 3 et 4 pour chaque forme de collision que vous voulez ajouter à vos tuiles.
                </li>
            </ol>
            <p>
                Une fois vos tuiles paintes avec des formes de collision, ces formes seront automatiquement appliquées à vos 
                tuiles lorsque vous les placerez dans votre carte de tuiles plus tard. 
            </p>
        </section>
    </>;
}
