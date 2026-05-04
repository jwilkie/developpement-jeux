import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp'

const appConfig = {
    domain: 'https://jwilkie.github.io/website-template',
    title: 'Website Template',
    description: 'Gabarit de base pour des site web de notes de cours.',
    sectionName: 'module',
    code: {
        languages: {
            'html': { tag: 'HTML', renderer: html },
            'css': { tag: 'CSS', renderer: css },
            'js': { tag: 'Javascript', renderer: js },
            'csharp': { tag: 'C#', renderer: csharp }
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
