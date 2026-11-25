import Image from "next/image"

import audioOnglet from "@/public/img/audio-onglet.png"
import audioMultipleBus from "@/public/img/audio-multiple-bus.png"
import audioBus from "@/public/img/audio-bus.png"

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Bus audio",
    description: "Présentation du fonctionnement de base de l'audio dans Godot avec les bus audio.",
    keywords: ["Bus", "Audio", "Master", "volume"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Console audio professionnelle</h2>
            <p>
                Le système audio de Godot a été conçu pour atteindre les attentes des développeurs de jeux vidéo, mais aussi des designeurs
                audio professionnels. Il est basé sur un système de bus audio, qui permet de mixer et d'appliquer des effets à différents flux
                audio. 
            </p>
            <p>
                Pour accéder à la console audio de Godot, vous n'avez qu'à sélectionner l'onglet "Audio" dans le bas de l'éditeur. 
            </p>
            <Image src={audioOnglet} alt="Onglet audio dans Godot" />
            <p>
                Une fois l'interface ouverte, vous pouvez voir les différents bus audio disponibles. Par défaut, il y a un seul bus audio appelé
                "Master", qui est le bus principal. Nous pourrons toutefois ajouter d'autres bus audio pour nos besoins.
            </p>
            <Image src={audioMultipleBus} alt="Affichage des bus audio dans Godot" />
        </section>

        <section>
            <h2>Fonctionnement d'un bus audio</h2>
            <p>
                Un bus audio est un canal de traitement audio qui peut recevoir des flux audio provenant de différentes sources, typiquement de 
                fichiers audio lus par certains nodes dans Godot. Ces fichiers audio peuvent être des sons, de la musique, des voix, etc. Ces 
                bus audio permettent d'ajuster le volume, d'appliquer des effets et de mixer les différents flux audio avant de les envoyer vers
                un autre bus audio jusqu'à ce qu'ils atteignent le bus "Master", qui est le bus final qui envoie le son vers les haut-parleurs ou
                le casque de l'utilisateur. Plusieurs bus audio seront donc combinés pour créer un mixage audio final dans le bus "Master".
            </p>
            <p>
                En général, on va utiliser les bus audio pour séparer les différents types de sons dans un jeu vidéo. Par exemple, on peut avoir
                un bus audio pour la musique, un autre pour les effets sonores, un autre pour les voix, etc. Vous pouvez en créer autant que vous
                voulez pour bien organiser votre mixage audio. En séparant les différents types de sons dans des bus audio distincts, vous pouvez
                ajuster le volume de chaque type de son indépendamment.
            </p>
            <p>
                Une autre raison de créer des bus audio distincts est d'appliquer certains effets audio lors de certains événements dans le jeu
                vidéo. Par exemple, nous pouvons rediriger le son d'un bus audio vers un autre bus audio lorsqu'on est dans une caverne pour
                appliquer un effet de réverbération ou encore un effet de filtre passe-bas pour simuler un son sous l'eau. Nous verrons ces
                effets dans une prochaine page.
            </p>

        </section>
        
        <section>
            <h2>Éléments d'un bus audio</h2>
            <p>
                Chaque bus audio est composé de plusieurs éléments.
            </p>
            <Image src={audioBus} alt="Différents éléments d'un bus audio" />
            <ol>
                <li>
                    <strong>Nom du bus audio</strong>: C'est le nom du bus audio. À part le bus "Master", vous pouvez renommer les autres bus
                    audio pour mieux les identifier.
                </li>
                <li>
                    <strong>Solo</strong>: C'est un bouton qui permet d'isoler le bus audio. Lorsque vous activez le mode "Solo" sur un bus 
                    audio, vous n'entendrez que les sons provenant de ce bus audio. 
                </li>
                <li>
                    <strong>Mute</strong>: C'est un bouton qui permet de couper le son du bus audio.
                </li>
                <li>
                    <strong>Bypass</strong>: C'est un bouton qui permet de désactiver tous les effets appliqués au bus audio. Lorsque le mode
                    "Bypass" est activé, le son du bus audio sera transmis directement au bus suivant sans passer par les effets.
                </li>
                <li>
                    <strong>Volume</strong>: C'est un curseur qui permet d'ajuster le volume du bus audio. Le volume est exprimé en décibels (dB).
                    Un volume de 0 dB correspond au volume original du son, tandis qu'un volume négatif réduit le volume et un volume positif 
                    l'augmente. En général, à -80dB, le son est inaudible. 
                </li>
                <li>
                    <strong>Bus sortant</strong>: C'est un menu déroulant qui permet de choisir le bus audio vers lequel le son du bus audio
                    sera envoyé. Par défaut, tous les bus audio sont envoyés vers le bus "Master", mais vous pouvez rediriger le son vers des
                    bus intermédiaires pour appliquer des effets audio avant d'atteindre le bus "Master".
                </li>
            </ol>
        </section>
    </>;
}
