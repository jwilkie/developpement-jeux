import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import OverflowContainer from '@/components/OverflowContainer';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Langage GDScript",
    description: "Présentation générale du langage de programmation GDScript qui nous permet de programmer un jeu vidéo avec Godot.",
    keywords: ["variable", "type", "fonction", "func", "condition", "boucle", "loop", "flux", "flow", "opérateur"],
    group: "notes"
}

const func = 
`func bienvenue() -> void:
    print("Bienvenue dans le cours de développement de jeux vidéo!")`;

const funcReturn = 
`func get_bienvenue() -> String:
    return "Bienvenue dans le cours de développement de jeux vidéo!"`;

const funcParam =
`func additionner(nombre1: int, nombre2: int) -> int:
    var somme := nombre1 + nombre2
    return somme`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Le GDScript est le langage de programmation du moteur de jeu Godot. Il s'agit d'un langage de script spécialement conçu 
                pour être facile à apprendre et à utiliser dans l'engin de jeu. C'est un langage de haut niveau, dynamique et orienté objet.
                Il ressemble à un mélange entre le langage Python et Javascript. Puisque vous avez déjà une certaine expérience en 
                programmation, principalement avec les langages C#, C++ et Javascript, vous devriez trouver le GDScript relativement facile
                à apprendre.
            </p>
            <p>
                Dans cette page, nous allons présenter la syntaxe de base du GDScript et quelques-uns de ses concepts fondamentaux. Nous 
                irons plus en détail sur différents aspects du langage lorsqu'ils seront nécessaires pour la réalisation de vos projets de 
                jeu.
            </p>
        </section>

        <section>
            <h2>Variables</h2>
            <p>
                Le langage GDScript déclare les variables à l'aide du mot-clé <IC>var</IC>. Par exemple, pour déclarer une variable 
                appelée <IC>score</IC>, on peut écrire:
            </p>
            <CodeBlock language="gdscript">{'var score = 0'}</CodeBlock>
            <p>
                Vous remarquerez que nous n'avons pas spécifié le type de la variable. En effet, le GDScript est un langage de typage 
                dynamique, ce qui signifie que le type d'une variable est déterminé automatiquement en fonction de la valeur qui lui est
                assignée et que le type peut changer au cours de l'exécution. Ceci étant dit, il est possible de spécifier le type d'une 
                variable en utilisant une annotation de type. De cette façon, le type de la variable est explicitement défini et ne pourra
                pas être modifié par la suite. Si nous réutilisons l'exemple précédent, nous pouvons déclarer la variable <IC>score</IC> en 
                spécifiant son type comme suit:
            </p>
            <CodeBlock language="gdscript">{'var score: int = 0'}</CodeBlock>
            <p>
                Puisqu'il est généralement recommandé de ne pas modifier le type d'une variable une fois qu'elle a été déclarée, il est 
                conseillé d'utiliser les annotations de type pour éviter les erreurs potentielles. Il est aussi possible de fixer le type
                d'une variable à partir de la valeur qui lui est assignée. Ce genre de déclaration est très fréquente en GDScript et se 
                fait en utilisant l'opérateur <IC>:=</IC> de la façon suivante:
            </p>
            <CodeBlock language="gdscript">{'var score := 0'}</CodeBlock>
            <p>
                Les 2 déclarations précédentes sont équivalentes et créent une variable de type <IC>int</IC> initialisée à 0. Cependant, la
                seconde déclaration est plus concise.
            </p>
            <p>
                Si vous voulez plutôt déclarer une constante, donc une variable dont la valeur ne peut pas être modifiée après sa
                déclaration, vous pouvez utiliser le mot-clé <IC>const</IC> de la même manière que le mot-clé <IC>var</IC>. Par exemple, 
                pour déclarer une constante appelée <IC>MAX_VITESSE</IC> initialisée à 10, on peut écrire:
            </p>
            <CodeBlock language="gdscript">{'const MAX_VITESSE := 10'}</CodeBlock>
            <ColoredBox title="À noter:">
                <p>
                    Les noms de variables en GDScript doivent suivre certaines règles. Ils doivent utiliser la casse <em>snake_case</em> en
                    minuscule. Bref, les espaces sont remplacés par des barre de soulignement (<IC>_</IC>) et toutes les lettres sont en
                    minuscules. Par exemple: <IC>player_score</IC>, <IC>enemy_health</IC>, <IC>game_over</IC>.
                </p>
                <p>
                    Pour les constantes, nous utiliserons la casse <em>SCREAMING_SNAKE_CASE</em>, comme dans la plupart des autres langages
                    de programmation. Bref, les lettres sont en majuscules et les espaces sont remplacés par des barre de soulignement. Par 
                    exemple: <IC>MAX_VITESSE</IC>, <IC>GRAVITE</IC>, <IC>PI</IC>.
                </p>
            </ColoredBox>
        </section>

        <section>
            <h2>Types de données</h2>
            <p>
                Le GDScript supporte de nombreux types de données par défaut. Voici une liste des types de données les plus couramment 
                utilisés:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Type de données</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><IC>null</IC></td>
                            <td>
                                Représente une valeur nulle, c'est-à-dire une valeur qui ne représente aucune donnée.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>bool</IC></td>
                            <td>
                                Représente une valeur booléenne, c'est-à-dire une valeur qui peut être soit vrai (<IC>true</IC>) ou 
                                fausse (<IC>false</IC>).
                            </td>
                        </tr>
                        <tr>
                            <td><IC>int</IC></td>
                            <td>
                                Représente un nombre entier, c'est-à-dire un nombre sans partie décimale. Par 
                                exemple: <IC>-3</IC>, <IC>0</IC>, <IC>42</IC>.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>float</IC></td>
                            <td>
                                Représente un nombre à virgule flottante, c'est-à-dire un nombre qui peut avoir une partie décimale. 
                                Par exemple: <IC>-3.14</IC>, <IC>0.0</IC>, <IC>2.718</IC>.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>String</IC></td>
                            <td>
                                Représente une séquence de caractères, c'est-à-dire du texte. Les chaînes de caractères sont entourées
                                de guillemets doubles. Par exemple: <IC>"Bonjour"</IC>, <IC>"Score: 100"</IC>, <IC>"Player1"</IC>. Pour plus d'information sur les 
                                chaînes de caractères en GDScript, vous pouvez consulter la documentation officielle.
                                <div>
                                    <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_string.html">
                                        String
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><IC>Array</IC></td>
                            <td>
                                Représente un tableau de valeurs. Les tableaux de GDScript sont dynamiques, ce qui signifie que leur taille
                                peut changer au cours de l'exécution, similaire aux tableau de Javascript. Les tableaux utilisent les 
                                crochets pour entourer les éléments. Par exemple: <IC>[]</IC>, <IC>[1, 2, 3]</IC>, <IC>["a", "b", "c"]</IC>. Pour plus d'information sur 
                                les tableaux en GDScript, vous pouvez consulter la documentation officielle.
                                <div>
                                    <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_array.html">
                                        Array
                                    </a> 
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><IC>Dictionary</IC></td>
                            <td>
                                Représente un dictionnaire de paires clé-valeur. Les dictionnaires de GDScript sont également dynamiques
                                et utilisent les accolades pour entourer les paires clé-valeur. Ils ressemblent beaucoup aux objets de
                                Javascript. Par exemple: <IC>{'{}'}</IC>, <IC>{'{"name": "Alice", "age": 30}'}</IC>, <IC>{'{"score": 100, "lives": 3}'}</IC>. Pour plus 
                                d'information sur les dictionnaires en GDScript, vous pouvez consulter la documentation officielle.
                                <div>
                                    <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_dictionary.html">
                                        Dictionary
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><IC>Vector2</IC></td>
                            <td>
                                Représente un vecteur à 2 dimensions, c'est-à-dire une paire de valeurs numériques qui peuvent être 
                                utilisées pour faire des calculs vectoriels. Les vecteurs sont très utilisés en programmation de jeux vidéo,
                                principalement pour représenter des positions, des vitesses, des forces, etc. Un vecteur à 2 dimensions peut
                                être créé en utilisant la classe <IC>Vector2</IC>. Par exemple: <IC>Vector2(1, 2)</IC>. Pour plus
                                d'information sur les vecteurs en GDScript, vous pouvez consulter la documentation officielle.
                                <div>
                                    <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_vector2.html">
                                        Vector2
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><IC>Rect2</IC></td>
                            <td>
                                Représente un rectangle défini par 2 vecteurs à 2 dimensions: un vecteur pour la position du coin supérieur
                                gauche du rectangle et un vecteur pour la taille du rectangle. Les rectangles sont souvent utilisés pour
                                représenter des zones de collision ou des zones de détection. Un rectangle peut être créé en utilisant la 
                                classe <IC>Rect2</IC>. Par exemple: <IC>Rect2(Vector2(0, 0), Vector2(100, 50))</IC> ou <IC>Rect2(0, 0, 100, 50)</IC>. Pour
                                plus d'information sur les rectangles en GDScript, vous pouvez consulter la documentation officielle.
                                <div>
                                    <a target="_blank" href="https://docs.godotengine.org/en/stable/classes/class_rect2.html">
                                        Rect2
                                    </a>
                                </div> 
                            </td>
                        </tr>
                        <tr>
                            <td><IC>Color</IC></td>
                            <td>
                                Représente une couleur définie par 4 composantes: rouge, vert, bleu et alpha (transparence). Les couleurs 
                                sont souvent utilisées pour représenter des couleurs d'objets, de lumières ou de particules. Une couleur 
                                peut être créée en utilisant la classe <IC>Color</IC>. Par exemple: <IC>Color(1.0, 0.0, 0.0)</IC> ou
                                encore <IC>Color("#FF0000")</IC>. Pour plus d'information sur les couleurs en GDScript, vous pouvez
                                consulter la documentation officielle.
                                <div>
                                    <a href="https://docs.godotengine.org/en/stable/classes/class_color.html">
                                        Color
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>                                

        <section>
            <h2>Fonctions</h2>
            <p>
                Les fonctions de GDScript sont définies à l'aide du mot-clé <IC>func</IC>. Par exemple, pour définir une fonction qui
                affiche un message de bienvenue, de la façon suivante:
            </p>
            <CodeBlock language="gdscript">{func}</CodeBlock>
            <p>
                Comme vous pouvez le constater, il n'y a pas de délimiteur autour du corps de la fonction. En GDScript, le corps d'une
                fonction est délimité par l'indentation. Cela signifie que tout le code qui est indenté d'une indentation de plus que la 
                ligne de déclaration de la fonction fait partie du corps de la fonction. Cette approche est similaire à celle utilisée en
                Python.
            </p>
            <p>
                Vous avez probablement aussi remarqué que la déclaration de la fonction inclut une annotation de type pour le type de retour 
                de la fonction. En effet, l'opérateur <IC>{'->'}</IC> est utilisé pour spécifier le type de retour d'une fonction. Dans
                l'exemple précédent, la fonction <IC>bienvenue</IC> ne retourne aucune valeur, c'est pourquoi nous avons spécifié le type de
                retour <IC>void</IC>. Si une fonction retourne une valeur, nous devons la spécifier. Par exemple, si nous avons une fonction 
                qui retourne une chaîne de caractères, nous pouvons la déclarer de la façon suivante:
            </p>
            <CodeBlock language="gdscript">{funcReturn}</CodeBlock>
            <p>
                Si nous voulons plutôt créer une fonction paramètrable qui prend des arguments, nous pouvons les spécifier dans la 
                déclaration de la fonction entre les parenthèses, comme dans les autres langages de programmation. Ici, il sera important 
                de spécifier le type de chaque argument pour éviter les erreurs potentielles. Par exemple, si nous voulons créer une fonction
                qui additionne deux nombres, nous pouvons la déclarer de la façon suivante:
            </p>
            <CodeBlock language="gdscript">{funcParam}</CodeBlock>
        </section>

        <section>
            <h2>Structure de contrôle</h2>
            <p>

            </p>
        </section>

        <section>
            <h2>Mot-clé réservés</h2>
            <p>

            </p>
        </section>

        <section>
            <h2>Opérateurs</h2>
            <p>

            </p>    
        </section>

        <section>
            <h2>Références</h2>
            <p>

            </p>
        </section>
    </>;
}
