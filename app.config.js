import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import gd from 'react-syntax-highlighter/dist/cjs/languages/prism/gdscript'

const appConfig = {
    domain: 'https://jwilkie.github.io/developpement-jeux',
    title: 'Dévloppement de jeux',
    description: 'Site web de matériel pour le cours de développement de jeux.',
    sectionName: 'module',
    code: {
        languages: {
            'gd': { tag: 'GDScript', renderer: gd }
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
