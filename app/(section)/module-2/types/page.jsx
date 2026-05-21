/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Types de collisions",
    description: "Présentation des différentes techniques de détection de collisions entre les éléments d'un jeu vidéo dans le moteur de jeu Godot.",
    keywords: ["rectangle", "polygone", "zone", "physique"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Il existe de nombreuses techniques de détection de collisions dans les jeux vidéos. Certaines sont plus efficaces, d'autres 
                sont plus précises. Il y en a qui sont plus propice à certains types de jeux alors que d'autres sont plus génériques. De la 
                même manière, certaines techniques sont plus faciles à implémenter que d'autres. Bref, il y a beaucoup et il sera important 
                choisir la bonne technique pour la bonne situation. 
            </p>
            <p>
                Dans ce modules, nous allons présenter 2 techniques de détection de collisions relativement simples, soit les collisions par 
                rectangle et les collisions par zone. Ces 2 techniques sont relativement faciles à implémenter et sont très efficaces pour
                les jeux 2D qui ne nécessitent pas une grande précision dans la détection de collisions ou des comportement de physique
                complexes. Nous verrons comment utiliser des techniques plus avancées dans les prochains modules.
            </p>
        </section>
    </>;
}
