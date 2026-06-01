import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Optimisation des nodes",
    description: "Présentation de l'optimisation du code du jeu, principalement en évitant la recherche de nodes.",
    keywords: ["variable", "$", "dollar"],
    group: "notes"
}

const variable = 
`@onready var sprite_2d := $Sprite2D`;

const variableOld = 
`var sprite_2d

func _ready() -> void:
    sprite_2d = $Sprite2D`;

export default function Page() {
    return <>
        <section>
            <h2>Éviter la recherche de nodes</h2>
            <p>
                Un jeu vidéo est une application complexe qui exécute beaucoup de code plusieurs fois par secondes. En effet, pour être 
                fluide, la boucle de jeu va s'exécuter très rapidement, ce qui exécute une très grande quantité de code à chaque seconde.
                Il faut donc faire attention. Si notre code est moindrement innefficace, cela ralentira rapidement le jeu puisqu'il sera 
                exécuté à répétition. Nous voulons donc écrire du code optimisé.
            </p>
            <p>
                Une des optimisations que nous pouvons faire rapidement est au niveau de la recherche de nodes. Nous avons déjà utilisé à
                quelques reprises le symbole <IC>$</IC> dans le code. Ce symbole nous permet d'aller chercher un sous-node de notre 
                élément. Le problème, c'est que lorsqu'on utilise ce symbole, nous effectuons une recherche dans notre objet pour y 
                trouver un node. Cette recherche est généralement très rapide, mais puisqu'elle est exécuté plusieurs fois par secondes,
                elle ralentit un peu le jeu. Il serait plus efficace de faire cette recherche une seule fois au chargement de notre node
                et par la suite, de ne plus jamais le faire. Heureusement, c'est assez facile à faire.
            </p>
        </section>

        <section>
            <h2>Nettoyer les nodes</h2>
            <p>
                Le truc pour éviter les recherches multiples est simple. On fait la recherche des sous-nodes au chargement de notre 
                élément de jeu et on stocke le résultat dans une variable. On pourra ensuite réutiliser cette variable pour éviter la 
                recherche. Cela pourrait ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{variable}</CodeBlock>
            <p>
                On peut rajouter ce code directement avec les variables de notre node dans le haut de notre fichier. On pourra ensuite 
                l'utiliser un peu partout dans le code de ce node.
            </p>
            <ColoredBox title="À noter:">
                <p>
                    Vous noterez ici l'instruction <IC>@onready</IC>. Cette instruction permet d'exécuter le code de la variable 
                    directement quand le node est complètement chargé. Ça nous permet d'écrire le code plus simplement. Autrement, il 
                    faudrait attendre que le node soit prêt à travers de la fonction <IC>_ready()</IC>. Le code serait plus long et 
                    ressemblerait plutôt à ceci:
                </p>
                <CodeBlock language="gdscript">{variableOld}</CodeBlock>
            </ColoredBox>
        </section>
    </>;
}
