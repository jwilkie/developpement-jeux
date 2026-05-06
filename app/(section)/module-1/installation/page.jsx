import IC from '@/components/InlineCode'
import KK from '@/components/KeyboardKey'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Installation de Godot",
    description: "Démonstration de l'installation de Godot, de sa configuration et de son utilisation pour créer un projet.",
    keywords: [".NET", "windows", "mac", "linux"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Mise en situation</h2>
            <p>
                Pour ce cours, nous utiliserons l'engin de jeu Godot pour créer nos jeux vidéo. Godot est un moteur de jeu open-source, 
                gratuit et très populaire pour la création de jeux 2D et 3D. Pour l'utiliser, nous devons d'abord l'installer sur notre
                ordinateur. Cette page vous guidera à travers le processus d'installation de Godot.
            </p>
        </section>

        <section>
            <h2>Installation</h2>
            <p>
                Voici les étapes à suivre pour installer Godot sur votre ordinateur:
            </p>
            <ol>
                <li>
                    Rendez-vous sur la page de téléchargement de Godot. Choisissez la dernière version de Godot. Vous avez ici généralement 
                    2 choix: la version standard et la version .NET. La version .NET est une version de Godot qui supporte le langage de 
                    programmation C#. Nous ne l'utiliserons pas dans ce cours, mais vous pouvez l'installer quand même si vous le souhaitez.
                    <div>
                        <a target="_blank" href="https://godotengine.org/download/">Télécharger Godot</a>
                    </div>
                </li>
                <li>
                    (Optionnel) Si vous avez choisi la version .NET, vous devez également installer le .NET SDK de Microsoft. Si ce n'est 
                    pas déjà fait, rendez-vous sur la page de téléchargement du .NET SDK et téléchargez sa dernière version pour votre 
                    système d'exploitation.
                    <div>
                        <a target="_blank" href="https://dotnet.microsoft.com/en-us/download">Télécharger .NET</a>
                    </div>
                    <ol>
                        <li>
                            Exécuter le programme d'installation que vous venez de télécharger et suivez les instructions à l'écran pour
                            installer le .NET SDK sur votre ordinateur.
                        </li>
                        <li>
                            Une fois l'installation terminée, vous pouvez vérifier que le .NET SDK est correctement installé en ouvrant un
                            terminal et en exécutant la commande suivante:
                            <CodeBlock language="terminal">{'dotnet --version'}</CodeBlock>
                        </li>
                    </ol>
                </li>
                <li>
                    Ouvrez un explorateur de fichier et créer un dossier nommé <IC>godot</IC> directement dans le répertoire <IC>C:\</IC>.
                    Le chemin de ce nouveau dossier sera donc <IC>C:\godot</IC>. 
                </li>
                <li>
                    Extrayez le contenu de l'archive que vous avez téléchargée à l'étape 1 dans le dossier <IC>C:\godot</IC>. Vous devriez 
                    maintenant avoir un dossier ayant un nom similaire à <IC>Godot_vX.X.X-stable_win64</IC>. Dans ce répertoire, vous y 
                    trouverez un fichier exécutable ayant le même nom, mais avec l'extension <IC>.exe</IC>. C'est le fichier que vous devez
                    exécuter pour lancer Godot.
                </li>
                <li>
                    Essayez de lancer Godot en double-cliquant sur le fichier <IC>.exe</IC>. Si Windows bloque l'exécution du programme, 
                    faites un clic droit sur le fichier <IC>.exe</IC>, sélectionnez "Propriétés", allez dans l'onglet "Général" et cliquez 
                    sur la case à cocher "Débloquer" en bas de la fenêtre. Cliquez ensuite sur "Appliquer".
                </li>
                <li>
                    Pour avoir accès plus facilement à Godot, vous pouvez créer un raccourci vers le fichier exécutable en faisant un clic
                    droit sur le fichier <IC>.exe</IC> et en sélectionnant "Créer un raccourci". Vous pouvez ensuite déplacer ce raccourci
                    sur votre bureau.
                </li>
            </ol>
        </section>

        <section>
            <h2>Création d'un projet</h2>
            <p>
                Maintenant que vous avez installé Godot, nous allons créer un projet vide qui nous servira de base pour les prochains cours. 
                Voici les étapes à suivre pour créer un projet dans Godot:
            </p>
            <ol>
                <li>
                    Lancez Godot en double-cliquant sur le fichier <IC>.exe</IC> ou en utilisant le raccourci que vous avez créé.
                </li>
                <li>
                    Dans la fenêtre de démarrage de Godot, cliquez sur le bouton "<em>Create</em>" pour créer un nouveau projet.
                </li>
                <li>
                    Dans le formulaire de création de projet, entrez les informations suivantes:
                    <ol>
                        <li>Nom du projet. La casse n'est pas importante.</li>
                        <li>Assurez-vous que la création d'un dossier pour le projet est cochée.</li>
                        <li>
                            Choisissez un emplacement pour votre projet. Je vous suggère de le mettre à un endroit où vous mettez vos 
                            différents projets scolaires. Assurez-vous de rester bien organisé.
                        </li>
                        <li>
                            Choisissez le moteur de rendu "<em>Forward+</em>". Le moteur choisi n'aura pas vraiment d'impact pour les 
                            projets que nous allons créer dans ce cours. Il est même possible de le changer plus tard. 
                        </li>
                        <li>
                            Spécifier le gestionnaire de version à Git.
                        </li>
                        <li>
                            Assurez-vous que la case à cocher "<em>Edit Now</em>" est cochée.
                        </li>
                    </ol>
                </li>
                <li>
                    Cliquez sur le bouton "<em>Create</em>".
                </li>
            </ol>
        </section>

        <section>
            <h2>Configuration de base</h2>
            <p>
                Maintenant que vous avez créé votre projet, vous devriez voir l'interface de développement de Godot. Voici les étapes à 
                suivre pour configurer les paramètres de base de votre projet:
            </p>
            <ol>
                <li>
                    Dans le panneau de gauche, l'engin vous demande de créer un <em>Root Node</em> pour votre projet. Un <em>Node</em> est 
                    un élément de base dans Godot qui peut représenter n'importe quoi et qui servira à organiser et construire votre jeu. 
                    Dans ce cours, nous allons développer des jeux 2D, donc nous allons choisir l'option "<em>2D Scene</em>".
                </li>
                <li>
                    Dans le même panneau de gauche, faites un clic droit sur le nouvel élément <em>Node2D</em> qui vient d'être créé et 
                    choisissez l'option "<em>Rename</em>". Renommez ce <em>Node2D</em> à <em>Main</em>. Ce changement n'est pas obligatoire,
                    mais il est important de donner des noms significatifs aux différents éléments de votre projet pour rester organisé.
                </li>
                <li>
                    Sauvegardez cette nouvelle scène en allant de le menu "<em>Scene</em>" en haut de l'interface et en sélectionnant 
                    l'option "<em>Save Scene</em>" ou en utilisant le raccourci clavier <KK>CTRL</KK> + <KK>S</KK>. La fenêtre de sauvegarde
                    va alloir s'ouvrir.
                    <ol>
                        <li>
                            Laissez le chemin de sauvegarde par défaut dans le dossier <IC>res://</IC> qui correspond au dossier principal 
                            de votre projet.
                        </li>
                        <li>
                            Nommez votre scène <IC>main.tscn</IC>. L'extension <IC>.tscn</IC> est l'extension de fichier utilisée par Godot
                            pour les scènes. Ici, la casse peut être importante. Je vous recommande de toujours nommer vos fichiers en
                            minuscules et d'utiliser le Kebab Case ou le snake case. Bref, utilisez des tirets ou des barres de soulignement
                            au lieu des espaces et évitez les majuscules. Cela vous évitera des problèmes de compatibilité entre les 
                            différents systèmes d'exploitation.
                        </li>
                        <li>
                            Cliquez sur le bouton "<em>Save</em>" pour sauvegarder votre scène.
                        </li>
                    </ol>
                </li>
                <li>
                    Dans le panneau de gauche, en bas, il y a une section intitulée "<em>FileSystem</em>" qui correspond aux fichiers de
                    votre projet. Vous devriez y voir le fichier <IC>main.tscn</IC> que vous venez de sauvegarder. Faites un clic droit sur
                    ce fichier et sélectionnez l'option "<em>Set as Main Scene</em>" pour que Godot sache que c'est l'entrée de votre jeu.
                </li>
                <li>
                    Vous pouvez maintenant lancer votre jeu en cliquant sur le bouton avec l'icône d'une flèche en haut à droite de 
                    l'interface ou en utilisant le raccourci clavier <KK>F5</KK>. Vous devriez voir une fenêtre de jeu s'ouvrir avec un
                    écran vide gris.
                </li>
            </ol>
        </section>
    </>;
}
