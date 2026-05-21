import IC from '@/components/InlineCode'
import ColoredBox from '@/components/ColoredBox'
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Collisions par zone",
    description: "Démonstration de l'utilisation des Area2D du moteur Godot pour détecter les collisions entres de multiples éléments d'un jeu vidéo.",
    keywords: ["area2d", "signal", "area_entered", "CollisionPolygon2D", "CollisionShape2D"],
    group: "notes"
}

const signalArea = 
`func _on_area_entered(area: Area2D) -> void:
    print(area.position.x)`;

const signalMonitoring = 
`func _on_area_entered(area: Area2D) -> void:
    set_deferred("monitoring", false)
    
    # ... 
    
# Dans une autre fonction
set_deferred("monitoring", true)`;

export default function Page() {
    return <>
        <section>
            <h2>Gestions des collisions</h2>
            <p>
                Lorsque nous avons besoin de gérer des collisions entre de multiples éléments d'un jeu vidéo, il peut rapidement devenir
                compliqué de vérifier les collisions entre tous les éléments du jeu, surtout si ceux-ci utilisent des règles de détection
                différentes ou s'il y a des détections conditionnelles. Heureusement, Godot nous offre un moteur de physique qui nous permet
                de gérer facilement les collisions entre les éléments du jeu. 
            </p>
            <p>
                Le but de cette page est de vous familiariser avec la base de la détection de collisions avec l'engin de physique de Godot.
                Nous n'irons pas dans les détails de l'engin de physique, ni dans les différentes techniques avancées de détection de 
                collisions. Nous allons voir une partie de tout ça dans les prochains modules. Pour l'instant, nous nous concentrerons sur 
                l'utilisation des <IC>Area2D</IC>.
            </p>
        </section>

        <section>
            <h2>Area2D</h2>
            <p>
                Dans Godot, un <IC>Area2D</IC> est un type de node spécialement conçu pour la détection de collisions. Il sert à déclarer
                un élément du jeu qui peut détecter les collisions avec d'autres éléments. Pour créer un <IC>Area2D</IC>, il suffit de créer
                un node de type <IC>Area2D</IC> dans la scène, similairement à l'ajout de nodes 
                comme <IC>Sprite2D</IC> ou <IC>Polygon2D</IC> que nous avons déjà vus.
            </p>
            <p>
                Lorsque nous créons un <IC>Area2D</IC>, vous verrez un petit symbole d'avertissement (⚠️) dans le panneau de scene à côté 
                de son nom. C'est parce que le <IC>Area2D</IC> ne possède pas de zone de collision par défaut. Nous devons don lui en 
                ajouter une. Pour y arriver, il faut ajouter un sous-node au <IC>Area2D</IC> qui définit la forme de sa zone de collision. 
                Il existe différents types de zone de collision qui seront utile pour des situations différentes:
            </p>
            <dl>
                <dt><IC>CollisionShape2D</IC></dt>
                <dd>
                    Ce node nous permet de définir une zone de collision à partir d'une forme géométrique prédéfinie, comme un cercle, un
                    rectangle ou une capsule. C'est très pratique pour les éléments du jeu qui ont des formes simples. 
                </dd>

                <dt><IC>CollisionPolygon2D</IC></dt>
                <dd>
                    Ce node nous permet de définir une zone de collision à partir d'un polygone personnalisé. C'est très pratique pour les
                    éléments du jeu qui ont des formes plus complexes ou qui nécessitent une zone de collision plus précise.
                </dd>
            </dl>
            <p>
                Pour ajouter un sous-node à un node existant, vous pouvez faire un clic droit dessus dans le panneau de scène et cliquer 
                sur l'option "<em>Add Child Node...</em>". Une fois le node ajouté, le symbole d'avertissement à côté du Area2D devrait 
                disparaître.
            </p>
            <ColoredBox title="Attention: ">
                Assurez-vous de bien ajouter le node de zone de collision comme sous-node au <IC>Area2D</IC>. Si vous l'ajoutez ailleurs,
                la zone de collision ne sera pas bien connecté au <IC>Area2D</IC> et la détection de collision ne fonctionnera pas.
            </ColoredBox>
            <ColoredBox title="À noter: ">
                En général, nous utiliserons le <IC>Area2D</IC> comme node principal d'un élément du jeu auquel nous voulons ajouter une
                détection de collision. Par la suite, nous pourrons lui ajouter un sous-node pour définir son visuel, comme 
                un <IC>Sprite2D</IC> ou un <IC>Polygon2D</IC>.
            </ColoredBox>
        </section>

        <section>
            <h2>Zone de collision</h2>
            <p>
                Lorsque nous créons une zone de collision avec soit un <IC>CollisionShape2D</IC> ou un <IC>CollisionPolygon2D</IC>, nous
                verrons un nouveau symbole d'avertissement (⚠️) apparaître dans le panneau de scène. Cette fois-ci, c'est pour nous avertir
                que nous avons créé une zone de collision, mais n'avons pas spécifié sa forme. Pour régler le problème, nous devrons 
                spécifier les données de la forme de la zone de collision dans le panneau de propriété à droite de l'écran. Pour ajouter
                la forme, suivez les étapes suivantes:
            </p>
            <ol>
                <li>
                    Sélectionner la zone de collision, soit le <IC>CollisionShape2D</IC> ou le <IC>CollisionPolygon2D</IC> dépendant de 
                    celui que vous avez ajouté.
                </li>
                <li>
                    Allez dans le panneau de propriété à la droite de l'interface de Godot. La propriété à modifier ici est différente 
                    dépendant du type de node que vous avez choisi.
                </li>
                <li>
                    Pour le <IC>CollisionShape2D</IC>:
                    <ol>
                        <li>
                            Cliquer sur la propriété "<em>Shape</em>" et définir sa forme, généralement un rectangle, un cercle ou une 
                            capsule. Éviter les polygones puisqu'ils pourront être défini avec le <IC>CollisionPolygon2D</IC> à la place.
                        </li>
                        <li>
                            Une fois la forme choisi, modifiez les propriétés de la forme dans le panneau de propriété. Pour les cercles, 
                            vous devrez modifier le <em>radius</em>, pour les capsules, le <em>radius</em> et le <em>height</em> et 
                            finalement, pour le rectangle, le <em>size</em>.
                        </li>
                    </ol>
                </li>
                <li>
                    Pour le <IC>CollisionPolygon2D</IC>:
                    <ol>
                        <li>
                            Cliquer sur la propriété "<em>Polygon</em>" pour définir le tableau des points du polygone de collision.
                        </li>
                        <li>
                            Cliquer sur le bouton "<em>Add Element</em>" pour ajouter autant de point que nécessaire pour faire la forme de
                            votre polygone.
                        </li>
                        <li>
                            Modifier les valeurs en x et en y de chaque point pour former votre polygone.
                        </li>
                        <li>
                            Il est important de noter que le dernier point du polygone se connecte automatiquement au premier point.
                        </li>
                    </ol>
                </li>
            </ol>
            <p>
                Une fois la forme de la zone de collision défini, il ne devrait plus y avoir de symbole d'avertissement dans l'interface 
                graphique. Nous pourrons donc commencer à écrire le code de détection de collision.
            </p>
            <ColoredBox title="À noter:">
                Il est techniquement possible de modifier les propriétés de la forme de collision directement dans l'interface "2D" de la 
                scène. Ça peut être pratique pour définir une forme alors que nous avons déjà un visuel pour l'élément que nous créons. En 
                général, cette façon de faire est toutefois un peu moins précise, donc on va généralement remodifier les propriétés dans le
                panneau de propriété par la suite.
            </ColoredBox>
        </section>
        <section>
            <h2>Signal de collision</h2>
            <p>
                Lorsque nous avons défini un <IC>Area2D</IC> avec une zone de collision pour chacun des éléments avec lesquels nous voulons
                détecter les collisions, nous pouvons demander à l'engin de jeu de nous avertir lorsqu'il y a une collision. Pour ce faire, 
                on utilisera ce qu'on appelle un "<em>signal</em>". Les signals, sont en fait des "<em>listeners</em>", "<em>observers</em>",
                "<em>events</em>"... Peu importe comment vous voulez les appeler, c'est la façon de recevoir une notification pour exécuter
                une fonction lorsqu'un évènement survient. Dans ce cas-ci, nous pouvons demander à Godot de nous informer lorsqu'une 
                collision survient.
            </p>
            <p>
                Pour ajouter un signal, vous devez tout d'abords décider où vous voulez mettre le code de réaction à la collision. Si vous
                avez un personnage qui se déplace, vous voudrez probablement mettre le code dans ce personnage, mais il est possible d'avoir 
                des éléments non contrôllé par le joueur qui entre en collision entre eux. Dans ce cas-ci, il faudrait mettre le code de 
                réaction à la collision ailleur. Dans tous les cas, voici les étapes pour ajouter le signal.
            </p>
            <ol>
                <li>
                    Sélectionner le node dans lequel vous voulez mettre le code dans le panneau de scène.
                </li>
                <li>
                    À la droite, juste au dessus du panneau de propriété, sélectionner l'onglet "<em>Signals</em>"
                </li>
                <li>
                    Dans ce nouveau panneau, vous devriez voir l'ensemble des signaux possible d'écouter par votre élément. Si vous allez 
                    dans la section <IC>Area2D</IC>, vous y trouverez le signal <IC>area_entered(area:&nbsp;Area2D)</IC>. C'est celui qui nous
                    intéresse pour détecter une collision. Double-cliquer sur celui-ci.
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, assurez-vous que le node sélectionné est bien celui auquel vous voulez ajouter le code de 
                    gestion de collision. Le nom du "<em>Receiver Method</em>" peut rester le même pour l'instant. Il est toutefois possible de 
                    changer le nom de la méthode ici si nécessaire. Cliquer ensuite sur "<em>Connect</em>"
                </li>
                <li>
                    Godot va automatiquement créer le squelette du signal dans le fichier de script. Cette fonction va être appelé à chaque fois 
                    que l'élément entrera en contact avec un autre. Il nous reste maintenant qu'à programmer la fonction pour qu'elle fasse ce 
                    que l'on veut qu'elle fasse.
                </li>
            </ol>
            <ColoredBox title="À noter:">
                Si vous voulez retirer un signal, il ne faut pas simplement enlever la fonction du fichier de script. Vous devez aussi le
                déconnecter avec l'interface graphique. Vous pouvez aller dans le panneau de signal, faire un clic droit sur le nom de la 
                fonction et cliquer sur l'option "<em>Disconnect</em>"
            </ColoredBox>
        </section>

        <section>
            <h2>Fonction de collision</h2>
            <p>
                La fonction de collision connecté au signal peut être utilisé pour exécuter du code lors de la détection d'une collision.
                Ici, vous pouvez diminuer l'énergie de votre personnage, déplacer des éléments ou tout autre modification intéressante pour 
                votre jeu.
            </p>
            <p>
                Dans la fonction de collision, vous trouverez un paramètre intéressant, le <IC>area</IC> qui représente l'autre élément avec
                lequel vous êtes entré en collision. Il peut être utile pour modifier les paramètres de l'autre élément ou pour aller 
                chercher de l'information à son sujet.
            </p>
            <CodeBlock language="gdscript">{signalArea}</CodeBlock>
            <p>
                Un autre élément important à noter est que la détection de collision fonctionne uniquement lorsque les 2 éléments entre en
                intersection. Si nous voulons lancer la fonction une nouvelle fois, nous devons déplacer les éléments pour qu'ils ne soient 
                plus en collision et les remettre en intersection. Une autre façon est de désactivé la détection de collision sur notre 
                élément et de le réactiver après un certain délai en changeant la propriété <IC>monitoring</IC>.
            </p>
            <CodeBlock language="gdscript">{signalMonitoring}</CodeBlock>
            <p>
                Pour réactiver les collisions après un certain délai, nous utiliserons généralement un "<em>Timer</em>". Nous verrons 
                comment les utiliser bientôt.
            </p>
            <ColoredBox title="À noter:">
                La propriété <IC>monitoring</IC> est disponible directement sur le <IC>Area2D</IC>. Il est donc possible de la modifier 
                directement avec <IC>monitoring = false</IC>. Ceci étant dit, si nous faisons ça, la collision ne se déactivera pas 
                correctement puisque nous modifions la détection de la collision pendant sa détection. En bref, c'est pour cette raison que 
                nous utilisons la fonction <IC>set_deferred()</IC>. Elle nous permet d'indiquer à Godot que l'on veut exécuter du code 
                après la gestion de la collision actuelle.
            </ColoredBox>
        </section>
    </>;
}
