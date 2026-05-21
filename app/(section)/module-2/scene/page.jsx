import IC from '@/components/InlineCode'
import KeyboardKey from '@/components/KeyboardKey'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Création de scènes",
    description: "Présentation de la création de scènes pour mieux organiser et facilement réutiliser les éléments d'un jeu vidéo.",
    keywords: ["réutilisation", "organisation"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Simplifier l'arbre de nodes</h2>
            <p>
                Nous ne faisons que commencer à développer notre jeu et déjà, vous verrez qu'il y a beaucoup de nodes dans le panneau de 
                scène. Si nous avons à rajouter plus d'éléments, ce panneau deviendra difficile à gérer surtout si nous devons ajouter des
                éléments répétitif, comme des hordes d'ennemies ou des personnages non joueurs (aussi appelé "<em>Non Playable Character</em>" 
                ou "<em>NPC</em>").
            </p>
            <p>
                Par exemple, le personnage principal de notre jeu va généralement contenir un node pour ses collisions, un autre pour son
                visuel et ses textures, potentiellement des "<em>Timer</em>", des générateurs de particules, des marqueurs, etc. Les 
                ennemies vont souvent, eux aussi, contenir ce genre de nodes, ce qui décuple rapidement le nombre de nodes dans notre scène
                principale.
            </p>
            <p>
                C'est ici que les scènes entrent en jeu. Elles nous permettent de prendre un node ainsi que ses sous-nodes et de les 
                regrouper ensemble. Un peu comme une fonction qui nous permet de regrouper des lignes de code. Nous appelons ce regroupement
                une scène. Les scènes peuvent être inséré dans n'importe quelle autre scène, y compris la scène principale. Cela nous permet 
                2 gros avantages:
            </p>
            <ul>
                <li>
                    On peut simplifier la scène principale ou même d'autres scènes en regroupant certains nodes ensembles, comme pour le
                    personnage principal ou un niveau.
                </li>
                <li>
                    On peut réutiliser une scène plusieurs fois, évitant ainsi la répétition de nodes. Par exemple, on pourrait réutiliser
                    un goblin ennemie à plusieurs endroit dans notre jeu. On peut même modifier les paramètres d'une scène que l'on répète
                    pour qu'elle soit légèrement différente d'une autre.
                </li>
            </ul>
            <p>
                Bref, les scènes sont un peu comme les fonctions d'un jeu vidéo. Dans cette page, nous verrons comment créer une scène et
                comment les insérer dans une autre scène.
            </p>
        </section>

        <section>
            <h2>Créer une scène</h2>
            <p>
                Il y a principalement 2 façons de créer une nouvelle scène:
            </p>
            <ul>
                <li>
                    Une nouvelle scène vide que l'on peut remplir nous-même.
                </li>
                <li>
                    À partir de nodes et sous-nodes existants.
                </li>
            </ul>
            <p>
                Pour créer une nouvelle scène vide, suivez les étapes suivantes:
                 vous n'avez qu'à aller 
                Vous pourrez alors choisir le type de scène que vous créez et ajouter des nodes dedans. 
            </p>
            <ol>
                <li>
                    Dans le menu en haut à gauche et cliquer sur "<em>Scene</em>" et choisir l'option "<em>New Scene</em>" (Ou utiliser le 
                    raccourci clavier <KeyboardKey>Ctrl</KeyboardKey>&nbsp;+&nbsp;<KeyboardKey>N</KeyboardKey>).
                </li>
                <li>
                    Choisir le type de scène dans le panneau de scène à gauche. Pour le cours, on utilisera presque toujours un "<em>2D 
                    Scene</em>".
                </li>
                <li>
                    La nouvelle scène n'est pas sauvegardé par défaut. Faites-le en allant dans le menu en haut à gauche "<em>Scene</em>" et 
                    en choisissant l'option "<em>Save Scene</em>", ou <KeyboardKey>Ctrl</KeyboardKey>&nbsp;+&nbsp;<KeyboardKey>S</KeyboardKey> pour
                    les habitués.
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, choisir un nom de fichier pour la nouvelle scène, de préférence tout en minuscule 
                    en "<em>snake_case</em>" ou "<em>kebab-case</em>". Cliquer ensuite sur le bouton "<em>Save</em>".
                </li>
            </ol>
            <p>
                En général, on va prototyper directement dans la scène principal ou dans une autre scène et après avoir quelque chose de 
                satisfaisant, nous allons vouloir convertir ces nodes en une nouvelle scène. Dans ce cas-là, suivez les étapes suivantes
                pour créer votre nouvelle scène à partir de nodes existants:
            </p>
            <ol>
                <li>
                    Faites un clic droit sur le node contenant tous les sous-nodes que vous voulez regrouper. Choisissez l'option
                    "<em>Save Branch as Scene...</em>".
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, choisir un nom de fichier pour la nouvelle scène, de préférence tout en minuscule 
                    en <IC>snake_case</IC> ou <IC>kebab-case</IC>. Cliquer ensuite sur le bouton "<em>Save</em>".
                </li>
            </ol>
        </section>

        <section>
            <h2>Ajouter une scène</h2>
            <p>
                Pour ajouter une scène à une autre, suivez les étapes suivantes:
            </p>
            <ol>
                <li>
                    Dans le panneau de scène, cliquer sur l'icône de la petite chaîne qui a pour nom "<em>Instantiate Child Scene...</em>"
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, choisir le type de scène que vous voulez ajouter.
                </li>
            </ol>
        </section>
    </>;
}
