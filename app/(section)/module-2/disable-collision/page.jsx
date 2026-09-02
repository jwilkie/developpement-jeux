import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Désactiver les collisions",
    description: "Démonstration de la désactivation des collisions d'un node.",
    keywords: ["set_deferred", "monitoring", "monitorable"],
    group: "notes"
}

const setDeferred = 
`set_deferred("monitoring", false)
set_deferred("monitorable", false)`;

const iframe = 
`# Détection de collision
func _on_area_entered(area: Area2D) -> void:
    # Désactiver les collisions
	set_deferred("monitoring", false)
	set_deferred("monitorable", false)

    # Démarrer le timer d'invulnerabilité
	timer_invulnerabilite.start()
    
# Timer d'invulnerabilité
func _on_timer_invulnerabilite_timeout() -> void:
    # Réactivation des collisions
	set_deferred("monitoring", true)
	set_deferred("monitorable", true)`;

const single = 
`# Variable de collision
var en_collision := false

# Fonction de collision
func _on_area_entered(area: Area2D) -> void:
    if en_collision:
        return
    
    # Indiquer qu'on est en collision pour ignorer les 
    # prochaines
    en_collision = true

    # ...
    
# Timer d'invulnerabilité
func _on_timer_invulnerabilite_timeout() -> void:
    # Indiquer qu'on n'est plus en collision
    en_collision = false
	
    # ...`;

export default function Page() {
    return <>
        <section>
            <h2>Mise en situation</h2>
            <p>
                Supposons que nous faisons un jeu de type <em>Space Shooter</em>. En général, lorsque notre personnage, le vaisseau,
                entre en contact avec un ennemi, il perdra de l'énergie. Toutefois, on remarquera un comportement assez bizarre. Tant 
                que notre vaisseau reste en collision avec le même objet, il ne détectera pas de nouvelles collisions avec celui-ci. 
                Un autre comportement intéressant est que si le vaisseau entre en collision très rapidement avec plusieurs éléments, 
                la détection des collisions peut s'exécuter plusieurs fois en très rapide succession, faisant baisser l'énergie du 
                vaisseau très rapidement.
            </p>
            <p>
                Ces comportements ne sont pas nécessairement mauvais, mais très souvent, dans un jeu vidéo, on le voudrat légèrement 
                différent. En effet, lorsqu'on entre en collision avec un élément, on voudras généralement donner un délai 
                d'invulnérabilité au joueur pour qu'il puisse se ressaisir. On appelle souvent ce délai les <em>i-frames</em> (les 
                frames d'invulnérabilité). Durant ce délai d'invulnérabilité, les collisions seront désactivé et le joueur pourra se 
                déplacer pour éviter la collision.
            </p>
            <p>
                Cela changera nos 2 comportements ci-dessus:
            </p>
            <ul>
                <li>
                    Si le vaisseau reste en collision avec un objet après son délai d'invulnérabilité, après la réactivation des 
                    collisions, le vaisseau redétectera une collision avec l'objet auquel il était précédement en collision.
                </li>
                <li>
                    Si le vaisseau entre en collision très rapidement avec plusieurs éléments, seul le premier sera détecté puisque le 
                    délai d'invulnérabilité empêchera notre vaisseau de détecter les collisions avec les autres objets.
                </li>
            </ul>
        </section>

        <section>
            <h2>Activation et désactivation</h2>
            <p>
                Pour activer les collisions et les désactivé, nous utiliserons les 
                propriétés <IC>monitorable</IC> et <IC>monitoring</IC> d'un objet de collision, comme un <IC>Area2D</IC>. Ces propriétés
                servent à ceci:
            </p>
            <dl>
                <dt><IC>monitoring</IC></dt>
                <dd>
                    Indique que l'objet peut essayer de détecter des collisions avec d'autres éléments.
                </dd>
                <dt><IC>monitorable</IC></dt>
                <dd>
                    Indique que d'autres éléments peuvent essayer de détecter des collisions avec notre objet.
                </dd>
            </dl>
            <p>
                En général, pour désactiver complètement les collisions d'un objet, nous mettrons ces 2 propriétés à <IC>false</IC>. 
                Toutefois, puisque ces propriétés appartiennent au système de physique de Godot, nous devrons changer leur valeur avec
                la fonction <IC>set_deferred()</IC>, de la façon suivante:
            </p>
            <CodeBlock language="gdscript">{setDeferred}</CodeBlock>
            <p>
                Dans le cadre de notre mise en situation, si nous voulons donner un délai d'invulnérabilité, nous voulons désactiver les
                collisions lorsqu'on en détecte une et les réactiver après un certain délai à l'aide d'un timer. Le code pourrait 
                ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{iframe}</CodeBlock>
            <ColoredBox title="À noter:">
                Bien que l'on puisse théoriquement directement modifier les propriétés <IC>monitorable</IC> et <IC>monitoring</IC>, un 
                changement du type <IC>monitorable&nbsp;=&nbsp;false</IC> ne fonctionnera pas. C'est parce que la détection des 
                collisions de Godot utilise son engin de physique et que celui-ci ignore les modifications faites aux objets de collision 
                dans un même frame. La fonction <IC>set_deferred</IC> est donc obligatoire pour indiquer à Godot de faire le changement 
                après le frame en question, ce que fait fonctionner le tout correctement.
            </ColoredBox>
        </section>

        <section>
            <h2>Multiples collisions</h2>
            <p>
                Il est techniquement possible pour un objet de détecter plusieurs collision dans un même frame. Cela peut arriver 
                lorsqu'un objet se déplace rapidement où lorsqu'un node possède une zone de collision un peu plus grosse. Dans ce genre 
                de cas, même si on utilise un délai d'invulnérabilité, l'engin de Godot va quand même détecter toutes ces collisions 
                puisqu'elles arrivent en même temps.
            </p>
            <p>
                Dans bien des cas, cela ne vous causera pas de problèmes, mais si c'est problématique, vous pouvez toujours utilser des 
                variables booléennes pour accepter une des collisions, mais ignorer les autres. Le code pourrait ressembler à ceci:
            </p>
            <CodeBlock language="gdscript">{single}</CodeBlock>
            <ColoredBox title="Attention:">
                La variable booléenne ne remplace pas la désactivation des collisions avec <IC>monitorable</IC> et <IC>monitoring</IC>.
                Si on met seulement la variable booléenne, la détection des collisions aura quand même lieu dans l'engin de Godot, même 
                si on ignorera les collisions par la suite. Cela va donc abaisser les performances de votre jeu. Bref, assurez-vous 
                aussi de désactiver avec <IC>monitorable</IC> et <IC>monitoring</IC> pour éviter ces problèmes de performance.
            </ColoredBox>
        </section>
    </>;
}
