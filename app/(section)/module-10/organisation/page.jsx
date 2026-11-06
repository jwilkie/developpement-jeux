import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Organisation des composants graphiques",
    description: "Présentation des différents nodes conteneurs qui permettent d'organiser les composants graphiques dans un jeu.",
    keywords: ["menu", "interface", "UI", "BoxContainer", "CenterContainer", "MarginContainer", "PanelContainer", "ScrollContainer"],
    group: "notes"
}


export default function Page() {
    return <>
        <section>
            <h2>Conteneurs</h2>
            <p>
                Placer des composants graphiques directement dans la scène peut rapidement devenir difficile à gérer, spécialement si notre 
                jeu peut avoir plusieurs résolutions d'écran. Pour faciliter l'organisation des composants graphiques, Godot propose plusieurs 
                nodes conteneurs qui permettent de gérer la position des composants graphiques enfants. Ces nodes conteneurs sont des nodes qui
                ne sont pas nécessairement visibles, mais qui permettent de gérer la position des composants graphiques enfants. Vous pouvez 
                les comparer à des <IC>&lt;div&gt;</IC> en HTML auquel on applique du <IC>CSS</IC> pour utiliser le <IC>flex</IC>, 
                le <IC>grid</IC> ou encore le <IC>position</IC>.
            </p>
            <p>
                Il existe de nombreux nodes conteneurs dans Godot, mais nous allons nous concentrer sur les plus utiles pour créer des 
                interfaces graphiques.
            </p>

            <section>
                <h3>BoxContainer</h3>
                <p>
                    Ils sont divisé en deux types: <IC>HBoxContainer</IC> et <IC>VBoxContainer</IC>. Ces conteneurs permettent d'organiser les 
                    composants graphiques enfants un à la suite de l'autre, soit horizontalement ou verticalement. Ils sont très utiles pour 
                    créer des menus où les boutons sont alignés. Vous pouvez les configurer avec les propriétés suivantes:
                </p>
                <ul>
                    <li>
                        <IC>alignment</IC>: Permet d'aligner les composants graphiques enfants au début, au centre ou à la fin du conteneur,
                        similairement au <IC>align-items</IC> de <IC>flex</IC> en CSS.
                    </li>
                    <li>
                        <IC>Theme Override</IC>/<IC>Constants</IC>/<IC>separation</IC>: La distance entre les composants graphiques enfants
                        en pixels.
                    </li>
                </ul>
            </section>

            <section>
                <h3>GridContainer</h3>
                <p>
                    Ce conteneur permet d'organiser les composants graphiques enfants en grille. Il est très utile pour créer des menus où les
                    boutons sont alignés en grille ou encore pour créer des inventaires, des menu d'options ou encore des tableaux de scores. 
                    Dans un <IC>GridContainer</IC>, on spécifie le nombre de colonnes et les composants graphiques enfants sont placés 
                    automatiquement dans la grille de gauche à droite et de haut en bas. Vous pouvez configurer le nombre de colonnes avec la
                    propriété suivante:
                </p>
                <ul>
                    <li>
                        <IC>columns</IC>: Le nombre de colonnes dans la grille.
                    </li>
                </ul>
            </section>

            <section>
                <h3>CenterContainer</h3>
                <p>
                    Ce conteneur permet de centrer les composants graphiques enfants dans le conteneur. On va souvent l'utiliser
                    comme parent à un autre conteneur pour centrer plusieurs éléments dans la scène.
                </p>
            </section>

            <section>
                <h3>MarginContainer</h3>
                <p>
                    Ce conteneur permet de créer des marges autour des composants graphiques enfants. On va souvent l'utiliser pour créer
                    des espaces entre les composants graphiques et les bords de l'écran. Vous pouvez configurer la taille des marges avec les
                    propriétés suivantes:
                </p>
                <ul>
                    <li>
                        <IC>Theme Override</IC>/<IC>Constants</IC>/<IC>marginLeft</IC>: La marge à gauche du conteneur en pixels.
                    </li>
                    <li>
                        <IC>Theme Override</IC>/<IC>Constants</IC>/<IC>marginTop</IC>: La marge en haut du conteneur en pixels.
                    </li>
                    <li>
                        <IC>Theme Override</IC>/<IC>Constants</IC>/<IC>marginRight</IC>: La marge à droite du conteneur en pixels.
                    </li>
                    <li>
                        <IC>Theme Override</IC>/<IC>Constants</IC>/<IC>marginBottom</IC>: La marge en bas du conteneur en pixels.
                    </li>
                </ul>
            </section>

            <section>
                <h3>PanelContainer</h3>
                <p>
                    Ce conteneur est visuel. Il permet de créer un panneau autour des composants graphiques enfants. On va souvent l'utiliser 
                    pour créer une boîte stylisée autour d'un groupe de composants graphiques. Pour modifier l'apparence du panneau, on peut
                    modifier la propriété suivante:
                </p>
                <ul>
                    <li>
                        <IC>Theme Override</IC>/<IC>Styles</IC>/<IC>panel</IC>: Permet de modifier l'apparence du panneau avec 
                        un <IC>StyleBox</IC>. On va généralement créer un <IC>StyleBoxFlat</IC> ou un <IC>StyleBoxTexture</IC> pour modifier 
                        l'apparence du panneau.
                    </li>
                </ul>
            </section>

            <section>
                <h3>ScrollContainer</h3>
                <p>
                    Ce conteneur permet de créer une zone défilante pour les composants graphiques enfants. On va souvent l'utiliser pour
                    créer des menus avec beaucoup d'éléments, comme une liste d'options ou un inventaire. En général, on va placer 
                    un <IC>VBoxContainer</IC>, un <IC>HBoxContainer</IC>, ou un <IC>GridContainer</IC> à l'intérieur 
                    du <IC>ScrollContainer</IC> pour organiser les composants graphiques enfants. 
                </p>
            </section>
        </section>

        <section>
            <h2>Mise en page</h2>
            <p>
                Par défaut, les composants graphiques et conteneurs de Godot vont généralement prendre la taille qui leur est nécessaire pour 
                afficher leur contenu. Si vous voulez que les composants graphiques prennent plus ou moins d'espace, vous pouvez utiliser les 
                points de contrôle du noeud dans l'éditeur de scène ou encore modifier la propriété  <IC>size</IC> de l'élément. Ce n'est 
                toutefois pas la meilleure façon puisque. En effet, si vous changez la taille d'un composant graphique, il ne va pas s'adapter
                automatiquement à la taille de l'écran. Pour créer une mise en page qui s'adapte à la taille de l'écran, il est préférable 
                d'utiliser les propriétés suivantes:
            </p>
            <ul>
                <li>
                    <IC>layoutMode</IC>: Permet de changer le mode de mise en page du composant graphique. Par défaut, il est en 
                    mode <IC>Position</IC>, ce qui signifie que le composant graphique utilise une position fixe dans la scène. Pour que la 
                    mise en page s'adapte à la taille de l'écran, il faut changer le mode de mise en page à <IC>Anchors</IC>.
                </li>
                <li>
                    <IC>anchorsPreset</IC>: Permet de changer les ancres du composant graphique. Les ancres sont des points de référence qui 
                    permettent de définir la position et la taille du composant graphique par rapport à son parent ou par rapport à l'écran. 
                    Les valeurs disponibles ici sont assez facile à comprendre. Par exemple, si vous voulez que le composant graphique prenne
                    toute la taille de l'écran ou de son conteneurparent, on choisira <IC>Full Rect</IC>. Si vous voulez que le composant 
                    graphique soit positionné en haut à gauche de l'écran ou de son conteneur parent, on choisira <IC>Top Left</IC>. 
                </li>
                <li>
                    <IC>customMinimumSize</IC>: Permet de définir une taille minimum pour le composant graphique. C'est pratique si la taille 
                    du composant graphique peut changer en fonction de son contenu, mais que vous voulez qu'il ait une taille minimum pour ne 
                    pas que le composant graphique devienne trop petit. Ça peut être utile pour les labels si on change le texte affiché.
                </li>
            </ul>
        </section>

        <section>
            <h2>Calques</h2>
            <p>
                Par défaut, tous les composants graphiques sont affichés dans la même couche. L'engin de jeu de Godot va afficher dessiner les 
                composants graphiques et les éléments de jeu dans l'ordre dans lequel ils sont placés dans la scène. Toutefois, si vous voulez
                que certains composants graphiques soient affichés au-dessus des autres, notamment pour l'interface graphique affiché pendant
                le jeu (comme pour afficher les points de vie, le score, etc.), vous pouvez créer des calques supplémentaires.
            </p>
            <p>
                Pour créer un calque dans Godot, il faut créer un nouveau <IC>CanvasLayer</IC> dans la scène. Tous les composants graphiques 
                placés dans ce <IC>CanvasLayer</IC> seront affichés au-dessus des autres composants graphiques. Vous pouvez créer 
                plusieurs <IC>CanvasLayer</IC> pour créer plusieurs calques. Vous pourrez aussi modifier l'ordre d'affichage des calques en 
                modifiant leur propriété <IC>layer</IC>.
            </p>
        </section>
    </>;
}
