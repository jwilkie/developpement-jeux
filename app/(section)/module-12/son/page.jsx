import Image from "next/image"
import IC from "@/components/InlineCode"

import audioStreamPlayer from "@/public/img/audio-stream-player.png"
import OverflowContainer from "@/components/OverflowContainer";
import CodeBlock from "@/components/CodeBlock";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Son et musique",
    description: "Présentation du node AudioStreamPlayer pour la lecture de fichiers audio dans un jeu vidéo.",
    keywords: ["AudioStreamPlayer", "play", "stop", "loop", "pitch", "autoplay", "son", "musique"],
    group: "notes"
}

const play = 
`@onready var son : AudioStreamPlayer = $AudioStreamPlayer

func _process(delta) -> void:
    if Input.is_action_just_pressed("action"):
        son.play()`;

export default function Page() {
    return <>
        <section>
            <h2>AudioStreamPlayer</h2>
            <p>
                Lorsque nous voulons jouer un son ou de la musique dans un jeu vidéo, nous allons généralement utiliser le 
                node <IC>AudioStreamPlayer</IC>. Ce node permet de lire un fichier audio et de le jouer dans le jeu vidéo lorsque nous le 
                voulons. En général, nous allons créer un node <IC>AudioStreamPlayer</IC> pour chaque son ou musique que nous voulons jouer dans
                le jeu vidéo.
            </p>
            <p>
                Dans un jeu, nous allons généralement ajouter ce node à un élément de jeu qui pourra émettre le son ou la musique. Par exemple,
                si nous voulons jouer un son lorsque le joueur tire avec son arme, nous allons ajouter un node <IC>AudioStreamPlayer</IC> au 
                joueur ou à son arme. Pour des voix de dialogue, nous allons ajouter un node <IC>AudioStreamPlayer</IC> à la boîte de dialogue
                ou à l'élément de jeu qui représente le personnage qui parle. Pour de la musique, nous allons généralement ajouter le 
                node <IC>AudioStreamPlayer</IC> à un des nodes principaux du jeu, comme le niveau ou le menu principal du jeu.
            </p>
        </section>
        
        <section>
            <h2>Configuration</h2>
            <p>
                Lorsque nous ajoutons un node <IC>AudioStreamPlayer</IC> à un élément de jeu, nous aurons plusieurs propriétés à configurer pour
                que le son ou la musique soit joué correctement. Voici les principales propriétés à configurer:
            </p>
            <Image src={audioStreamPlayer} alt="Propriétés du node AudioStreamPlayer" />
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
                            <td>Stream</td>
                            <td>
                                Le fichier audio à jouer. Vous pouvez simplement glisser-déposer un fichier audio de vos ressources du jeu dans 
                                cette propriété pour le sélectionner. Godot supporte la plupart des formats audio populaires, tel que 
                                le <IC>.wav</IC>, <IC>.ogg</IC> et <IC>.mp3</IC>.
                            </td>
                        </tr>
                        <tr>
                            <td>Volume dB</td>
                            <td>
                                L'ajustement du volume du son ou de la musique en décibels. On l'utilise pour balancer le son d'un fichier 
                                audio qui serait trop fort ou trop faible par rapport aux autres sons du jeu vidéo. 
                            </td>
                        </tr>
                        <tr>
                            <td>Pitch Scale</td>
                            <td>
                                Ajustement de la vitesse de lecture du son ou de la musique. Plus le pitch est élevé, plus le son sera aigu et
                                rapide. À l'inverse, plus le pitch est bas, plus le son sera grave et lent. 
                            </td>
                        </tr>
                        <tr>
                            <td>Autoplay</td>
                            <td>
                                Si cette propriété est activée, le son ou la musique sera joué automatiquement lorsque le
                                node <IC>AudioStreamPlayer</IC> sera ajouté à la scène. Cette propriété est utile pour les musiques de fond ou
                                les sons qui doivent être joués automatiquement lorsque le jeu commence. 
                            </td>
                        </tr>
                        <tr>
                            <td>Max Polyphony</td>
                            <td>
                                Le nombre maximum de sons ou de musiques qui peuvent être joués simultanément par ce 
                                node <IC>AudioStreamPlayer</IC>. Si le nombre de sons ou de musiques joués dépasse cette valeur, les sons ou
                                musiques les plus anciens seront arrêtés pour démarrer les nouveaux.
                            </td>
                        </tr>
                        <tr>
                            <td>Bus</td>
                            <td>
                                Le bus audio sur lequel le son ou la musique sera joué. Par défaut, le son ou la musique sera joué sur le bus
                                "Master", mais il est généralement préférable de créer un bus audio distinct pour chaque type d'élément audio
                                dans le jeu vidéo. Par exemple, nous pouvons créer un bus audio pour la musique, un autre pour les effets 
                                sonores.
                            </td>
                        </tr>
                        <tr>
                            <td>Looping</td>
                            <td>
                                Si cette propriété est activée, le son ou la musique sera joué en boucle. Cette propriété est utile pour les
                                musiques de fond ou les sons qui doivent être joués en continu dans le jeu vidéo.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Jouer ou arrêter un son</h2>
            <p>
                À part la musique ou les ambiances de fond qui peuvent être jouées automatiquement, nous allons généralement jouer nos fichiers
                audio à des moments précis dans le jeu vidéo. Nous allons donc devoir les jouer à partir d'un script. Pour ce faire, nous allons
                utiliser la méthode <IC>play()</IC>.
            </p>
            <CodeBlock language="gdscript">{play}</CodeBlock>
            <p>
                De façon similaire, si vous voulez interrompre la lecture d'un son ou d'une musique, vous pouvez utiliser la 
                méthode <IC>stop()</IC>. Cette méthode arrête la lecture du son ou de la musique et réinitialise la position de lecture à zéro. 
            </p>
        </section>
    </>;
}
