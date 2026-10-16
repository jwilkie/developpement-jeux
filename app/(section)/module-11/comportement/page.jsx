import IC from '@/components/InlineCode'
import OverflowContainer from '@/components/OverflowContainer';
import Image from 'next/image';

import courbe from '@/public/img/courbe.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Comportement des particules",
    description: "Présentation des comportements avancés des particules pour que celle-ci puisse être contrôlé exactement comme vous le voulez.",
    keywords: ["process", "material", "velocity", "transform", "color", "angle", "gravity"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Process Material</h2>
            <p>
                Pour pouvoir commencer à utiliser l'émetteur de particules, nous devons ajouter un <IC>Process Material</IC>. Dans 
                l'inpecteur de propriété de l'émetteur de particule, dans la section <IC>Process Material</IC>, choisissez de créer un 
                nouveau <IC>Particle Process Material</IC>. Cela donnera un comportement par défaut à nos particules.
            </p>
            <p>
                Le comportement par défaut des particules est de simplement être affecté par une gravité fictive du jeu. Elles vont donc tout 
                simplement tomber vers le bas jusqu'à ce que la durée de vie de la particule soit atteinte. Si nous voulons modifier le 
                comportement des particules, nous devrons modifier le <IC>Particle Process Material</IC> que nous venons de créer.
            </p>
            <p>
                Au travers de cette page, nous présenterons plusieurs des propriétés les plus utile pour modifier le comportement des 
                particules. Nous ne les verrons toutefois pas tous. Si vous voulez une description plus technique de chaque propriété 
                du <IC>Particle Process Material</IC>, vous pouvez consulter la documentation officielle de Godot.
            </p>
            <p>
                <a href="https://docs.godotengine.org/en/stable/classes/class_particleprocessmaterial.html">
                    Documentation - ParticleProcessMaterial
                </a>
            </p>
        </section>

        <section>
            <h2>Propriétés des particules</h2>
            <p>
                Voici une liste des propriétés les plus simples et les plus utile que nous pouvons utiliser dans 
                le <IC>Particle Process Material</IC> pour modifier le comportement de nos particules:
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
                            <td>Spawn - Position - Emission Shape</td>
                            <td>
                                Permet de contrôller la forme d'où les particules sont générées. Par défaut les particules sont généré à un 
                                seul point, mais il est possible de changer cette forme pour générer les particules aléatoirement dans un 
                                espace plus grand. On peut, par exemple, générer les particules dans un cercle, dans une boîte, dans un 
                                anneau, etc. Lorsque vous choisissez une forme, vous aurez à modifier des propriétés supplémentaire pour 
                                définir la taille et la position de la forme. N'oubliez pas de les modifier pour vos propres besoins.
                            </td>
                        </tr>
                        <tr>
                            <td>Spawn - Angle</td>
                            <td>
                                Défini l'angle de rotation de la texture pour chaque particule en degré. On peut définir la rotation 
                                mininale et maximale de la texture. Si nous voulons que la texture de la particule puisse être dans n'importe 
                                quelle rotation, nous pourrions mettre un minimum de 0° et un maximum de 359°.
                            </td>
                        </tr>
                        <tr>
                            <td>Spawn - Velocity - Inherit Velocity Ratio</td>
                            <td>
                                Indique si l'on veut que les particules hérite complètement ou en partie de la vitesse de son noeud parent 
                                dans la scène. Par exemple, si nos particules sont des étincelles sur un élément qui se déplace rapidement,
                                nous voudrons probablement que ces étincelles hérite en partie ou complètement de la vitesse de l'élément sur 
                                lequel elles vont apparaître. Autrement, les étincelles auront toujours l'impression d'être derrière 
                                l'élément. Vous pouvez controller le ratio. Mettre 0 ici indique qu'on n'hérite aucunement de la vitesse du 
                                parent alors que 1 indique qu'on hérite à 100% de la vitesse du parent.
                            </td>
                        </tr>
                        <tr>
                            <td>Spawn - Velocity - Direction</td>
                            <td>
                                Indique la direction générale vers laquelle les particules se déplacerons. On doit ici définir un vecteur qui 
                                indiquera la direction de nos particules. Puisque nous avons un jeu en 2D, nous devrons spécifier une valeur 
                                de X et de Y pour ce vecteur qui vont définir la direction voulu.
                            </td>
                        </tr>
                        <tr>
                            <td>Spawn - Velocity - Spread</td>
                            <td>
                                Indique un angle de génération aléatoire dans lequel les particules seront généré. Celà permet de générer des 
                                particules qui vont se déplacer dans des directions différentes aléatoirement autour de la direction primaire 
                                choisi. On doit mettre ici un angle en degrés qui indiquera à quel point nous voulons des directions 
                                différentes ou non. Une valeur de 180° indique que les particules généré pourront se déplacer de -180° à 
                                180°, bref dans n'importe qu'elle direction autour de leur point d'apparition.
                            </td>
                        </tr>
                        <tr>
                            <td>Spawn - Velocity - Initial Velocity</td>
                            <td>
                                La vitesse initiale des particules à leur apparition dans la scène. On défini ici une valeur minimum et 
                                maximum qui nous permettent d'avoir des vitesses intiales différentes pour chaque particule.
                            </td>
                        </tr>
                        <tr>
                            <td>Accelerations - Gravity</td>
                            <td>
                                Permet de donner une accélération gravitationnelle aux particules générées. C'est pratique dans les jeux 2D 
                                de style plateforme où les personnages sont affecté par une gravité. Ça permet aux particules d'être affecté 
                                par une gravité aussi. Toutefois, dépendant du jeu ou de l'effet de particule que vous voulez bâtir, vous 
                                voudrez peut-être la désactiver en changeant la valeur Y du vecteur à 0.
                            </td>
                        </tr>
                        <tr>
                            <td>Accelerations - Linear Accel - Accel</td>
                            <td>
                                Permet de changer la vitesse des particules en fonction du temps. Ça permet de faire accélérer les particules
                                aux lieux qu'elles aillent tous la même vitesse tout le temps. On peut définir une valeur minimum et maximum
                                pour que les particules n'est pas tous la même accélération.
                            </td>
                        </tr>
                        <tr>
                            <td>Accelerations - Damping</td>
                            <td>
                                Permet de ralentir la vitesse des particules en fonction du temps. Ça permet de faire décélérer les particules
                                aux lieux qu'elles aillent tous la même vitesse tout le temps. On peut définir une valeur minimum et maximum
                                pour que les particules n'est pas tous le même ralentissement.
                            </td>
                        </tr>
                        <tr>
                            <td>Display - Scale</td>
                            <td>
                                Permet de définir la taille des particules à leur génération. Ça permet de générer des particules avec des 
                                tailles différentes si on spécifie une valeur minimale et maximale.
                            </td>
                        </tr>
                        <tr>
                            <td>Display - Color Curves - Color</td>
                            <td>
                                Permet de définir une teinte de couleur à nos particules. Toutes les particules seront généré avec la teinte
                                de couleur spécifié.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Courbes</h2>
            <p>
                Plusieurs propriétés des <IC>Particle Process Material</IC> sont des courbes. Ça permet de changer certaines propriété en 
                fonction du temps de vie de la particule. C'est entre autre utile pour les 
                propriétés <IC>Display - Scale - Scale Curve</IC> et <IC>Display - Color Curves - Alpha Curve</IC> qui nous permettent de 
                changer la taille et la transparence de la particule en fonction du temps.
            </p>
            <p>
                Lorsque vous aurez à créer des courbes, vous devrez ajouter des points dans un graphe. Généralement, au moins un point pour 
                la valeur initiale au temps 0 et un aute point pour la valeur finale au temps 1. Vous pourrez ensuite controller l'angle de
                ces points en cliquant dessus et en bougeant leur axe de direction. Vous pouvez même ajouter des points supplémentaires si 
                nécessaire.
            </p>
            <p>
                Les courbes sont un peu plus difficile à utilisé, mais elles peuvent créer des effets visuels très intéressant. Je vous 
                encourage à les explorer pour que vous ayez une idée de ce qui est possible de faire.
            </p>
            <Image src={courbe} alt="Définition de courbe dans Godot." />
        </section>
    </>;
}
