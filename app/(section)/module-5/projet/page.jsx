import IC from '@/components/InlineCode'
import ColoredBox from "@/components/ColoredBox";
import OverflowContainer from "@/components/OverflowContainer";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Première partie du projet de jeu",
    description: "Présentation du projet de jeu qui devra être présenté à la fin du deuxième unité d'apprentissage.",
    keywords: ["project", "game", "gdd"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Instructions</h2>
            <p>
                Pour le deuxième unité d'apprentissage de ce cours, vous devrez commencer à travailler sur votre projet de jeu que vous 
                avez défini dans votre document de design de jeu (GDD). Dans cette première partie du projet, vous devrez vous concentrer
                sur la mise en place des éléments de base de votre jeu, et y créer au moins un niveau jouable. De plus, vous devrez y 
                inclure les éléments mentionnés par votre professeur lors de sa rétroaction de votre GDD. 
            </p>
            <p>
                Voici les caractéristiques généralesque votre projet de jeu doit contenir:
            </p>
            <ul>
                <li>
                    Un ou des objets doivent être contrôlés par le joueur en utilisant les touches du clavier.
                </li>
                <li>
                    Des éléments doivent se déplacer de manière autonome sans intervention du joueur.
                </li>
                <li>
                    Les éléments du jeu doivent être représenté par des images ou textures (<em>sprites</em>).
                </li>
                <li>
                    Il doit y avoir une gestion des collisions entre les éléments du jeu.
                </li>
                <li>
                    Des éléments du jeu doivent être animé à l'aide de palette d'images (<em>spritesheets</em>).
                </li>
                <li>
                    Vous devez créer au moins un niveau jouable pour votre jeu avec tous les éléments nécessaires pour que le joueur 
                    puisse y jouer. 
                </li>
                <li>
                    Le jeu doit avoir une fin, soit par une condition de victoire et/ou de défaite.
                </li>
            </ul>
            <ColoredBox title="Attention:">
                Assurez-vous que les ressources utilisées soient libres de droits, créées par vous-même ou que vous ayez la permission de 
                les utiliser. N'oubliez pas de créditer les auteurs des ressources utilisées dans votre projet en ajoutant un fichier texte 
                de crédits qui listera les ressources utilisées, leurs auteurs respectifs et leurs licences si nécessaire.
            </ColoredBox>
            <p>
                Certains éléments de votre jeu ne sont pas nécessaire à ce moment du développement. Ils ne sont donc pas requis pour cette 
                première partie du projet.
            </p>
            <p>
                Voici quelques exemples d'éléments de jeu non requis:
            </p>
            <ul>
                <li>
                    Les menus et interfaces de votre jeu.
                </li>
                <li>
                    Les effets spéciaux avancés, comme les particules ou les shaders.
                </li>
                <li>
                    Les effets sonores et musiques.
                </li>
                <li>
                    La sauvegarde et chargement de la progression du joueur.
                </li>
                <li>
                    Les options de configuration du jeu.
                </li>
                <li>
                    Les systèmes de gestion des scores et des classements.
                </li>
            </ul>
        </section>

        <section>
            <h2>Configuration du répertoire GitHub</h2>
            <p>
                Pour cette première partie du projet, vous devez créer un répertoire GitHub pour votre projet de jeu. Ce répertoire
                vous servira à gérer le code source de votre projet, à gérer le suivi des tâches et à bien démontrer votre méthodologie 
                de développement à votre professeur. Vous devez donc vous assurer que votre répertoire GitHub est bien configuré.
            </p>
            <p>
                Voici les éléments avec lesquels vous devez faire attention sur GitHub pour votre projet de jeu:
            </p>
            <ul>
                <li>
                    Pour éviter le plagiat et la fraude scolaire, votre répertoire GitHub doit être privé. Un seul membre de votre équipe
                    doit créer le répertoire et inviter les autres membres de l'équipe à y accéder. Le professeur doit aussi être invité
                    à accéder au répertoire pour pouvoir évaluer votre projet.
                </li>
                <li>
                    Vous devez créer un projet dans votre répertoire GitHub pour gérer les tâches de votre projet. Vous devez créer un 
                    projet en type Kanban et vous assurer d'avoir les colonnes "Backlog", "In Progress" et "Done". 
                </li>
                <li>
                    Vous devez créer des issues pour chaque tâche de votre projet. Chaque issue doit être bien définie et claire, avec un
                    titre et une courte description. Vous pourrez créer des issues au fur et à mesure que vous avancez dans le
                    développement de votre projet, mais je vous recommande de créer des issues pour toutes les tâches prévisibles de 
                    votre projet dès le début. Vous pourrez toujours en créer de nouvelles ou en modifier si nécessaire.
                </li>
                <li>
                    Au fur et à mesure que vous avancez dans le développement de votre projet, assurez-vous de bien mettre à jour les
                    issues, de les assigner aux membres de l'équipe et de les déplacer dans les colonnes appropriées.
                </li>
                <li>
                    Votre projet doit contenir un dossier <IC>docs</IC> à la racine du répertoire. Ce dossier doit contenir votre document 
                    de design de jeu (GDD) et un fichier texte de crédits qui listera les ressources utilisées, leurs auteurs respectifs
                    et leurs licences si nécessaire.
                </li>
                <li>
                    Durant le développement de votre projet, assurez-vous de ne jamais travailler sur la branche <IC>main</IC> de votre
                    répertoire GitHub. À chaque fois que vous commencez à travailler sur une nouvelle tâche, créez une nouvelle branche à
                    partir de la branche <IC>main</IC> et travaillez sur cette nouvelle branche. Une fois que vous avez terminé votre 
                    tâche, créez une pull request pour fusionner votre branche dans la branche <IC>main</IC> directement dans l'interface
                    de GitHub. 
                </li>
                <li>
                    Chaque membre de l'équipe doit participer au développement du projet. Il est donc important que chaque membre de 
                    l'équipe ait des commits dans le répertoire. Autrement, le professeur pourrait pénaliser les membres de l'équipe qui
                    n'ont pas participé au développement du projet.
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
