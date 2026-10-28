import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Changement de niveaux",
    description: "Présentation des différentes opérations à exécuter pour changer et configurer les niveaux dans un projet Godot.",
    keywords: ["niveau", "scène", "call_deferred", "get_node", "connect", "signal"],
    group: "notes"
}

const changementDeNiveau = 
`func change_niveau(index_prochain_niveau : int) -> void:
	# On supprime les niveaux déjà présent
	if niveau_actuel:
		niveau_actuel.queue_free()
			
	# On charge le prochain niveau
	niveau_actuel = load("res://niveaux/niveau_" + index_prochain_niveau).instantiate()

    # On configure le prochain niveau
	var zone_but : Area2D = niveau_actuel.get_node("ZoneBut")
	zone_but.body_entered.connect(_on_fin_niveau)

	var position_depart : Marker2D = niveau_actuel.get_node("PositionDepart")
	slime.position = position_depart.position

    # On ajoute le prochain niveau dans l'arbre 
    # de node du jeu au prochain frame
	add_child.call_deferred(niveau_actuel)
	move_child.call_deferred(niveau_actuel, 0)`;

var getNode = 
`# Configurer l'ennemi boss du niveau en 
# fonction du nombre de points de vie du 
# personnage
var ennemiBoss : Node2D = niveau_actuel.get_node("EnnemiBoss")
ennemiBoss.points_de_vie = personnage.points_de_vie * 2`;

var connect = 
`# Connecter le signal "body_entered" de la zone 
# de but du niveau pour détecter quand le personnage
# fini le niveau
var zone_but : Area2D = niveau_actuel.get_node("ZoneBut")
zone_but.body_entered.connect(_on_fin_niveau)`;

export default function Page() {
    return <>
        <section>
            <h2>Étapes pour changer de niveau</h2>
            <p>
                Lorsque nous voulons changer de niveau, nous voulons essentiellement changer la scène du niveau courant pour
                la scène d'un autre niveau. Il y a plusieurs façons d'y arriver dans Godot. Le principe de base reste toutefois 
                le même:
            </p>
            <ol>
                <li>
                    Supprimer la scène du niveau courant à l'aide de la fonction <IC>queue_free()</IC>.
                </li>
                <li>
                    Charger la scène du niveau suivant à l'aide d'une des fonctions de chargement de scène vues précédemment.
                </li>
                <li>
                    Créer une instance de la scène du niveau suivant à l'aide de la fonction <IC>instantiate()</IC>.
                </li>
                <li>
                    Si nécessaire, configurer la scène du niveau suivant (déplacer le personnage, initialiser les variables, connecter
                    les signaux, etc.).
                </li>
                <li>
                    Ajouter la scène du niveau suivant à l'arbre du jeu à l'aide de la fonction <IC>add_child()</IC>.
                </li>
                <li>
                    Si nécessaire, déplacer la scène du niveau suivant à la position souhaitée à l'aide de la 
                    fonction <IC>move_child()</IC>.
                </li>
            </ol>
            <p>
                Une fonction de changement de niveau peut donc ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{changementDeNiveau}</CodeBlock>
            <ColoredBox title="À noter:">
                Vous noterez que les fonctions <IC>add_child()</IC> et <IC>move_child()</IC> sont appelées avec la 
                fonction <IC>call_deferred()</IC>. Cela permet de dire à Godot d'exécuter ces fonctions au prochain frame. Dépendant 
                de quand le changement de niveau est appelé, par exemple dans un signal ou dans la fonction <IC>_process()</IC>, il est
                possible que Godot ne puisse pas exécuter ces fonctions immédiatement. L'utilisation de <IC>call_deferred()</IC> sera
                donc nécessaire pour éviter des erreurs.
            </ColoredBox>
        </section>

        <section>
            <h2>Configuration d'un niveau</h2>
            <p>
                Lorsqu'on charge un nouveau niveau, il est souvent nécessaire de le configurer avant de l'ajouter à l'arbre du jeu. Par
                exemple, on peut vouloir déplacer le personnage à la position de départ du niveau ou encore changer des éléments du 
                niveau en fonction de l'état du jeu. Ce genre de manipulation de base est assez simple à faire. Il suffit simplement de
                modifier les propriétés des nodes du niveau avant de l'ajouter à l'arbre du jeu. Parfois, il faut aller rechercher des
                sous-nodes du niveau pour pouvoir les configurer, mais ce n'est pas très compliqué avec <IC>get_node()</IC>. 
            </p>
            <CodeBlock language="gdscript">{getNode}</CodeBlock>
            <p>
                Toutefois, il est possible que certaines manipulations ne soit pas aussi simple. C'est les cas des signaux. Si on veut
                connecter un signal d'un node du niveau à une fonction d'un autre node du jeu, nous devrons connecter le signal 
                manuellement au travers du code. Pour y arriver, on utilisera la fonction <IC>connect()</IC> sur le signal du node du
                niveau pour le connecter à la fonction voulue de notre jeu.
            </p>
            <CodeBlock language="gdscript">{connect}</CodeBlock>
        </section>
    </>;
}
