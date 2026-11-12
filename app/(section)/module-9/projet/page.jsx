import IC from '@/components/InlineCode'
import ColoredBox from "@/components/ColoredBox";
import OverflowContainer from "@/components/OverflowContainer";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Deuxième partie du projet de jeu",
    description: "Présentation de la deuxième partie du projet de jeu qui devra être présenté à la fin du troisième unité d'apprentissage.",
    keywords: ["project", "game", "gdd", "niveau", "interfaces", "menus", "gestions", "git"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Instructions</h2>
            <p>
                Pour le troisième unité d'apprentissage de ce cours, vous devrez continuer à travailler sur votre projet de jeu que vous 
                avez défini dans votre document de design de jeu (GDD). Dans cette deuxième partie du projet, vous devrez vous concentrer
                sur la création de niveaux supplémentaires, de menus, d'interfaces graphiques et de l'ajout du son et des effets spéciaux. 
                De plus, vous devrez y inclure les éléments mentionnés par votre professeur lors de sa rétroaction de votre GDD. 
            </p>
            <p>
                Voici les caractéristiques généralesque votre projet de jeu doit contenir:
            </p>
            <ul>
                <li>
                    Ajouter au moins 2 niveau supplémentaires à votre jeu. Ces niveaux doivent être différents du premier niveau et doivent
                    contenir de nouveaux défis pour le joueur.
                </li>
                <li>
                    Ajouter des menus. Ces menus doivent permettre au joueur de naviguer dans le jeu,
                    entre les niveaux et de configurer les options du jeu si nécessaire.
                </li>
                <li>
                    Ajouter des interfaces graphiques pour le joueur. Ces interfaces doivent permettre au joueur de voir les informations
                    importantes du jeu, comme le score, la vie du joueur, le temps restant, etc.
                </li>
                <li>
                    Ajouter des effets sonores et de la musique à votre jeu.
                </li>
                <li>
                    Ajouter des particules à votre jeu pour améliorer l'expérience visuelle du joueur. 
                </li>
                <li>
                    Ajouter la sauvegarde de la progression du joueur ou de son meilleur score. Le joueur doit pouvoir reprendre sa partie là 
                    où il l'avait laissée ou voir ses meilleurs scores dans un menu du jeu.
                </li>
            </ul>
            <ColoredBox title="Attention:">
                Assurez-vous que les ressources utilisées soient libres de droits, créées par vous-même ou que vous ayez la permission de 
                les utiliser. N'oubliez pas de créditer les auteurs des ressources utilisées dans votre projet en ajoutant un fichier texte 
                de crédits qui listera les ressources utilisées, leurs auteurs respectifs et leurs licences si nécessaire.
            </ColoredBox>
        </section>

        <section>
            <h2>Configuration du répertoire GitHub</h2>
            <p>
                Pour cette deuxième partie du projet, vous devez partir du répertoire GitHub que vous avez créé pour la première partie du 
                projet. Vous utiliserez le même répertoire et projet GitHub dans cette deuxoème partie du projet. 
            </p>
            <p>
                Voici les éléments avec lesquels vous devez faire attention sur GitHub pour votre projet de jeu:
            </p>
            <ul>
                <li>
                    Assurez-vous de bien créer une tâche pour chaque élément de votre projet. Chaque tâche doit être bien définie et claire.
                    Vous devez aussi bien mettre à jour le status de chaque tâche dans votre projet GitHub au fur et à mesure que vous 
                    avancez dans le développement de votre projet.
                </li>
                <li>
                    Assurez-vous de bien utiliser branches et les pull requests pour gérer le développement de votre projet. Chaque tâche 
                    doit être développée sur sa propre branche et fusionnée dans la branche <IC>main</IC> via une pull request. Vous ne devez 
                    jamais travailler directement sur la branche <IC>main</IC>.
                </li>
                <li>
                    Votre projet doit contenir un dossier <IC>docs</IC> à la racine du répertoire. Ce dossier doit contenir votre document 
                    de design de jeu (GDD) et un fichier texte de crédits qui listera les ressources utilisées, leurs auteurs respectifs
                    et leurs licences si nécessaire.
                </li>
                <li>
                    Chaque membre de l'équipe doit participer au développement du projet. Il est donc important que chaque membre de 
                    l'équipe ait des commits dans le répertoire ainsi que des pull requests. Autrement, le professeur pourrait pénaliser les 
                    membres de l'équipe qui n'ont pas participé au développement du projet.
                </li>
                <li>
                    Les remises de votre projet doivent se faire directement sur GitHub. Vous devrez créer un <em>release</em> pour chaque
                    remise de votre projet contenant le fichier exécutable de votre projet pour Windows. Si un des membres de votre équipe
                    utilise un Mac ou Linux, vous pouvez aussi ajouter les fichiers exécutables pour ces systèmes d'exploitation.
                </li>
            </ul>
        </section>

        <section>
            <h2>Remise du projet</h2>
            <p>
                Le professeur vous donnera les dates de remise de votre projet verbalement et sur eCité. Vous devrez créer 
                un <em>release</em> sur GitHub pour la remise de votre projet. Le <em>release</em> doit contenir le fichier exécutable de
                votre projet pour Windows pour qu'il puisse être testé par le professeur. Ce release doit être disponible sur GitHub avant
                la date limite de remise. Le professeur pourrait pénaliser les équipes ayant créer un <em>release</em> après la date limite
                de remise.
            </p>
        </section>

        <section>
            <h2>Pondération et évaluation</h2>
            <p>
                Votre projet de jeu sera évalué en fonction des critères suivants:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Critère</th>
                            <th>Description</th>
                            <th>Pondération</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Respect du GDD et des indications du professeur</td>
                            <td>
                                Le jeu respecte toutes les caractéristiques demandées par le professeur et respecte les éléments définis
                                dans votre document de design de jeu (GDD).
                            </td>
                            <td>30%</td>
                        </tr>
                        <tr>
                            <td>Qualité technique</td>
                            <td>
                                Le jeu fonctionne correctement sans bugs majeurs et utilise les concepts vus dans les modules de manière 
                                appropriée.
                            </td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td>Bonnes pratiques de développement</td>
                            <td>
                                Le projet est bien structuré, les nodes sont organisés de manière logique et les scripts sont bien 
                                commentés et lisibles.
                            </td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td>Méthodologie de développement</td>
                            <td>
                                Le projet est développé de manière itérative, avec du travail fait à chaque semaine bien visible dans le
                                répertoire GitHub du projet. Les tâches sont bien définies et bien mises à jour dans un projet sur GitHub.
                            </td>
                            <td>30%</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                L'évaluation du projet se fera durant chaque classe, à la fin de la période. Cela permettra au professeur de voir 
                l'avancement de votre projet et de vous donner des rétroactions pour améliorer votre projet avant la remise finale. 
                Assurez-vous donc qu'au moins un membre de votre équipe soit présent à chaque classe pour présenter l'avancement de votre
                projet. Les équipes qui ne présenteront pas leur projet durant les classes seront pénalisées dans l'évaluation de leur
                projet.
            </p>
            <p>
                Le professeur va aussi évaluer l'exécutable de votre projet une fois que vous aurez fait votre remise sur GitHub.
            </p>
        </section>
    </>;
}
