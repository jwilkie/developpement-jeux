import IC from '@/components/InlineCode'
import ColoredBox from '@/components/ColoredBox'
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Engin physique",
    description: "Présentation de différents nodes et éléments de l'engin physique de Godot et comment les utiliser dans un jeu à défilement latéral.",
    keywords: ["StaticBody2D", "RigidBody2D", "collision", "slide", "move"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Surfaces, murs et plateformes</h2>
            <p>
                Pour que notre personnage ne tombe pas à l'infini, nous aurons besoin de lui fournir des surfaces sur lequel il pourra atterir.
                De la même façon, nous pourront lui fournir des plateformes sur lesquels il pourra sauter ou des murs pour le limiter. Pour y 
                arriver, nous utiliserons un node qui se nomme <IC>StaticBody2D</IC>. Ce node nous permettra de créer des éléments de jeu qui 
                ne bougent pas, mais qui vont interagir avec d'autres éléments de notre jeu comme les nodes <IC>CharacterBody2D</IC> comme 
                notre personnage.
            </p>
            <p>
                La création d'un node <IC>StaticBody2D</IC> est très simple. Vous pouvez les créer de la façon suivante:
            </p>
            <ol>
                <li>
                    Dans votre scène principale, ajoutez un node <IC>StaticBody2D</IC> et renommez-le "Plancher", "Mur" ou tout autre nom
                    significatif.
                </li>
                <li>
                    Ce node aura besoin d'un visuel pour que le joueur puisse le voir. Ajoutez donc un 
                    node <IC>Sprite2D</IC> ou <IC>Polygon2D</IC> sous le node <IC>StaticBody2D</IC> qui représentera le visuel de votre élément 
                    de jeu. N'oubliez pas de définir les propriétés de ce nouveau node, comme la texture ou la couleur pour qu'il soit bien 
                    visible.
                </li>
                <li>
                    Pour que notre personnage puisse entrer en collision avec notre élément de jeu, nous devons lui ajouter une forme de
                    collision. Pour ce faire, ajoutez un node <IC>CollisionShape2D</IC> ou <IC>CollisionPolygon2D</IC> sous le 
                    node <IC>StaticBody2D</IC>. Définissez ensuite la forme de collision à l'aide des propriétés nécessaires comme vu dans les
                    modules précédents.
                </li>
                <li>
                    Cliquer sur le node <IC>StaticBody2D</IC> et sélectionner l'outil de groupage pour faciliter la manipulation du node et de
                    ses enfants dans l'éditeur.
                </li>
                <li>
                    Déplacer le node <IC>StaticBody2D</IC> à l'endroit désiré dans votre scène. Vous pouvez le déplacer, le faire pivoter ou le
                    redimensionner à votre guise.
                </li>
            </ol>
            <p>
                Après avoir créé un ou plusieurs nodes <IC>StaticBody2D</IC>, vous pouvez démarrer le jeu et constater que votre personnage va
                entrer en collision avec ces éléments. Il pourra potentiellement même grimper des surfaces en diagonale ou sauter sur des 
                plateformes. Vous pouvez créer autant de nodes <IC>StaticBody2D</IC> que vous le désirez pour créer votre niveau de jeu.
            </p>
            <ColoredBox title="À noter: ">
                Le nom du node <IC>StaticBody2D</IC> indique bien que les éléments créées ne bougeront pas. Ils sont statique. Si vous voulez 
                créer des éléments qui bougent, mais qui ne sont pas affectés par la physique, comme des plateformes mobiles, vous voudrez 
                plutôt utiliser le node <IC>AnimatableBody2D</IC>. Nous verrons comment l'utiliser plus tard dans un autre module.
            </ColoredBox>
        </section>

        <section>
            <h2>Autres objets physiques</h2>
            <p>
                Il existe d'autres nodes qui font partie de l'engin physique de Godot. L'un d'entre eux, le <IC>RigidBody2D</IC>, est un node 
                qui permet de créer des éléments de jeu qui sont affectés par la physique, mais qui ne sont pas contrôlés par le joueur. Par 
                exemple, vous pourriez créer des ballons que vous pouvez frapper et faire rebondir sur le sol ou des murs, des caisses que vous
                pouvez pousser ou des projectiles que vous pouvez lancer. 
            </p>
            <p>
                Voici comment utiliser le node <IC>RigidBody2D</IC> pour créer un élément de jeu affecté par la physique:
            </p>
            <ol>
                <li>
                    Dans votre scène principale, ajoutez un node <IC>RigidBody2D</IC> et renommez-le par un nom significatif.
                </li>
                <li>
                    Ce node aura besoin d'un visuel pour que le joueur puisse le voir. Ajoutez donc un 
                    node <IC>Sprite2D</IC> ou <IC>Polygon2D</IC> sous le node <IC>RigidBody2D</IC> qui représentera le visuel de votre élément 
                    de jeu. N'oubliez pas de définir les propriétés de ce nouveau node, comme la texture ou la couleur pour qu'il soit bien
                    visible.
                </li>
                <li>
                    Pour que notre personnage puisse entrer en collision avec notre nouvel élément de jeu, nous devons lui ajouter une forme de
                    collision. Pour ce faire, ajoutez un node <IC>CollisionShape2D</IC> ou <IC>CollisionPolygon2D</IC> sous le 
                    node <IC>RigidBody2D</IC>. Définissez ensuite la forme de collision à l'aide des propriétés nécessaires comme vu dans les
                    modules précédents.
                </li>
                <li>
                    Cliquer sur le node <IC>RigidBody2D</IC> et sélectionner l'outil de groupage pour faciliter la manipulation du node et de
                    ses enfants dans l'éditeur.
                </li>
                <li>
                    Modifier les propriétés du node <IC>RigidBody2D</IC> pour ajuster son comportement dans le jeu.
                </li>
            </ol>
            <p>
                Le node <IC>RigidBody2D</IC> possède plusieurs propriétés qui vont vous permettent d'ajuster son comportement exactement comme 
                vous le désirez dans le jeu. Voici une liste non exhaustive de certaines propriétés que vous pourriez vouloir ajuster:
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
                            <td>Mass</td>
                            <td>
                                La masse (le poids) de l'élément. Plus la masse est grande, plus il sera difficile de le pousser ou de le faire
                                bouger. 
                            </td>
                        </tr>
                        <tr>
                            <td>Friction</td>
                            <td>
                                La friction de l'élément. Plus la friction est grande, plus il sera difficile de le faire glisser sur une 
                                surface. Si un élément est rond avec une friction élevée, l'élément va rouler plutôt que glisser sur une surface.
                            </td>
                        </tr>
                        <tr>
                            <td>Bounce</td>
                            <td>
                                Le rebond de l'élément. Plus le rebond est grand, plus l'élément va rebondir lorsqu'il entre en collision avec 
                                une surface ou un autre élément. Si le rebond est à 0, l'élément ne rebondira pas du tout. Si le rebond est à 1,
                                l'élément rebondira presque à la même hauteur que celle où il est tombé. L'engin implémente par défaut une perte
                                d'énergie lors du rebond, donc à moins de modifier d'autres propriétés, l'élément ne rebondira jamais à la même
                                hauteur que celle où il est tombé.
                            </td>
                        </tr>
                        <tr>
                            <td>Gravity Scale</td>
                            <td>
                                Le pourcentage de la gravité qui affecte l'élément. Si la gravité est à 1, l'élément sera affecté par la gravité
                                normalement. Si la gravité est à 0, l'élément ne sera pas affecté par la gravité. Vous pouvez utiliser cette
                                propriété pour créer des éléments plus flottants ou plus tombant plus rapidement. 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Il y a de nombreuses autres propriétés, certaines pour ajouter des forces ou des contraintes à l'élément, d'autres pour ajuster 
                la façon dont il entre en collision avec d'autres éléments. N'hésitez pas à les explorer et à les essayer. Vous pouvez consulter 
                la documentation officielle de Godot pour en savoir plus si vous en avez besoin.
            </p>
            <p>
                <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_rigidbody2d.html">
                    Documentation - RigidBody2D
                </a>
            </p>
        </section>
    </>;
}
