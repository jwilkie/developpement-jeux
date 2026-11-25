import Image from "next/image"
import IC from "@/components/InlineCode"

import audioEffets from "@/public/img/audio-effets.png"
import OverflowContainer from "@/components/OverflowContainer";
import CodeBlock from "@/components/CodeBlock";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Effets sonores",
    description: "Présentation de quelques effets sonores que l'on peut appliquer aux bus audio.",
    keywords: ["Audio Bus", "effect", "reverb", "low-pass", "high-pass", "chorus", "distortion"],
    group: "notes"
}

const volume = 
`var index_bus_musique = AudioServer.get_bus_index("Musique")

# Ajustement du volume du bus audio "Musique" à 
# l'aide d'un slider
func _on_value_changed(value) -> void:
    AudioServer.set_bus_volume_db(index_bus_musique, value)`;

const effect = 
`var index_bus_master = AudioServer.get_bus_index("Master")

func _on_body_entered(body: Node2D) -> void:
	# Ajouter l'effet de réverbération lorsqu'on 
    # entre dans une grotte
	AudioServer.add_bus_effect(index_bus_master, AudioEffectReverb.new(), 0)

func _on_body_exited(body: Node2D) -> void:
	# Supprimer l'effet de réverbération lorsqu'on 
    # sort de la grotte
	AudioServer.remove_bus_effect(index_bus_master, 0)`;

const send = 
`var index_bus_musique = AudioServer.get_bus_index("Musique")
var index_bus_effets = AudioServer.get_bus_index("EffetsSonores")

func _on_body_entered(body: Node2D) -> void:
	# Redirection du son vers le bus ZoneEau 
    # lorsqu'on entre sous l'eau
	AudioServer.set_bus_send(index_bus_musique, "ZoneEau")
	AudioServer.set_bus_send(index_bus_effets, "ZoneEau")

func _on_body_exited(body: Node2D) -> void:
	# Redirection du son vers le bus Master 
    # lorsqu'on sort de l'eau
	AudioServer.set_bus_send(index_bus_musique, "Master")
	AudioServer.set_bus_send(index_bus_effets, "Master")`;

export default function Page() {
    return <>
        <section>
            <h2>Ajouter un effet</h2>
            <p>
                Dans les pages précédentes, nous avons vu comment créer des bus audio et comment y faire jouer des sons et de la musique grâce
                au node <IC>AudioStreamPlayer</IC> et <IC>AudioStreamPlayer2D</IC>. Une fois que nous commençons à avoir des sons dans notre bus 
                audio, nous pouvons commencer à appliquer des effets audio pour créer des ambiances sonores intéressantes. 
            </p>
            <p>
                Pour ajouter un effet audio à un bus audio, il suffit de sélectionner le bus audio dans la console audio de Godot et de cliquer
                sur le bouton "Add Effect". Cela va ouvrir une liste d'effets audio disponibles que nous pouvons ajouter à notre bus audio.
                Nous pouvons ajouter autant d'effets audio que nous voulons à un bus audio. Les effets audio seront appliqués dans l'ordre dans
                lequel ils ont été ajoutés. 
            </p>
            <Image src={audioEffets} alt="Ajouter un effet audio à un bus audio" />
        </section>

        <section>
            <h2>Types d'effets audio</h2>
            <p>
                Godot propose plusieurs types d'effets audio préfaits que nous pouvons ajouter à nos bus audio. Ces effets audio peuvent être
                configuré pour créer différents résultats sonores, comme simuler un écho, un son sous l'eau, un son dans une caverne, etc. 
                Voici quelques exemples d'effets audio que nous pouvons ajouter à nos bus audio:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Effet audio</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Reverb</td>
                            <td>
                                L'effet de réverbération simule la réflexion du son dans un espace. Il peut être utilisé pour créer l'illusion
                                d'un son qui se produit dans une grande salle, une caverne ou un espace ouvert. 
                            </td>
                        </tr>
                        <tr>
                            <td>LowPassFilter</td>
                            <td>
                                L'effet de filtre passe-bas permet de réduire les fréquences élevées d'un son. Il va généralement atténuer les
                                sons aigus et laisser passer les sons graves, ce qui peut créer l'illusion d'un son qui se produit sous l'eau ou 
                                dans une pièce fermée.
                            </td>
                        </tr>
                        <tr>
                            <td>HighPassFilter</td>
                            <td>
                                L'effet de filtre passe-haut est le contraire du filtre passe-bas. Il va atténuer les sons graves et laisser 
                                passer les sons aigus, ce qui peut créer l'illusion d'un son qui se produit dans un très grand espace.
                            </td>
                        </tr>
                        <tr>
                            <td>Chorus</td>
                            <td>
                                L'effet de chorus permet de créer un effet de chorale, comme si plusieurs voix ou instruments jouaient en même
                                temps. Il est utilisé dans la musique traditionnelle pour simuler qu'un chanteur ou un instrument joue en groupe. 
                                Dans un jeu vidéo, il peut être utilisé pour créer un effet de voix ou d'instrument qui se répète légèrement 
                                décalé dans le temps, ce qui peut créer une ambiance sonore intéressante.
                            </td>
                        </tr>
                        <tr>
                            <td>Distortion</td>
                            <td>
                                L'effet de distorsion permet de créer un son plus agressif. Il est souvent utilisé dans la musique rock ou 
                                métal. Dans un jeu vidéo, il peut être utilisé pour créer des effets de glitch ou de bruit blanc dans votre
                                mixage audio.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Manipulation dans le code</h2>
            <p>
                Nous pouvons également manipuler les effets et les bus audio dans le code. Nous pouvons faire ceci à l'aide de la
                classe <IC>AudioServer</IC>. Cette classe nous permet de créer, supprimer et configurer les bus audio directement dans le code,
                ce qui peut être utile pour manipuler le volume des bus audio ou pour ajouter et supprimer dynamiquement des effets audio à un
                bus.
            </p>
            <p>
                Pour ajuster le volume d'un bus audio, nous pouvons utiliser la méthode <IC>set_bus_volume_db(bus_index, volume_db)</IC>. Cette
                méthode pourrait être utilisée de cette façon:
            </p>
            <CodeBlock language="gdscript">{volume}</CodeBlock>
            <p>
                Pour ajouter un effet audio à un bus audio, nous pouvons utiliser la méthode <IC>add_bus_effect(bus_index, effect)</IC>
                de la façon suivante:
            </p>
            <CodeBlock language="gdscript">{effect}</CodeBlock>
            <p>
                Finalement, pour changer la sortie d'un bus audio vers un autre bus audio, nous pouvons utiliser la 
                méthode <IC>set_bus_send(bus_index, target_bus_name)</IC>. On pourrait l'utiliser de cette façon:
            </p>
            <CodeBlock language="gdscript">{send}</CodeBlock>
        </section>
    </>;
}
