import Image from 'next/image';
import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

import spritesheet from '@/public/img/vaisseau_spritesheet.png';
import spritesheetSquare from '@/public/img/vaisseau_spritesheet_square.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Spritesheet",
    description: "Démonstration des animations par Spritesheet pour animer des éléments d'un jeu 2D.",
    keywords: ["flipbook", "livre animé", "folioscope", "Sprite2D", "AnimationPlayer", "texture"],
    group: "notes"
}

const play = 
`# Recherche du node AnimationPlayer
@onready var animation_player := $AnimationPlayer

func _process(delta: float) -> void:
    # ...

    # Changement de l'animation à jouer en fonction du
    # mouvement du personnage
    if direction.is_zero_approx():
        animation_player.play("RESET")
    else:
        animation_player.play("marche")`;

export default function Page() {
    return <>
        <section>
            <h2>Folioscope</h2>
            <p>
                Une des techniques les plus utilisées pour animer des éléments en 2D est l'utilisation de <em>spritesheets</em>. Cette 
                technique fonctionne de façon similaire à un folioscope, ces petits livrets animés que l'on peut faire défiler rapidement 
                avec notre pouce pour créer une illusion de mouvement. Comme un folioscope qui contient une séquence d'image qui, une à
                la suite de l'autre et à une vitesse rapide, crée une animation, un <em>spritesheet</em> est une texture qui contient 
                plusieurs images, que l'on peut faire défiler rapidement pour créer une animation.
            </p>
            <p>
                Cette technique d'animation est très populaire pour les jeux 2D, car elle est relativement simple à mettre en place et ne
                nécessite pas de calculs complexes pour animer les éléments du jeu. Elle est basé sur les fondements de l'animation
                traditionnelle, où l'on dessine chaque image de l'animation à la main, ce qui était d'ailleurs fait dans les premiers
                films d'animation. Un spritesheet ressemble à une grille d'images, où chaque image représente une étape de l'animation. 
            </p>
            <Image src={spritesheet} alt="Exemple d'un spritesheet d'un vaisseau spatial" />
            <p>
                Le plus complexe dans l'utilisation de <em>spritesheets</em>, c'est de créer les différentes images qui composent
                l'animation. En général, ce sont les artistes qui s'occupent de cette partie. Puisque nous ne sommes pas des artistes, 
                nous allons utiliser des <em>spritesheets</em> déjà créés. Vous pouvez en trouver plusieurs gratuit sur internet au 
                travers de différentes ressources pour faire du prototypage rapide.
            </p>
            <p>
                Il est possible que les spritesheets que vous trouvez sur internet ne soient pas organisés parfaitement en grille. Dans 
                ce cas, vous devrez utiliser un logiciel d'édition d'image, tel que Paint, Photoshop ou GIMP, pour découper et réorganiser
                les différentes images de l'animation en une grille régulière. Le plus important dans la création 
                d'un <em>spritesheet</em>, c'est que les différentes images soient placé dans une grille régulière, donc toutes les images
                doivent avoir la même taille et être alignées les unes à côté des autres. C'est ce qui nous permettra de faire défiler les 
                différentes images de l'animation de façon fluide avec Godot.
            </p>
            <Image src={spritesheetSquare} alt="Exemple d'un spritesheet d'un vaisseau spatial avec une grille démontrant son organisation" />
        </section>

        <section>
            <h2>Configuration de la texture</h2>
            <p>
                Pour utiliser un <em>spritesheet</em> dans Godot, il n'y aura pas de grand changement à faire. Nous allons simplement 
                changer la texture de notre <IC>Sprite2D</IC> pour utiliser notre <em>spritesheet</em> au lieu d'une image simple. 
                Cependant, pour que Godot n'affiche pas la texture entière du <em>spritesheet</em>, mais seulement une image à la fois, 
                nous allons devoir configurer quelques propriétés de la texture. Voici les étapes à suivre pour configurer correctement 
                votre <IC>Sprite2D</IC> avec un <em>spritesheet</em>:
            </p>
            <ol>
                <li>
                    Ajouter l'image de votre <em>spritesheet</em> à votre projet Godot en la glissant-déposant dans le panneau du
                    système de fichiers.
                </li>
                <li>
                    Sélectionnez votre <IC>Sprite2D</IC> dans le panneau de scène.
                </li>
                <li>
                    Dans le panneau d'inspecteur de propriétés, trouvez la propriété "Texture". Glisser-déposer le <em>spritesheet</em> que 
                    vous avez ajouté à votre projet dans cette propriété.
                </li>
                <li>
                    Dans le même panneau d'inspecteur de propriétés, trouvez la section "<em>Hframes</em>" et "<em>Vframes</em>". 
                    Configurer cesdeux propriétés pour indiquer le nombre de colonnes et de lignes que votre <em>spritesheet</em> contient. 
                    Le "<em>Hframes</em>" correspond au nombre de colonnes, tandis que le "<em>Vframes</em>" correspond au nombre de lignes.
                </li>
                <li>
                    Pour afficher la bonne texture correctement, même s'il n'y aura pas encore d'animation, vous devrez configurer la
                    propriété "Frame". Cette propriété indique quelle image du <em>spritesheet</em> est affichée par défaut. Assurez-vous 
                    d'y mettre l'index de la bonne image.
                </li>
            </ol>
        </section>

        <section>
            <h2>Création d'animation</h2>
            <p>
                Les animations dans Godot sont généralement créées à l'aide d'un node <IC>AnimationPlayer</IC>. Ce node permet de créer des 
                animations en modifiant les propriétés d'autres nodes au fil du temps directement dans l'interface graphique. Il est très 
                pratique pour préprogrammer des animations que nous pourrons ensuite déclencher dans notre code. Dans notre cas, nous
                l'utiliserons pour changer la propriété "Frame" de notre <IC>Sprite2D</IC> au fil du temps, ce qui nous permettra de faire
                défiler les différentes images de notre <em>spritesheet</em> pour créer une animation. Voici les étapes à suivre pour créer
                une animation avec un <em>spritesheet</em> dans Godot:
            </p>
            <ol>
                <li>
                    Créer un node <IC>AnimationPlayer</IC> au même niveau que votre <IC>Sprite2D</IC> dans la hiérarchie de votre scène.
                </li>
                <li>
                    Cliquer sur le node <IC>AnimationPlayer</IC> dans le panneau de scène pour le sélectionner. Cela devrait ouvrir le 
                    panneau d'animation en bas de l'écran.
                </li>
                <li>
                    Dans le panneau d'animation, cliquer sur le bouton "Animation" puis sélectionner l'option "<em>New...</em>".
                </li>
                <li>
                    Donner un nom à votre animation. Par exemple, vous pouvez l'appeler "marche" pour une animation de marche. Si vous 
                    voulez créer l'animation par défaut qui sera jouée automatiquement, vous devez l'appeler "<em>RESET</em>".
                </li>
                <li>
                    À la droite du nom de votre animation, un bouton "<em>Autoplay on Load</em>" permet de définir si l'animation doit 
                    être jouée automatiquement au chargement de la scène.
                </li>
                <li>
                    À la droite du panneau d'animation, un champ "<em>Animation Length</em>" permet de définir la durée de l'animation.
                    Vous pouvez aussi cliquer sur le bouton "<em>Loop</em>" juste à côté pour faire en sorte que l'animation se répète
                    en boucle.
                </li>
                <li>
                    Cliquer sur le bouton "+" dans le haut à gauche du panneau d'animation pour ajouter une nouvelle piste d'animation et
                    choisir l'option "<em>Property Track</em>".
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, sélectionner votre <IC>Sprite2D</IC> dans la hiérarchie de votre scène, puis cliquer
                    sur "OK".
                </li>
                <li>
                    Dans la nouvelle fenêtre qui s'ouvre, trouver la propriété "Frame" de votre <IC>Sprite2D</IC> et cliquer sur "Open".
                    Cela ajoutera une nouvelle piste d'animation pour la propriété "Frame" de votre <IC>Sprite2D</IC>. Nous pouvons donc
                    modifier cette propriété au fil du temps pour faire défiler les différentes images de notre <em>spritesheet</em>.
                </li>
                <li>
                    Faite un clic droit sur la piste d'animation que vous venez de créer et sélectionner l'option "<em>Insert Key</em>" 
                    pour ajouter une nouvelle clé d'animation à la piste.
                </li>
                <li>
                    Cliquer sur le symbole ou l'image de la clé d'animation. Dans le panneau de propriétés, assurez-vous que la propriété 
                    "Value" est régler sur l'index de la première image de votre animation et que son "Time" est régler sur 0 seconde.
                </li>
                <li>
                    Répéter les 2 étapes précédentes pour ajouter une clé d'animation à la fin de votre animation, en réglant la propriété
                    "Value" sur l'index de la dernière image de votre animation et la propriété "Time" sur la durée totale de votre
                    animation.
                </li>
                <li>
                    À la droite de la piste d'animation, cliquer sur le bouton "<em>Update Mode</em>" et assurez-vous qu'il est régler 
                    sur "<em>Continuous</em>".
                </li>
            </ol>
            <p>
                Si l'animation est configuré pour être jouée automatiquement au chargement de la scène, vous devriez déjà voir 
                votre élément de jeu s'animer losrque vous lancez votre jeu. Autrement, nous devrons déclencher l'animation dans notre
                code pour qu'elle soit jouée. 
            </p>
            <ColoredBox title="À noter:">
                Il est possible d'avoir des animations très simples, qui ne contiennent qu'une seule image. Par exemple, vous pouvez 
                avoir une animation "RESET" qui ne contient qu'une seule image, qui est l'image par défaut de votre <IC>Sprite2D</IC>.
                Vous pourriez aussi avoir une animation "gauche" et "droite" qui eux aussi ne contiennent qu'une seule image. Pour 
                simplement changer l'image affichée par votre <IC>Sprite2D</IC>. Dans ce genre de cas, vous n'avez qu'à ajouter une 
                seule clé d'animation à votre piste d'animation. Assurez-vous toutefois que la valeur de cette clé d'animation 
                corresponde bien à l'index de l'image que vous voulez afficher.
            </ColoredBox>
            <ColoredBox title="À noter:">
                Il est possible de réutiliser certaines animations dans différents contextes. Par exemple, si l'animation de marche de
                votre personnage le démontre marchant vers la droite, vous pouvez réutiliser cette même animation pour le faire marcher 
                vers la gauche. Pour ce faire, nous avons simplement à rajouter une piste d'animation pour la 
                propriété <IC>flip_h</IC> et à mettre une clé d'animation à <IC>true</IC> au début de l'animation.
            </ColoredBox>
        </section>

        <section>
            <h2>Jouer une animation</h2>
            <p>
                Pour jouer une animation que nous avons créé avec un <IC>AnimationPlayer</IC>, nous allons devoir utiliser la 
                méthode <IC>play()</IC> en passant le nom de l'animation en paramètre. Cela pourrait ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{play}</CodeBlock>
            <p>
                Dans le code ci-dessus, on décide de l'animation à jouer en fonction du mouvement du personnage. Si le personnage ne 
                bouge pas, on joue l'animation "RESET", qui est l'animation par défaut. Sinon, on joue l'animation "marche".
            </p>
            <ColoredBox title="Attention:">
                Assurez-vous de bien gérer les animations de votre jeu. Sur un même élément de jeu, vous ne devriez pas jouer plusieurs
                animations en même temps. Si cela arrive, seule la dernière animation jouée sera prise en compte. Ne vous mêlez donc pas 
                trop dans vos conditions!
            </ColoredBox>
        </section>
    </>;
}
