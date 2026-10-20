import Image from 'next/image'

import exportTemplate from '@/public/img/export-template.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Gabarit d'exportation",
    description: "Démonstration du téléchargement et de l'installation des gabarits d'exportation de Godot.",
    keywords: ["export", "template", "install", "mirror", "download"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Précompilation de Godot</h2>
            <p>
                Pour pouvoir créer un fichier exécutable à partir d'un projet Godot, il est nécessaire d'avoir en sa possession les gabarits
                d'exportation. Un gabarit d'exportation est un fichier binaire contenant une version précompilée de Godot pour une plateforme
                spécifique, comme Windows, Linux, macOS ou Android. Lorsque l'on voudra créer un fichier exécutable pour une plateforme donnée, 
                Godot utilisera le gabarit d'exportation correspondant pour générer le fichier exécutable. 
            </p>
            <p>
                Par défaut, Godot ne fournit pas les gabarits d'exportation pour toutes les plateformes, car cela augmenterait considérablement 
                la taille du téléchargement de l'éditeur. Il est donc nécessaire de télécharger et d'installer les gabarits d'exportation
                séparément sur votre ordinateur. Heureusement, Godot propose un outil intégré pour faciliter le téléchargement et l'installation
                des gabarits d'exportation. 
            </p>
            <p>
                Pour télécharger et installer les gabarits d'exportation, suivez les étapes suivantes:
            </p>
            <ol>
                <li>
                    Dans le menu principal de Godot, cliquez sur <em>Editor</em> et puis sur <em>Manage Export Templates</em>.
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, cliquez sur le bouton <em>Download and Install</em> pour lancer le téléchargement et 
                    l'installation des gabarits d'exportation. 
                </li>
                <li>
                    Godot téléchargera automatiquement les gabarits d'exportation depuis le site officiel et les installera sur votre 
                    ordinateur au chemin spécifié juste au-dessus du bouton <em>Download and Install</em>. Cette opération peut prendre
                    plusieurs minutes selon la vitesse de votre connexion Internet.
                </li>
                <li>
                    Une fois le téléchargement et l'installation terminés, vous pourrez voir le texte suivant dans le haut à droite de la 
                    fenêtre: <em>Export templates are installed and ready to be used</em>.
                </li>
                <li>
                    Fermer la fenêtre.
                </li>
            </ol>
            <p>
                Une fois les gabarits d'exportation installés, nous serons en mesure de créer un fichier exécutable à partir d'un projet Godot
                pour une plateforme spécifique, ce que nous verrons dans la prochaine page.
            </p>
            <Image src={exportTemplate} alt="Fenêtre de gestion des gabarits d'exportation" />
        </section>
    </>;
}
