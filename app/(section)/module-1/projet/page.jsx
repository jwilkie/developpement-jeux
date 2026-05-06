import ColoredBox from "@/components/ColoredBox";
import OverflowContainer from "@/components/OverflowContainer";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Premier projet de jeu",
    description: "Présentation du projet de jeu qui devra être présenté à la fin du premier unité d'apprentissage.",
    keywords: ["spaceshooter", "bullet", "tir", "obstacle", "vaisseau", "spaceship"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Instructions</h2>
            <p>
                Pour le premier unité d'apprentissage de ce cours, vous devrez créer un petit jeu ayant certaines caractéristiques très 
                particulières. Le but de ce projet est de vous faire pratiquer les concepts vus dans les différents modules de ce premier
                UA. Voici les caractéristiques que votre projet de jeu doit contenir:
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
                    L'arrière-plan du jeu doit défiler de manière continue pour donner une impression de mouvement.
                </li>
                <li>
                    Le jeu doit avoir une fin, soit par une condition de victoire et/ou de défaite.
                </li>
            </ul>
            <p>
                Vous êtes libre de choisir le thème, le style et les mécaniques de votre jeu tant que les caractéristiques mentionnées 
                précédemment sont respectées. Vous pouvez donc être créatif et original dans la conception de votre jeu. Si vous n'avez 
                pas d'idée, le de tir spatial est un thème classique qui peut être facilement adapté pour répondre aux exigences du projet. 
            </p>
            <ColoredBox title="Attention:">
                Assurez-vous que les ressources utilisées soient libres de droits, créées par vous-même ou que vous ayez la permission de 
                les utiliser. N'oubliez pas de créditer les auteurs des ressources utilisées dans votre projet en ajoutant un fichier texte 
                de crédits qui listera les ressources utilisées, leurs auteurs respectifs et leurs licences si nécessaire.
            </ColoredBox>
        </section>

        <section>
            <h2>Évaluation</h2>
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
                            <td>Respect des caractéristiques</td>
                            <td>Le jeu respecte toutes les caractéristiques demandées</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>Qualité technique</td>
                            <td>Le jeu fonctionne correctement sans bugs majeurs et utilise les concepts vus dans les modules de manière appropriée</td>
                            <td>30%</td>
                        </tr>
                        <tr>
                            <td>Originalité et créativité</td>
                            <td>Le jeu présente une idée originale et créative dans son thème, son style ou ses mécaniques</td>
                            <td>20%</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Remise du projet</h2>
            <p>
                Les modalités de remise du projet seront communiquées directement par votre enseignant. Assurez-vous de respecter les délais
                de remise et de fournir tous les éléments requis pour l'évaluation de votre projet. 
            </p>
        </section>
    </>;
}
