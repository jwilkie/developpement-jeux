import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fermeture du jeu",
    description: "Présentation de l'instruction de code permettant de fermer un jeu créé avec Godot correctement",
    keywords: ["exit", "fermer", "quit", "get_tree"],
    group: "notes"
}

const fermer = 
`get_tree().quit()`;

export default function Page() {
    return <>
        <section>
            <h2>Sortir du jeu</h2>
            <p>
                La fermeture du jeu se fait généralement au travers d'un menu où l'on permet au joueur de choisir une option pour quitter 
                le jeu. On va généralement préférer cette façon de faire, plutôt que de laisser le joueur cliquer sur le 
                bouton <IC>&times;</IC> de la fenêtre ou encore pire, d'aller dans le gestionnaire de tâches pour fermer le jeu.
            </p>
            <p>
                Nous n'avons pas encore vu comment créer un menu de jeu, mais nous pouvons tout de même savoir comment fermer le jeu de
                façon programmatique. Ça vous permettra de fermer le jeu lorsque l'utilisateur gagne ou perd, par exemple. Pour y arriver,
                nous utiliserons la commande suivante:    
            </p>
            <CodeBlock language="gdscript">{fermer}</CodeBlock>
            <ColoredBox title="À noter:">
                Nous avons déjà vu la fonction <IC>get_tree()</IC> dans une page précédante. Cette fonction nous permet d'accéder à 
                l'arbre de nodes du jeu. Cet arbre contient plusieurs fonctions et variables qui peuvent être utile au développement d'un
                jeu vidéo, comme par exemple la variable <IC>root</IC> pour accéder à la racine du projet ou encore des fonctions 
                comme <IC>change_scene_to_packed()</IC> qui nous permettent de changer complètement de scène.
            </ColoredBox>
        </section>
    </>;
}
