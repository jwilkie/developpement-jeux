import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Utilisation de chronomètres",
    description: "Présentation du node Timer pour exécuter du code après un certain temps ou à intervalle régulier.",
    keywords: ["timer", "temps", "intervalle", "délai"],
    group: "notes"
}

const timercollision =
`# Détection d'une collision avec un ennemie
func _on_area_entered(area: Area2D) -> void:
    # Désactiver les collisions du personnage
    set_deferred("monitoring", false)

    # Démarrer le timer d'invincibilité
	$TimerInvincibilite.start()`;

const timeout =
`func _on_timer_invincibilite_timeout() -> void:
	set_deferred("monitoring", true)`;

export default function Page() {
    return <>
        <section>
            <h2>Utilisation du temps</h2>
            <p>
                Dans un jeu vidéo, le temps est un élément souvent très important pour différentes raisons. Par exemple, on peut vouloir
                faire apparaître un ennemi après un certain temps, faire dispaître un objet après une animation d'un certain temps, faire en 
                sorte qu'une arme ne puisse être utilisée qu'après un certain temps, s'assurer qu'un combo doit être fait dans un certain 
                délai, etc. Bref, il existe plusieurs situations où nous allons vouloir mesurer le temps ou faire en sorte que du code soit
                exécuté après un certain temps ou à intervalle régulier. 
            </p>
            <p>
                Bien qu'il soit possible de faire tout ça en utilisant la variable <IC>delta</IC> de la fonction <IC>process</IC> que nous 
                avons vu dans le module précédent, Godot nous offre une solution plus simple: le node <IC>Timer</IC>. Ce node est un élément 
                invisible dans le jeu, mais qui calcule le temps pour nous et qui peut envoyer un signal lorsqu'un certain temps est écoulé. 
                Nous verrons comment l'utiliser dans cette page.
            </p>
        </section>

        <section>
            <h2>Création et configuration</h2>
            <p>
                Pour créer un <em>Timer</em>, nous utiliserons la même procédure que pour créer n'importe quel autre node. Nous allons donc
                faire un clic droit sur le node auquel nous voulons ajouter le <em>Timer</em> et sélectionner l'option 
                "<em>Add child node...</em>". Ensuite, nous allons chercher le node <IC>Timer</IC> dans la liste et cliquer sur le bouton
                "<em>Create</em>".
            </p>
            <p>
                La configuration d'un <em>Timer</em> se fait dans le panneau d'inspecteur à la droite de l'interface de Godot. Il y a 
                principalement 3 propriétés que nous allons vouloir configurer:
            </p>
            <dl>
                <dt><em>Wait Time</em></dt>
                <dd>
                    Cette propriété nous permet de définir le temps que le <em>Timer</em> doit attendre avant d'envoyer son signal. Le temps 
                    est défini en secondes et peut être un nombre à virgule. 
                </dd>
                <dt><em>One Shot</em></dt>
                <dd>
                    Par défaut, un <em>Timer</em> redémarre automatiquement après avoir envoyé son signal lorsque le <em>Wait Time</em> est 
                    écoulé. En activant cette option, le <em>Timer</em> ne redémarrera pas automatiquement. On pourra toutefois le redémarrer 
                    manuellement en utilisant du code.
                </dd>
                <dt><em>Autostart</em></dt>
                <dd>
                    Par défaut, les <em>Timer</em> doivent être démarré manuellement en utilisant du code. En activant cette option, 
                    le <em>Timer</em> démarrera automatiquement dès que la scène sera lancée.
                </dd>
            </dl>
            <p>
                À vous de configurer ces propriétés en fonction de ce que vous voulez faire. Par exemple, si vous voulez faire en sorte de 
                désactiver les collisions du personnage pendant 3 secondes après qu'il ait été touché par un ennemie, vous pourriez configurer
                le <em>Timer</em> en mettant sont <em>Wait Time</em> à 3 secondes, en activant l'option <em>One Shot</em> et en laissant 
                l'option <em>Autostart</em> désactivé. De cette façon, dès que le personnage est touché, on pourra démarrer le <em>Timer</em>.
            </p>
            <CodeBlock language="gdscript">{timercollision}</CodeBlock>
            <p>
                Ici, la fonction <IC>start()</IC> permet de démarrer le <em>Timer</em>. Il existe aussi une fonction <IC>stop()</IC> et une 
                fonction <IC>is_stopped()</IC>. Si vous voulez en savoir plus sur les fonctions disponibles pour le node <IC>Timer</IC>, vous 
                pouvez consulter la documentation officielle de Godot.
            </p>
            <p>
                <a href="https://docs.godotengine.org/en/stable/classes/class_timer.html">Timer - Documentation</a>
            </p>
        </section>

        <section>
            <h2>Écouter le signal</h2>
            <p>
                Pour faire en sorte que du code soit exécuté lorsque le <em>Timer</em> envoie son signal lorsque le <em>Wait Time</em> est
                écoulé, nous allons devoir écouter ce signal. Nous allons le faire de la même façon que lorsque nous avons écouté les 
                signaux de collision ou lorsque nous avons écouté les signaux de changement de point de vie du personnage.
            </p>
            <ol>
                <li>
                    Cliquer sur le node du <em>Timer</em> et aller dans le panneau de signaux à la droite de l'interface graphique de Godot.
                </li>
                <li>
                    Double-cliquer sur le nom du signal <IC>timeout()</IC>.
                </li>
                <li>
                    Dans la fenêtre qui s'ouvre, sélectionner le node où vous voulez ajouter la détection de ce signal. C'est généralement 
                    le node auquel le <em>Timer</em> est attaché.
                </li>
                <li>
                    Laisser le nom de méthode tel quel et cliquer sur le bouton "<em>Connect</em>".
                </li>
                <li>
                    Écrivez le code de la fonction a exécuter lorsque le signal est émit.
                </li>
            </ol>
            <p>
                Dans notre exemple, on pourrait mettre du code pour réactiver les collisions du personnage lorsque le signal 
                du <em>Timer</em> est émit.
            </p>
            <CodeBlock language="gdscript">{timeout}</CodeBlock>
        </section>
    </>;
}
