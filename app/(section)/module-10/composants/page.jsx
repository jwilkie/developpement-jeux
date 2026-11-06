import IC from '@/components/InlineCode'
import KeyboardKey from '@/components/KeyboardKey';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Composants d'interface",
    description: "Présentation des différents nodes qui peuvent aider à la création d'interfaces graphiques dans un jeu.",
    keywords: ["bouton", "button", "label", "texte", "slider", "checkbox", "optionbutton", "texturerect", "colorrect"],
    group: "notes"
}


export default function Page() {
    return <>
        <section>
            <h2>Composants de base</h2>
            <p>
                Pour nous aider dans la création d'interfaces graphiques, Godot nous propose plusieurs nodes déjà prêts à l'emploi. Ces nodes
                sont regroupés et sont tous des descendants du node <IC>Control</IC>. Ils peuvent être simplement ajoutés à la scène à l'endroit
                voulu et configurés pour répondre à nos besoins. 
            </p>
            <p>
                Voici une liste des nodes de composants les plus utilisés pour créer des interfaces graphiques avec une brève explication de 
                comment les utiliser:
            </p>

            <section>
                <h3>Button</h3>
                <p>
                    Le node <IC>Button</IC> est un bouton cliquable qui peut être utilisé pour déclencher des actions dans le jeu. Vous pourrez le 
                    configurer avec les propriétés principales suivantes:
                </p>
                <ul>
                    <li>
                        <IC>text</IC>: Le texte affiché sur le bouton.
                    </li>
                    <li>
                        <IC>icon</IC>: Une image affichée sur le bouton.
                    </li>
                    <li>
                        <IC>alignment</IC>: L'alignement du texte sur le bouton.
                    </li>
                    <li>
                        <IC>disabled</IC>: Si le bouton est désactivé ou non.
                    </li>
                </ul>
                <p>
                    Pour le bouton, nous voudrons généralement détecter lorsque l'utilisateur clique ou active le bouton. Pour ce faire, nous
                    pourrons utiliser le signal <IC>pressed</IC> qui est émis lorsque l'utilisateur clique sur le bouton ou appuie sur la 
                    touche <KeyboardKey>Enter</KeyboardKey> ou <KeyboardKey>Space</KeyboardKey> lorsque le bouton est sélectionné. Si vous voulez
                    exécuter du code lorsque le bouton est cliqué, vous pourrez connecter le signal <IC>pressed</IC> à une fonction dans un de vos 
                    scripts. 
                </p>
            </section>

            <section>
                <h3>Label</h3>
                <p>
                    Le node <IC>Label</IC> est un composant qui permet d'afficher du texte à l'écran. Il est très simple à utiliser et 
                    nécessite très peu de configuration. Voici les propriétés principales que vous pourrez configurer pour ce
                </p>
                <ul>
                    <li>
                        <IC>text</IC>: Le texte affiché par le label.
                    </li>
                    <li>
                        <IC>horizontalAlignment</IC> et <IC>verticalAlignment</IC>: L'alignement horizontal et vertical du texte dans le label.
                    </li>
                    <li>
                        <IC>autowrap</IC>: Si le texte doit être changer de ligne automatiquement s'il atteint la fin du label.
                    </li>
                </ul>
            </section>

            <section>
                <h3>Slider</h3>
                <p>
                    Les nodes <IC>HSlider</IC> et <IC>VSlider</IC> permettent de créer des curseurs horizontaux et verticaux auquel 
                    l'utilisateur peut interagir pour sélectionner une valeur dans une plage de valeurs. C'est pratique pour des réglages de
                    volume, de luminosité ou d'autres paramètres. Voici les propriétés principales que vous pourrez configurer pour ce
                    composant:
                </p>
                <ul>
                    <li>
                        <IC>minValue</IC> et <IC>maxValue</IC>: La valeur minimale et maximale du curseur.
                    </li>
                    <li>
                        <IC>value</IC>: La valeur actuelle du curseur.
                    </li>
                    <li>
                        <IC>step</IC>: La valeur d'incrémentation du curseur.
                    </li>
                </ul>
            </section>

            <section>
                <h3>CheckBox</h3>
                <p>
                    Le node <IC>CheckBox</IC> est un composant qui permet à l'utilisateur de sélectionner ou désélectionner une option. Il est
                    souvent utilisé pour des paramètres ou des préférences. Voici les propriétés principales que vous pourrez configurer pour ce
                    composant:
                </p>
                <ul>
                    <li>
                        <IC>text</IC>: Le texte affiché à côté de la case à cocher.
                    </li>
                    <li>
                        <IC>buttonPressed</IC>: Si la case est cochée ou non.
                    </li>
                </ul>
                <p>
                    Le <IC>CheckBox</IC> est un composant qui hérite du <IC>Button</IC>. Il possède donc toutes les propriétés et 
                    fonctionnalités d'un bouton. Vous pouvez aussi connecter le signal <IC>pressed</IC> pour détecter lorsque l'utilisateur 
                    clique sur la case à cocher.
                </p>
            </section>

            <section>
                <h3>OptionButton</h3>
                <p>
                    Le node <IC>OptionButton</IC> est la version de Godot d'un menu déroulant. Il permet à l'utilisateur de sélectionner une
                    option parmi une liste d'options. Voici les propriétés principales que vous pourrez configurer pour ce composant:
                </p>
                <ul>
                    <li>
                        <IC>items</IC>: La liste des options disponibles dans le menu déroulant. Vous pouvez spécifier le texte et l'icône de
                        chaque option.
                    </li>
                    <li>
                        <IC>selected</IC>: L'index de l'option actuellement sélectionnée.
                    </li>
                </ul>
                <p>
                    Si vous voulez détecter lorsque l'utilisateur change l'option sélectionnée, vous pourrez connecter le
                    signal <IC>item_selected</IC> à une fonction dans un de vos scripts. De plus, comme le <IC>CheckBox</IC>,
                    le <IC>OptionButton</IC> est un composant qui hérite du <IC>Button</IC>. Il possède donc toutes les propriétés et 
                    fonctionnalités d'un bouton de base.
                </p>
            </section>

            <section>
                <h3>TextureRect</h3>
                <p>
                    Le node <IC>TextureRect</IC> est un composant qui permet d'afficher une image statique à l'écran. Cette image ne peut pas
                    être animer ou interagir avec l'utilisateur. Elle est souvent utilisée pour afficher des images de fond, des icônes ou 
                    d'autres éléments graphiques statiques. Voici les propriétés principales que vous pourrez configurer pour ce composant:
                </p>
                <ul>
                    <li>
                        <IC>texture</IC>: La texture à afficher dans le <IC>TextureRect</IC>.
                    </li>
                    <li>
                        <IC>stretchMode</IC>: Le mode d'étirement de la texture. Vous pouvez choisir de l'étirer pour remplir 
                        le <IC>TextureRect</IC>, de la centrer ou de la répéter.
                    </li>
                    <li>
                        <IC>flipH</IC> ou <IC>flipV</IC>: Permet de faire un effet miroir de la texture horizontalement ou verticalement.
                    </li>
                </ul>
            </section>

            <section>
                <h3>ColorRect</h3>
                <p>
                    Le node <IC>ColorRect</IC> est un composant qui permet d'afficher un rectangle de couleur à l'écran. Il est souvent utilisé
                    pour créer des arrière-plans, des surbrillances, des transitions ou d'autres effets visuels. Voici la propriété 
                    principale que vous pourrez configurer pour ce composant:
                </p>
                <ul>
                    <li>
                        <IC>color</IC>: La couleur du rectangle.
                    </li>
                </ul>
            </section>
        </section>

        <section>
            <h2>Navigation</h2>
            <p>
                Les composants d'interface graphique sont facilement utilisable avec la souris de votre ordinateur. Cependant, si votre jeu 
                est destiné à être joué avec un clavier ou une manette, ou s'il est destiné à être joué sur une console, il est important de
                configurer la navigation entre les composants. Godot nous permet de configurer la navigation entre les composants avec 
                certaines propriétés qui sont disponibles pour chaque composant dans la section <IC>focus</IC>. Ces propriétés sont les suivantes:
            </p>
            <ul>
                <li>
                    <IC>neighbor</IC>: Permet de définir les boutons voisins dans les 4 directions (haut, bas, gauche, droite). Ça permet de 
                    naviguer entre les boutons avec le clavier ou une manette.
                </li>
                <li>
                    <IC>previous</IC> et <IC>next</IC>: Permet de définir les boutons précédents et suivants pour l'utilisation de la 
                    touche <KeyboardKey>Tab</KeyboardKey>.
                </li>
            </ul>
        </section>

        <section>
            <h2>Configuration visuelle</h2>
            <p>
                Tous les composants d'interface graphique peuvent être configurés visuellement en surchargeant le thème par défaut de Godot. 
                Vous pourrez changer les couleurs, les polices, les espacements, les bordures et d'autres propriétés visuelles pour chaque 
                composant. Vous trouverez ces propriétés dans l'onglet <IC>Theme Override</IC> dans l'inspecteur de chaque composant. 
            </p>
            <p>
                Il est possible de créer un thème personnalisé pour votre jeu et de l'appliquer à tous les composants d'interface graphique. 
                Ça vous permet d'éviter de configurer chaque composant individuellement et de garder une cohérence visuelle dans votre jeu. 
                La création d'un thème personnalisé est un peu plus longue et ne sera pas couverte dans ce cours. Vous pourrez toutefois trouver
                plus d'informations à ce sujet dans la documentation officielle de Godot.
            </p>
            <p>
                <a href="https://docs.godotengine.org/en/stable/tutorials/ui/gui_using_theme_editor.html">
                    Godot - Using the theme editor
                </a>
            </p>
        </section>

        <section>
            <h2>Autres composants</h2>
            <p>
                Il existe plusieurs autres composants d'interface graphique dans Godot. Vous pourrez les découvrir par vous-même en explorant
                les différents nodes sous le node <IC>Control</IC> lorsque vous ajoutez un nouveau node à votre scène. Vous pourrez y trouver
                les composants suivants: 
            </p>
            <ul>
                <li>
                    <IC>LineEdit</IC>: Permet à l'utilisateur de saisir du texte. C'est une boîte de saisie de texte simple.
                </li>
                <li>
                    <IC>TextEdit</IC>: Permet à l'utilisateur de saisir du texte sur plusieurs lignes. C'est une boîte de saisie de texte plus
                    grande et plus complète que le <IC>LineEdit</IC>.
                </li>
                <li>
                    <IC>RichTextLabel</IC>: Permet d'afficher du texte avec des styles et des effets. Il est plus avancé que 
                    le <IC>Label</IC> et permet d'afficher du texte avec différents formats dans le même composant.
                </li>
                <li>
                    <IC>ProgressBar</IC>: Permet d'afficher une barre de progression. Il est souvent utilisé pour afficher un chargement ou
                    une progression dans le jeu.
                </li>
                <li>
                    <IC>VideoStreamPlayer</IC>: Permet de lire des vidéos dans votre jeu.
                </li>
                <li>
                    <IC>LinkButton</IC>: Permet de créer un bouton qui agit comme un lien hypertexte. Il est souvent utilisé pour créer des 
                    liens vers des sites web ou d'autres ressources en ligne.
                </li>
                <li>
                    <IC>ColorPickerButton</IC>: Permet à l'utilisateur de sélectionner une couleur à partir d'une palette de couleurs. 
                </li>
            </ul>
        </section>
    </>;
}
