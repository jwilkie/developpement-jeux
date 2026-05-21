import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import gd from 'react-syntax-highlighter/dist/cjs/languages/prism/gdscript'
import terminal from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'

const appConfig = {
    domain: 'https://jwilkie.github.io/developpement-jeux',
    title: 'Développement de jeux',
    description: 'Les jeux vidéo font partie d\'une immense industrie artistique. Elle produit plus d\'argent que l\'industrie du cinéma et les jeux produits sont aujourd\'hui considérés comme une oeuvre d\'art, de façon similaire aux films, au théâtre, à la sculpture ou à la peinture. Cette industrie nécessite de nombreux spécialistes, tels que des designers de jeu, des artistes graphiques, des ingénieurs de son, des programmeurs et beaucoup plus. Dans le cadre de ce cours, nous nous intéresserons au côté de la programmation d\'un jeu vidéo. Déguisé sous le développement de jeux, vous apprendrez plusieurs concepts de programmation avancée qui pourront être transposés à d\'autres types de développement logiciel.',
    sectionName: 'module',
    code: {
        languages: {
            'gd': { tag: 'GDScript', renderer: gd },
            'terminal': { tag: 'Terminal', renderer: terminal }
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
