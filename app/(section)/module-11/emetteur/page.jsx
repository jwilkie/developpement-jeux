import IC from '@/components/InlineCode'
import Gallery from '@/components/Gallery';

import particule1 from '@/public/img/particule-1.webp'
import particule2 from '@/public/img/particule-2.webp'
import particule3 from '@/public/img/particule-3.jpeg'
import particule4 from '@/public/img/particule-4.png'
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Émetteurs de particules",
    description: "Présentation des particules dans les jeux vidéo pour créer des effets visuels intéressant et de comment les utiliser dans Godot.",
    keywords: ["GPUParticles2D", "Emitter", "texture"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Les particules d'un jeu vidéo sont des éléments visuels avancés qui permette de donner de la vie à notre jeu. Ce sont des 
                textures qui sont affichés à l'écran, mais simplement pour un effet visuel. Elles n'ont généralement pas d'impact sur le 
                comportement du jeu. On les retrouve dans les explosions, la fumée, les étincelles, les feuilles qui tombe d'un arbre, les 
                effets spéciaux, etc. 
            </p>
            <p>
                Voici quelques images d'exemple de particules de différents jeux vidéo pour mieux comprendre:
            </p>
            <Gallery pictures={[
                { image: particule1, caption: 'Particules de fumées dans The Legend of Zelda: The Wind Waker.'},
                { image: particule2, caption: 'Particules de magie dans Terraria.'},
                { image: particule3, caption: 'Particules de feuilles qui tombent dans Stardew Valley.'},
                { image: particule4, caption: 'Particules de pluie dans Minecraft.'},
            ]} />
            <p>
                Les particules sont donc une petite image que nous ferons appraître à l'écran et modifierons au fil du temps pour créer un 
                effet visuel intéressant. Il est possible d'avoir plusieurs centaines de particules à l'écran dans certains jeux vidéos.
            </p>
            <p>
                Les particules sont un élément classique des jeux vidéo et ils sont aujourd'hui géré par la carte graphique de l'ordinateur 
                ou le l'appareil utilisé. Cette approche nous permet d'afficher un très grand nombre de particules en même temps à l'écran 
                et de les transformer sans que l'ordinateur n'est besoin de trop travailler. C'est une optimisation des jeux vidéo moderne 
                qui nous sera très utile.
            </p>
        </section>

        <section>
            <h2>Création d'un émetteurs</h2>
            <p>
                Dans Godot, pour afficher et contrôller des particules à l'écran, nous utiliserons un émetteur de particules. Godot possède 
                2 émetteurs de particules différent, soit <IC>GPUParticules2D</IC> et <IC>CPUParticules2D</IC>. Comme leur nom l'indique,
                l'un s'exécute sur la carte graphique de votre ordinateur alors que l'autre s'exécute sur le processeur. Même si elles sont 
                un peu plus difficile à configurer, il est beaucoup plus performant d'utiliser celle qui s'exécute sur la carte graphique.
                Nous utiliserons donc le <IC>GPUParticules2D</IC> dans ce cours.
            </p>
            <p>
                Pour créer un émetteur de particule, vous pouvez aller dans n'importe quelle scène et y ajouter un 
                node <IC>GPUParticules2D</IC> que vous pourrez renommer par la suite par un nom plus significatif, comme <IC>Explosion</IC> ou
                encore <IC>LanceFlame</IC>. Par défaut, les particules sont émisent à partir du point où est positionné l'émetteur. N'hésitez 
                donc pas à le déplacer dans votre scène, ou à modifier sa propriété <IC>position</IC>, pour que les particules soient généré 
                ailleurs par rapport à votre scène.
            </p>
            <p>
                Il nous reste maintenant qu'à configurer notre émetteur et les particules pour qu'ils réagissent comme nous le voulons.
            </p>
        </section>

        <section>
            <h2>Configuration de l'émetteur</h2>
            <p>
                La majorité des configurations de l'émetteur de particules se retrouve directement dans l'inspecteur de propriété de Godot 
                lorsque vous sélectionner votre node <IC>GPUParticules2D</IC>. Vous n'aurez donc pas nécessairement à écrire de code. Voici 
                une liste des propriétés les plus utilisées:
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
                            <td><IC>Emitting</IC></td>
                            <td>
                                Permet de contrôller si l'émetteur de particule est actif par défaut. Si vous voulez activer les particules
                                par le code, vous devrez le désactiver. Vous pourrez ensuite utiliser la même propriété dans le code pour la 
                                réactiver lorsque vous voudrez avec <IC>node.emitting&nbsp;=&nbsp;true</IC>.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>Amount</IC></td>
                            <td>
                                La quantité de particules pouvant être généré par cet émetteur en même temps. Dépendant de l'effet que vous 
                                voulez créer, vous pourrez en mettre plus ou moins. Attention tout de même à ne pas en mettre trop puisque 
                                ceci peut avoir un impact sur les performances de votre jeu, surtout si vous avez plusieurs générateurs de 
                                particules qui émettent en même temps.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>Texture</IC></td>
                            <td>
                                La texture utilisé pour chaque particule générée par l'émetteur de particules. La texture peut 
                                potentiellement être un <em>SpriteSheet</em> pour avoir des particules animées. Un émetteur ne peut avoir
                                qu'une seule texture. Bref, si vous voulez générer des particules avec des textures différentes, vous devrez 
                                utiliser plusieurs émetteurs.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>Lifetime</IC></td>
                            <td>
                                La durée de vie des particules généré par cet émetteur. Les particules ont généralement une courte durée de 
                                vie, mais certaines pourraient durée plus longtemps. Le principe est que lorsqu'une particule a atteint sa 
                                durée de vie maximale, elle est détruite, ce qui libère de la place pour en générer une nouvelle.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>One Shot</IC></td>
                            <td>
                                Permet de contrôler si l'émetteur émet une seule fois toute ses particules et arrête ensuite. Si elle est 
                                activé, cette propriété va mettre la propriété <IC>emitting</IC> à <IC>false</IC> automatiquement lorsque 
                                toutes les particules auront été généré. On peut toujours le réactiver par la suite en remettant la 
                                propriété <IC>emitting</IC> à <IC>true</IC> dans le code. C'est pratique pour des particules liées à des 
                                événement qui arrive qu'une seule fois pour un élément, tel qu'une explosion.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>Explosiveness</IC></td>
                            <td>
                                Une valeur entre 0 et 1 qui indique si les particules doivent être généré tous en même temps ou une après 
                                l'autre. Plus la valeur approche de 1, plus les particules seront toutes généré en même temps. Une valeur 
                                de 0, quant à elle, indique que les particules sont généré les unes après les autres.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Il existe plusieurs autres propriétés, mais nous ne les couvrirons pas dans le cours. Elles pourraient toutefois vous être 
                utile. Je vous recommande donc d'aller voir la documentation des <IC>GPUParticules2D</IC> pour avoir une idée de ce qu'elles
                font. Vous pouvez la trouver ici:
            </p>
            <p>
                <a href="https://docs.godotengine.org/en/stable/classes/class_gpuparticles2d.html">Documentation - GPUParticules2D</a>
            </p>
            <p>
                Pour modifier le comportement des particules et non de son émetteur, nous devrons modifier l'émetteur et y ajouter 
                un <IC>ParticleProcessMaterial</IC>, ce qui est légèrement plus complexe. Nous verrons comment y arriver dans une prochaine
                page.
            </p>
        </section>

        <section>
            <h2>Signaux de l'émetteur</h2>
            <p>
                Les émetteurs de particules ont un signal indiquant qu'ils ont fini d'émettre toutes leurs particules. Cela va arriver 
                lorsque vous utiliser la propriété <IC>One Shot</IC> ou lorsque vous arrêtez d'émettre des particules en mettant la 
                propriété <IC>emitting</IC> à <IC>false</IC>. Le signal s'apelle <IC>finished()</IC> et vous pouvez le connecter à 
                vos nodes par l'interface de signaux de Godot.
            </p>
            <p>
                Ce signal peut être pratique pour exécuter du code lorsque toutes les particules de l'émetteur ont fini leur durée de vie.
                Un exemple classique est celui de l'explosion. Si un élément de notre jeu explose, nous voudrons le supprimer de notre jeu 
                avec la fonction <IC>queue_free()</IC> après que son explosion soit terminé. Si nous supprimons l'élément avant, nous allons
                généralement supprimer son émetteur de particule avant que toutes les particules n'est terminé leur effet, ce qui coupera 
                l'effet visuel de l'explosion.
            </p>
        </section>
    </>;
}
