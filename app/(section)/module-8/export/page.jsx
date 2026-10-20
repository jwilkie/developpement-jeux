import Image from 'next/image'

import exportAdd from '@/public/img/export-add.png'
import exportPath from '@/public/img/export-path.png'
import exportAll from '@/public/img/export-all.png'
import Link from 'next/link'
import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Créer un fichier exécutable",
    description: "Démonstration de l'exportation d'un projet vers un fichier exécutable pour une plateforme spécifique.",
    keywords: ["export", ".exe", "exécutable", "pkg"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Exportation d'un projet</h2>
            <p>
                La création d'un fichier exécutable, aussi appelé exportation d'un projet dans Godot, est un processus qui permet de générer
                un fichier binaire exécutable à partir d'un projet Godot pour une plateforme spécifique, comme Windows, Linux, macOS ou Android.
                Pour pouvoir créer un fichier exécutable, il est nécessaire d'avoir en sa possession les gabarits d'exportation pour la 
                plateforme cible. Si les gabarits d'exportation ne sont pas installés, vous devez les télécharger en suivant les instructions de
                la page précédente.
            </p>
            <p>
                <Link href="/module-8/install/">Gabarit d'exportation</Link>
            </p>
            <p>
                Une fois les gabarits d'exportation installés, nous pouvons procéder à l'exportation de la façon suivante:
            </p>
            <ol>
                <li>
                    Dans le menu principal de Godot, cliquez sur <em>Project</em> et puis sur <em>Export...</em>.
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, cliquez sur le bouton <em>Add...</em> pour ajouter une nouvelle configuration d'exportation. 
                    Vous pouvez ajouter plusieurs configurations d'exportation pour différentes plateformes si vous le souhaitez.
                    <Image src={exportAdd} alt="Ajout de configuration d'exportation dans la fenêtre d'exportation" />
                </li>
                <li>
                    Une fois la configuration d'exportation ajoutée, définissez le chemin d'exportation du fichier exécutable en cliquant sur
                    le bouton juste à côté du champ <em>Export Path</em>. Généralement, on choisit de créer un sous-dossier dans le répertoire 
                    de notre projet qu'on appelle <em>export</em>, <em>build</em> ou <em>bin</em> pour y placer le fichier exécutable.
                    <Image src={exportPath} alt="Définition du chemin d'exportation dans la fenêtre d'exportation" />
                </li>
                <li>
                    Pour exporter le projet dans ses différentes configurations d'exportation, cliquez sur le bouton <em>Export All</em>. Godot
                    générera un fichier exécutable pour chaque configuration d'exportation que vous avez ajoutée et les placera au chemin 
                    d'exportation que vous avez défini pour chaque configuration.
                    <Image src={exportAll} alt="Exportation du projet dans la fenêtre d'exportation" />
                </li>
            </ol>
            <ColoredBox title="À noter: ">
                Si vous exporter votre projet pour une plateforme spécifique, vous pouvez simplement définir le chemin d'exportation pour ce 
                fichier exécutable. Si toutefois vous souhaitez exporter votre projet pour plusieurs plateformes, il est recommandé de choisir 
                un chemin d'exportation pour un fichier ZIP à la place d'un fichier exécutable. Godot générera un fichier ZIP contenant les 
                fichiers exécutables pour chaque plateforme que vous avez configurée. 
            </ColoredBox>
        </section>
    </>;
}
