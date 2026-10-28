import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fichier de sauvegarde",
    description: "Présentation des outils pour manipuler le système de fichiers pour gérer la création, la lecture et la suppression de fichiers de sauvegarde dans un projet Godot.",
    keywords: ["user://", "FileAccess", "DirAccess", "file_exists", "get_file_as_string", "open", "store_string", "remove_absolute", "JSON", "parse_string", "stringify"],
    group: "notes"
}

const createFile =
`const FICHIER_SAUVEGARDE : String = "sauvegarde.json"

func sauvegarder() -> void:
	# On ouvre le fichier en écriture
	var fichier = FileAccess.open("user://" + FICHIER_SAUVEGARDE, FileAccess.WRITE)
	
	# On défini les données à sauvegarder
	var sauvegarde = {
        "niveau": index_niveau_actuel,
		"position": {
            "x": personnage.position.x,
            "y": personnage.position.y
        },

        # ...
	}
	
	# Sauvegarde en JSON
	fichier.store_string(JSON.stringify(sauvegarde))`;

const readFile =
`const FICHIER_SAUVEGARDE : String = "sauvegarde.json"

func charger_sauvegarde() -> void:
	# Si le fichier de sauvegarde n'existe pas, on ne 
	# fait rien
	if not FileAccess.file_exists("user://" + FICHIER_SAUVEGARDE):
		return
		
	# Si le fichier de sauvegarde n'est pas du JSON valide,
	# on ne fait rien
    var fichier_string : String = FileAccess.get_file_as_string("user://" + FICHIER_SAUVEGARDE)
	var sauvegarde : Dictionary = JSON.parse_string(fichier_string)
	if sauvegarde == null:
		return
		
	# Validation des données de la sauvegarde
	if !sauvegarde.has("index_niveau_actuel") || !sauvegarde.has("position"):
		return
		
	# On modifie les données du jeu avec les 
    # données de la sauvegarde
	index_niveau_actuel = sauvegarde.index_niveau_actuel
    joeur.position.x = sauvegarde.position.x
    joeur.position.y = sauvegarde.position.y`;

const deleteFile =
`const FICHIER_SAUVEGARDE : String = "sauvegarde.json"

func supprimer_sauvegarde() -> void:
	if FileAccess.file_exists("user://" + FICHIER_SAUVEGARDE):
		DirAccess.remove_absolute("user://" + FICHIER_SAUVEGARDE)`;

export default function Page() {
    return <>
        <section>
            <h2>Gestion des fichiers</h2>
            <p>
                Le but des fichiers de sauvegarde est de pouvoir conserver l'état du jeu pour le restaurer plus tard. Avec Godot, leur 
                gestion est assez simple. Il suffit simplement d'être capable de créer, lire, modifier et supprimer des fichiers sur un 
                ordinateur. Vous avez déjà vu comment faire des manipulations de fichiers dans d'autres cours et dans d'autres langages 
                de programmation. En GDscript, ces fonctionnalités existeront aussi.
            </p>
            <p>
                Une question que l'on peut se poser est: dans quel type de fichier devrions-nous sauvegarder l'état du jeu? Il y a, bien 
                entendu, plusieurs bonnes réponses à cette question. Le format de fichier le plus simple est le format texte. Il est 
                facile à créer, lire et modifier. Si vous voulez un peu plus de structure, il est généralement préférable d'utiliser le
                format JSON. C'est un format que vous avez déjà utilisé dans d'autres cours et qui est très polyvalent. Un autre choix 
                possible est le format binaire. Il est plus difficile à manipuler, mais il est plus efficace pour stocker de grandes 
                quantités de données complexes, ce qui peut être utile pour des jeux en 3D plus complexes. Pour ce cours, nous allons 
                utiliser le format JSON pour nos fichiers de sauvegarde, mais n'hésitez pas à explorer d'autres formats si vous le 
                souhaitez.
            </p>
        </section>

        <section>
            <h2>Emplacement</h2>
            <p>
                Il est important de savoir où sont stockés les fichiers de sauvegarde. Dans Godot, les fichiers utilisateurs sont 
                stocké dans le répertoire <IC>user://</IC>. Ce nom de répertoire est en fait un alias pour le répertoire de l'utilisateur
                sur du jeu. Ce répertoire est spécifique à chaque jeu et à chaque utilisateur sur la plateforme. Dépendant de la 
                plateforme, le répertoire <IC>user://</IC> peut être différent. 
            </p>
            <p>
                Voici son emplacement dépendant de la plateforme:
            </p>
            <ul>
                <li>
                    <strong>Windows:</strong> <IC>%APPDATA%\Godot\app_userdata\[nom_du_projet]</IC>
                </li>
                <li>
                    <strong>macOS:</strong> <IC>~/Library/Application Support/Godot/app_userdata/[nom_du_projet]</IC>
                </li>
                <li>
                    <strong>Linux:</strong> <IC>~/.local/share/godot/app_userdata/[nom_du_projet]</IC>
                </li>
            </ul>
            <p>
                Une fois créé, vous pourrez retrouver vos fichiers de sauvegarde dans ce répertoire. Vous pourrez aussi les modifier 
                manuellement si vous le souhaitez. 
            </p>
        </section>

        <section>
            <h2>Créer un modifier un fichier de sauvegarde</h2>
            <p>
                Pour créer un fichier de sauvegarde, il suffit simplement d'utiliser la fonction <IC>FileAccess.open()</IC> pour 
                ouvrir un fichier en écriture. On peut ensuite utiliser une des fonctions <IC>store</IC> pour écrire des données dans le
                fichier. La modification d'un fichier se fait de la même façon. Il faut toutefois faire attention puisque la modification
                écrase le contenu du fichier. 
            </p>
            <CodeBlock language="gdscript">{createFile}</CodeBlock>
            <p>
                Dans l'exemple ci-dessus, nous sauvegardons des données dans un fichier JSON. Nous pouvons utiliser la
                fonction <IC>JSON.stringify()</IC>, comme en JavaScript, pour convertir un dictionnaire en une chaîne de caractères JSON. 
            </p>

        </section>

        <section>
            <h2>Lire un fichier de sauvegarde</h2>
            <p>
                Pour lire un fichier de sauvegarde, il suffit simplement d'utiliser la 
                fonction <IC>FileAccess.get_file_as_string()</IC> pour lire le contenu du fichier. Il faut toutefois faire attention
                puisqu'il peut y avoir de nombreuses erreurs possibles lors de la lecture d'un fichier de sauvegarde. Il est donc 
                important de vérifier que le fichier existe, que son contenu est valide et que les données sont valides avant de les 
                utiliser.
            </p>
            <CodeBlock language="gdscript">{readFile}</CodeBlock>
            <p>
                Dans l'exemple ci-dessus, nous lisons un fichier JSON. Nous pouvons utiliser la 
                fonction <IC>JSON.parse_string()</IC> pour convertir une chaîne de caractères JSON en une donnée utilisable dans notre
                jeu.
            </p>
        </section>

        <section>
            <h2>Supprimer un fichier de sauvegarde</h2>
            <p>
                Certains jeux peuvent permettre la suppression d'un fichier de sauvegarde. Pour ce faire, il suffit simplement d'utiliser
                la fonction <IC>DirAccess.remove_absolute()</IC> pour supprimer le fichier. Encore une fois, assurez-vous que le fichier
                existe avant de le supprimer pour éviter des erreurs.
            </p>
            <CodeBlock language="gdscript">{deleteFile}</CodeBlock>
        </section>
    </>;
}
