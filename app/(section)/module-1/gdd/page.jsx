import { DownloadBlock, File } from "@/components/DownloadBlock";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Document de design de jeu",
    description: "Présentation de la première évaluation du cours, soit la création d'un document de design de jeu.",
    keywords: ["markdown", "word", "gabarit", "template", "gdd", "game design document"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Mise en situation</h2>
            <p>
                Dans la cadre de ce cours, vous devrez développer un jeu vidéo utilisant l'engin de jeu Godot. Ceci étant dit, avant de 
                développer un jeu vidéo, il est important de planifier le projet et de documenter ses idées. C'est pourquoi vous devrez 
                créer un document de design de jeu (GDD) pour votre projet.
            </p>
            <p>
                Le document de design de jeu est un document qui décrit le concept, les mécaniques, l'histoire, les personnages et les
                autres éléments d'un jeu vidéo. Il sert de référence pour l'équipe de développement, donc les programmeurs, les artistes, les
                testeurs et les autres membres de l'équipe. Il permet de s'assurer que tout le monde est sur la même longueur d'onde et que 
                le jeu est développé selon les mêmes objectifs et les mêmes standards.
            </p>
            <p>
                Dans notre cas, le document de design de jeu servira à planifier votre projet de jeu vidéo et à documenter vos idées. Il 
                permettra aussi à votre enseignant de comprendre votre concept et de vous donner des commentaires constructifs pour améliorer
                votre projet.
            </p>
        </section>

        <section>
            <h2>Équipe</h2>
            <p>
                Le projet de jeu vidéo sera développé en équipe de 2 ou 3 étudiants. Vous devrez choisir vos coéquipiers et vous assurer que
                vous pouvez travailler ensemble efficacement. Vous aurez jusqu'à la semaine 3 pour former votre équipe et soumettre vos noms 
                à votre enseignant.
            </p>
        </section>

        <section>
            <h2>Remise</h2>
            <p>
                La remise du document de design de jeu se fera sous forme d'un fichier Word, PDF ou Markdown. Vous devez soumettre votre 
                document de design de jeu sur eCité. Il doit être remis avant la date limite indiqué dans le pigeonnier sur eCité. Tout 
                retard dans la remise du document de design de jeu sera pénalisé selon les règles du cours. 
            </p>
        </section>

        <section>
            <h2>Contenu du jeu et création du GDD</h2>
            <p>
                Votre jeu doit au minimum respecter les critères suivants:
            </p>
            <ul>
                <li>
                    Le jeu doit être en 2 dimensions (2D).
                </li>
                <li>
                    Le jeu doit avoir plusieurs niveaux.
                </li>
            </ul>
            <p>
                Il est important de vous rencontrer en équipe pour discuter de votre concept de jeu et de lancer différentes idées. C'est 
                souvent en discutant et en faisant des remue-méninges que les meilleures idées émergent. Essayez d'être original. Une fois 
                les idées de base de votre concept décidé, vous devrez les documenter dans votre document de design de jeu. Vous pourrez 
                utiliser le gabarit fourni pour vous aider.
            </p>
        </section>

        <section>
            <h2>Gabarit</h2>
            <p>
                Le gabarit ci-dessous est un modèle que vous pouvez utiliser pour créer votre document de design de jeu. Il est disponible 
                en Markdown, mais vous pouvez facilement le convertir en Word si vous le préférez. Vous pouvez aussi utiliser un autre 
                gabarit, mais assurez-vous qu'il contienne au moins les mêmes éléments que le gabarit fourni. 
            </p>
            <p>
                Vous pouvez le télécharger ici:
            </p>
            <DownloadBlock>
                <File fileName="document-design-jeu.md" path="/labs/gdd.md" />
            </DownloadBlock>
        </section>

        <section>
            <h2>Exemple de GDD</h2>
            <ul>
                <li>
                    <a href="https://www.gamedevs.org/uploads/grand-theft-auto.pdf" target="_blank">
                        GDD du premier Grand Theft Auto (GTA)
                    </a>
                </li>
                <li>
                    <a href="https://archive.org/details/DeusExDesignDoc11081997/page/n17/mode/2up" target="_blank">
                        GDD de Deus Ex
                    </a>
                </li>
                <li>
                    <a href="https://www.graybeardgames.com/download/diablo_pitch.pdf" target="_blank">
                        GDD de Diablo
                    </a>
                </li>
            </ul>
        </section>
    </>;
}
