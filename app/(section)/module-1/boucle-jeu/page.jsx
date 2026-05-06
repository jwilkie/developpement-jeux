/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fonctionnement d'un jeu vidéo",
    description: "Explication générale du fonctionnement interne d'un jeu vidéo et de sa boucle jeu.",
    keywords: ["boucle", "frame", "fps", "rendu"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Boucle de jeu</h2>
            <p>
                Un jeu vidéo est similaire à un film d'animation dans le sens où il est composé d'une série d'images, que l'on
                appelle des <em>frames</em>. C'est ce qui permet de créer l'illusion du mouvement à l'écran si la vitesse de ses 
                images est suffisamment rapide. Cependant, contrairement à un film où chaque image est pré-calculée et fixe, le 
                contenu d'un jeu vidéo est généré en temps réel par l'ordinateur du joueur.
            </p>
            <p>
                Pour permettre cela, les jeux vidéo utilisent une structure de code appelée la boucle de jeu ou <em>game loop</em>. 
                Cette boucle est un cycle continu qui gère les différentes étapes nécessaires pour dessiner le jeu à l'écran. Elle 
                se compose généralement de trois étapes principales, mais sans y être limitée:
            </p>
            <ul>
                <li>
                    Le traitement des entrées du joueur, qui peut inclure des actions telles que l'appui de touches du clavier, le 
                    mouvement de la souris ou encore les boutons d'une manette de jeu. Cette étape permet au joueur d'interagir avec le jeu.
                </li>
                <li>
                    La mise à jour de l'état du jeu, qui consiste à calculer les changements dans le monde du jeu en fonction des 
                    entrées du joueur et des règles du jeu.
                </li>
                <li>
                    Le rendu du jeu, qui est le processus de dessin de l'état actuel du jeu à l'écran. C'est ce qui permet au joueur
                    de voir les résultats de ses actions et de l'évolution du jeu.
                </li>
            </ul>
            <p>
                Ces étapes sont répétées en continu, créant ainsi le flux du jeu. En général, l'oeil humain perçoit un mouvement fluide à
                partir d'environ 24 images par seconde, ou 24 <em>frames per second</em> que l'on abrège souvent en <em>fps</em>. Cependant, 
                puisque les jeux vidéo ont souvent des éléments très rapides, il est courant de viser une génération de 60 fps ou plus pour
                assurer une expérience de jeu fluide. Ça veut donc dire que les 3 étapes de la boucle de jeu doivent être exécutées 60 fois
                par seconde, ce qui demande beaucoup de travail de la part de l'ordinateur du joueur et beaucoup d'optimisation de la part
                des développeurs du jeu.
            </p>
        </section>

        <section>
            <h2>Terminologie</h2>
            <p>
                Il existe plusieurs termes qui sont utilisés pour parler de la boucle de jeu et de son fonctionnement. Voici quelques-uns 
                des termes les plus courants qu'il vous faudra connaître pour suivre ce cours:
            </p>
            <dl>
                <dt>Frame</dt>
                <dd>
                    Une image individuelle générée par le jeu et affichée à l'écran. Le jeu vidéo va en générer plusieurs, une à la suite 
                    de l'autre pour créer l'illusion du mouvement. C'est l'unité de base du rendu d'un jeu vidéo.
                </dd>
                <dt>FPS</dt>
                <dd>
                    Abréviation de <em>frames per second</em>, qui signifie le nombre d'images générées par seconde. On l'appelera 
                    aussi <em>frame rate</em>. Un jeu vidéo va généralement viser un FPS de 60 ou plus pour s'assurer que le mouvement à 
                    l'écran est fluide. Un FPS plus bas va rendre le jeu saccadé, plus lent et généralement moins agréable à jouer.
                </dd>
                <dt>Game Loop</dt>
                <dd>
                    La structure de code qui gère le cycle continu de génération des frames dans un jeu vidéo. Il existe plusieurs façons
                    d'implémenter une boucle de jeu et peuvent être très complexes pour que les jeux vidéo puissent atteindre de bonnes
                    performances.
                </dd>
                <dt>Rendu</dt>
                <dd>
                    Le processus de dessin de l'état actuel du jeu à l'écran. C'est généralement la dernière étape de la boucle de jeu.
                    Une fois le rendu terminé, on peut afficher l'image générée à l'écran et passer à la génération de 
                    la <em>frame</em> suivante.
                </dd>
                <dt>Update</dt>
                <dd>
                    Le processus de mise à jour de l'état du jeu en fonction des entrées du joueur et des règles du jeu. C'est généralement
                    un mélange de l'étape de traitement des entrées du joueur et de la mise à jour de l'état du jeu. 
                </dd>
                <dt>Game engine</dt>
                <dd>
                    Un logiciel qui fournit une infrastructure pour le développement et l'exécution de jeux vidéo. En Français, on l'appelle 
                    le moteur de jeu ou l'engin de jeu. Il contient souvent des composants pour la gestion de la boucle de jeu, le rendu 
                    graphique, la physique, l'audio, et d'autres fonctionnalités essentielles à la création de jeux.
                </dd>
            </dl>
        </section>

        <section>
            <h2>Création d'une boucle de jeu</h2>
            <p>
                Bien qu'il soit possible d'implémenter sa propre boucle de jeu à partir de zéro, la plupart des développeurs choisissent 
                d'utiliser du code préexistant pour éviter de réécrire du code qui a déjà été écrit et optimisé par d'autres. C'est pour 
                cette raison que nous allons généralement utiliser un moteur de jeu pour créer nos jeux vidéo.
            </p>
        </section>
    </>;
}
