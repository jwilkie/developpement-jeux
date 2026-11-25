import IC from "@/components/InlineCode"
import OverflowContainer from "@/components/OverflowContainer";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Son dans un univers 2D",
    description: "Présentation du node AudioStreamPlayer2D et AudioListener2D pour jouer et écouter des sons à une position 2D dans un jeu vidéo.",
    keywords: ["AudioStreamPlayer2D", "AudioListener2D", "panning", "distance", "attenuation"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>AudioStreamPlayer2D</h2>
            <p>
                Le node <IC>AudioStreamPlayer</IC> permet de jouer un son ou de la musique de façon globale. Cela signifie que son audio sera 
                entendu de la même façon peu importe où se trouve le joueur dans le jeu vidéo. C'est pratique pour jouer de la musique de fond,
                des sons d'interface ou encore des sons qui sont toujours proches du joueur. Toutefois, si nous voulons jouer un audio qui est
                localisé dans l'univers du jeu vidéo, nous allons devoir utiliser le node <IC>AudioStreamPlayer2D</IC>.
            </p>
            <p>
                Le node <IC>AudioStreamPlayer2D</IC> est similaire au node <IC>AudioStreamPlayer</IC>, mais il permet de jouer un son ou de la
                musique à une position spécifique dans l'univers du jeu vidéo. Cela nous permet de créer un effet de spatialisation du son, où 
                le son sera entendu différemment selon la position du joueur par rapport à la source du son. Par exemple, si le joueur est loin
                de la source du son, le son sera plus faible et plus étouffé. De même, si le son se produit à la gauche du joueur, le son sera 
                entendu principalement par le côté gauche du casque ou des haut-parleurs. 
            </p>
        </section>

        <section>
            <h2>Configuration</h2>
            <p>
                La configuration du node <IC>AudioStreamPlayer2D</IC> est très similaire à celle du node <IC>AudioStreamPlayer</IC>, mais
                ajoute quelques propriétés supplémentaires pour gérer la spatialisation du son. Voici les principales propriétés supplémentaires
                à configurer:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Propriété</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Max Distance</td>
                            <td>
                                La distance maximale à laquelle le son peut être entendu. Si le joueur est plus loin que cette distance, le 
                                son ne sera plus entendu. 
                            </td>
                        </tr>
                        <tr>
                            <td>Attenuation</td>
                            <td>
                                Le niveau d'atténuation du son en fonction de la distance. Plus la valeur est élevée, plus le son sera atténué
                                rapidement lorsque le joueur s'éloigne de la source du son. 
                            </td>
                        </tr>
                        <tr>
                            <td>Panning Strength</td>
                            <td>
                                Le niveau de séparation du son entre les canaux gauche et droit. C'est un multiplicateur qui va déterminer la
                                distribution du son entre les canaux gauche et droit. Plus la valeur est élevée, plus le son sera séparé entre
                                la gauche et la droite.
                            </td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>
                                La position de la source du son dans l'univers du jeu vidéo. Si le son est à l'intérieur d'un node parent, la
                                position sera relative à ce node parent. Dans bien des cas, nous n'aurons pas besoin de modifier cette propriété`
                                pusque nous utiliserons la position du node parent pour déterminer la position du son. `
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Pour jouer un son ou de la musique à partir d'un node <IC>AudioStreamPlayer2D</IC>, nous utiliserons le code de la même façon que
                le node <IC>AudioStreamPlayer</IC>. Nous allons donc utiliser la méthode <IC>play()</IC> dans un script pour y arriver.
            </p>
        </section>

        <section>
            <h2>Point d'écoute</h2>
            <p>
                Pour que le joueur puisse entendre les sons et la musique dans l'univers du jeu vidéo, nous devons ajouter un point d'écoute. Le
                point d'écoute est généralement le personnage du joueur, mais il peut aussi être un autre élément de jeu. Pour définir le point
                d'écoute, nous allons ajouter le node <IC>AudioListener2D</IC> à l'élément de jeu duquel on voudra entendre les sons. 
            </p>
            <p>
                Lorsque nous ajoutons le node <IC>AudioListener2D</IC>, nous avons besoin de le spécifier comme étant le point d'écoute 
                principal. Dans ses propriétés, nous devons donc activer la propriété <IC>Current</IC>. Il est possible d'avoir plusieurs points
                d'écoute dans l'univers du jeu vidéo, mais un seul point d'écoute peut être le point d'écoute principal à la fois. Bref, si vous
                activez la propriété <IC>Current</IC> sur un point d'écoute, les autres points d'écoute auront cette propriété désactivée.
            </p>
        </section>
    </>;
}
