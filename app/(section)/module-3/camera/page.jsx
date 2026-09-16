import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Caméra",
    description: "Démonstration de l'utilisation du node Camera2D pour suivre un personnage dans un jeu.",
    keywords: ["Camera2D", "limites", "suivre", "follow"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Caméra2D</h2>
            <p>
                Présentement, nous sommes capable de déplacer notre personnage dans notre écran de jeu, mais le personnage peut sortir de 
                l'écran si on le déplace trop loin. C'est assez limitant puisqu'en ce moment, nous devons donc garder l'ensemble de notre jeu 
                dans l'écran. Pour remédier à cette situation, nous allons faire en sorte que l'écran de jeu suive notre personnage. Pour y 
                arriver, nous utiliserons une caméra qui suivra notre personnage. 
            </p>
            <p>
                Dans Godot, c'est le node <IC>Camera2D</IC> qui représentera la caméra dans notre jeu. On peut l'utiliser de la façon suivante:
            </p>
            <ol>
                <li>
                    Aller dans la scène de votre personnage et cliquer sur le node principal de cette scène.
                </li>
                <li>
                    Ajouter un node <IC>Camera2D</IC> comme enfant du node principal de votre personnage.
                </li>
            </ol>
            <p>
                C'est aussi simple que ça! Maintenant, si vous démarrez le jeu, vous verrez que votre personnage sera toujours au centre de
                l'écran. Lorsque vous déplacerez votre personnage, l'écran se déplacera avec lui. Vous pourrez donc créer un niveau beaucoup 
                plus grand que l'écran de jeu puisque la caméra suivra votre personnage.
            </p>
        </section>

        <section>
            <h2>Limites</h2>
            <p>
                En général, on ne voudra pas que la caméra suive complètement notre personnage partout. En effet, aux proximités des limites de 
                notre niveau, on voudra que la caméra s'arrête et ne suive plus le personnage. De cette façon, on ne verra pas l'espace vide 
                autour de notre niveau. Pour y arriver, nous devons définir des limites à notre caméra. Les limites de la caméra sont définies
                par les propriétés <IC>limit_left</IC>, <IC>limit_right</IC>, <IC>limit_top</IC> et <IC>limit_bottom</IC>. Ces propriétés
                peuvent être définies dans l'inspecteur de propriétés ou par code. 
            </p>
            <p>
                Si la taille de vos niveau est fixe, je vous recommande de définir les limites de la caméra dans l'inspecteur de propriétés. 
                Toutefois, si la taille de vos niveaux est variable, vous devrez définir les limites de la caméra par code. Pour ce faire, vous 
                pouvez ajouter un script à votre node <IC>Camera2D</IC> où vous modifierez les limites en fonction de la taille du niveau 
                courant. Vous pourriez aussi mettre ce code dans le script du node de votre personnage ou même dans le script du node de votre 
                niveau.
            </p>
        </section>
    </>;
}
