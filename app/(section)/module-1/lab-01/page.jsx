import Image from "next/image";
import BorderedBox from "@/components/BorderedBox";
import CodeBlock from "@/components/CodeBlock";
import ColoredBox from "@/components/ColoredBox";
import { DownloadBlock, File as DownloadFile } from "@/components/DownloadBlock";
import IC from "@/components/InlineCode";
import OverflowContainer from "@/components/OverflowContainer";
import { Code, WebExample } from "@/components/WebExample";
import YoutubeVideo from "@/components/YoutubeVideo";
import { FileExplorer, Folder, File } from "@/components/FileExplorer";
import Spoiler from "@/components/Spoiler";
import KK from "@/components/KeyboardKey";

import testImage from "@/public/img/e-cite.png";
import Color from "@/components/Color";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire 1",
    description: "Laboratoire sur l'utilisation des composants de base de ce gabarit.",
    keywords: ["gabarit", "apprentissage"],
    group: "labs"
}

const js =
    `let chaine = 'Une chaine';
let tab = [];

let i = 0;
for(const char in chaine) {
    tab.push(char);
    i++;
}

console.log(\`Taille du tableau: \${i}\`)`;

const css =
    `html {
    box-sizing: border-box;
}`;

const html =
    `<html>
    <head>
        <title>Test</title>
    </head>
    <body>
        <h1>Test</h1>
    </body>
</html>`

const exempleHTML1 =
    `<input type="button" value="Changer de couleur" id="couleur">`;

const exempleHTML2 =
    `<div class="container">
    <div class="box"></div>
</div>`;

const exempleCSS =
    `.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
}

.box {
    width: 5rem;
    height: 5rem;
    background-color: #a00;
    transition: 1s;
}

.box:hover {
    transform: rotate(190deg);
}`;

const exempleJS =
    `let bouton = document.getElementById('couleur');
let box = document.querySelector('.box');
bouton.addEventListener('click', () => {
    box.style.backgroundColor = '#00a';
});`;

export default function Page() {
    return <>
        <section>
            <h2>Liens</h2>
            <p>
                Lorem ipsum dolor, sit
                amet <a href="https://google.com" target="_blank" rel="noopener noreferrer">consectetur</a> adipisicing
                elit. A ut iusto obcaecati consequatur ab vitae veniam ipsum accusantium totam possimus voluptatum mollitia est quisquam eius id cum recusandae, blanditiis ullam!
            </p>
            <ul>
                <li><a href="/module-1/test">test</a></li>
                <li><a href="https://google.com">Google</a></li>
            </ul>
        </section>

        <section>
            <h2>Autre CSS Misc</h2>
            <div>
                Keyboard Keys: <KK>Ctrl</KK> + <KK>C</KK>
            </div>
            <div>
                Mac Keys: <KK>
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M10 16v2.5c0 2.483-2.017 4.5-4.5 4.5-2.484 0-4.5-2.017-4.5-4.5 0-2.484 2.016-4.5 4.5-4.5h2.5v-4h-2.5c-2.484 0-4.5-2.016-4.5-4.5 0-2.483 2.016-4.5 4.5-4.5 2.483 0 4.5 2.017 4.5 4.5v2.5h4v-2.5c0-2.483 2.017-4.5 4.5-4.5 2.484 0 4.5 2.017 4.5 4.5 0 2.484-2.016 4.5-4.5 4.5h-2.5v4h2.5c2.484 0 4.5 2.016 4.5 4.5 0 2.483-2.016 4.5-4.5 4.5-2.483 0-4.5-2.017-4.5-4.5v-2.5h-4zm-2 0h-2.5c-1.379 0-2.5 1.122-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.122 2.5-2.5v-2.5zm10.5 0h-2.5v2.5c0 1.378 1.121 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.121-2.5-2.5-2.5zm-4.5-6h-4v4.132h4v-4.132zm-6-2v-2.5c0-1.378-1.121-2.5-2.5-2.5s-2.5 1.122-2.5 2.5 1.121 2.5 2.5 2.5h2.5zm10.5 0c1.379 0 2.5-1.122 2.5-2.5s-1.121-2.5-2.5-2.5-2.5 1.122-2.5 2.5v2.5h2.5z"/></svg>    
                </KK> + <KK>C</KK>
            </div>
            <div>
                Exponent: 3<sup>5</sup>, 2<sup>ème</sup>
            </div>
        </section>

        <section>
            <h2>Couleurs</h2>
            <div>
                <Color value="#000" />, <Color value="#456" />
                <p>
                    Lorem ipsum dolor sit amet consectetur <Color value="#aa0000" /> adipisicing <IC>elit</IC>. <IC>Amet</IC> cumque, soluta eligendi quaerat quisquam explicabo modi temporibus, voluptas odit inventore quasi reprehenderit, quidem tenetur. Ipsam placeat ullam reprehenderit at velit?
                </p>
            </div>
            <ul>
                <li><Color value="#25a83f" /></li>
                <li><Color value="#2548a8" /></li>
                <li><Color value="rgb(168, 37, 127)" /></li>
            </ul>
        </section>

        <section>
            <h2>Code</h2>
            <p>
                Du code inline dans un <IC>paragraphe</IC> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae atque nihil <IC>corporis</IC> ea qui? At similique dolorem quo eos laboriosam, iste id rerum suscipit culpa voluptatum ut maiores illo nihil.
            </p>
            <CodeBlock language="html">
                {html}
            </CodeBlock>
            <CodeBlock language="css">
                {css}
            </CodeBlock>
            <CodeBlock language="js">
                {js}
            </CodeBlock>
            <CodeBlock language="Texte">
                {'Texte sans highlight'}
            </CodeBlock>
            <CodeBlock language="csharp">
                {'const int TEST = 2;'}
            </CodeBlock>
        </section>

        <section>
            <h2>Web Example</h2>
            <WebExample title="Transition">
                <Code language="html">{exempleHTML1}</Code>
                <Code language="html">{exempleHTML2}</Code>
                <Code language="css">{exempleCSS}</Code>
                <Code language="js" display={false}>{exempleJS}</Code>
            </WebExample>
            <WebExample title="Small">
                <Code language="html" display={false}>{'<div class="box">Allo</div>'}</Code>
                <Code language="css" display={false}>{'.box{background-color:#333;color:#fff}'}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Bordered Box</h2>
            <BorderedBox>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam a, doloribus voluptatum vero labore rerum quibusdam nam, ad consectetur iste ullam saepe aperiam quae rem molestias harum vel alias qui.
            </BorderedBox>
        </section>

        <section>
            <h2>Colored Box</h2>
            <ColoredBox title="Attention">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit repudiandae ad inventore nihil ratione? Voluptatibus eius autem quis pariatur quasi itaque minima, consequatur, molestiae dicta, soluta temporibus sit ab.
            </ColoredBox>
        </section>

        <section>
            <h2>Download Block</h2>
            <DownloadBlock>
                <DownloadFile fileName="test.txt" path="/lab-01/test.txt"></DownloadFile>
                <DownloadFile fileName="archive.zip" path="/lab-01/archive.zip"></DownloadFile>
                <DownloadFile fileName="UnNomDeFichierTresLong_avecDes_Soulignement.json" path="/lab-01/test.json"></DownloadFile>
                <DownloadFile path="/img/e-cite.png"></DownloadFile>
                <DownloadFile path="/lab-01/Video.avi"></DownloadFile>
                <DownloadFile path="/lab-01/Audio.mp3"></DownloadFile>
                <DownloadFile path="/lab-01/Adobe.pdf"></DownloadFile>
            </DownloadBlock>
        </section>

        <section>
            <h2>Vidéo</h2>
            <YoutubeVideo code="sdUUx5FdySs" title="Kiwi!" />
        </section>

        <section>
            <h2>Liste</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam tempora exercitationem. Corrupti repellat voluptatum laboriosam itaque omnis dignissimos esse autem quis, similique ducimus est hic ex voluptatem officiis quisquam.
            </p>
            <ol start={50}>
                <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In repellat reprehenderit obcaecati repellendus, quam incidunt nam molestias cum rerum, modi accusamus numquam cumque odio rem nesciunt illo. Cum, quod temporibus?
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus quos eius! Vero tempore maiores amet ducimus expedita officia aut dolorum deleniti sint error! Dignissimos accusantium nesciunt sint assumenda eos.
                    <ol>
                        <li>
                            Test 2.1
                            <ul>
                                <li>Allo</li>
                                <li>Bonjour</li>
                                <li>Salut</li>
                            </ul>
                        </li>
                        <li>Test 2.2</li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur porro rem officiis adipisci aut pariatur, quas quae animi, culpa possimus consequuntur, a non eos error perferendis nobis voluptas modi atque.
                        </li>
                    </ol>
                </li>
                <li>Test 3</li>
                <li>Test 4</li>
            </ol>
        </section>

        <section>
            <h2>Tableau</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt, impedit aperiam ipsam delectus adipisci voluptate maxime velit, alias eum a rerum harum dolore quae animi doloribus quas libero nostrum?
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th><th>Prenom</th><th>Date</th><th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wilkie</td>
                            <td>Jonathan</td>
                            <td>2005-12-05</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis labore, voluptatibus tenetur atque ut eligendi vel architecto quo, nihil rem obcaecati. Incidunt eveniet vero exercitationem laboriosam illo error? Est, excepturi.</td>
                        </tr>
                        <tr>
                            <td>Wilkie</td>
                            <td>UnTresGrandNomPourForcerUnOverflow</td>
                            <td>2022-06-01</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore, hic ullam impedit culpa dicta aliquid saepe ipsam, quos ratione, eius optio dolorem nostrum excepturi similique molestiae. Eligendi, autem fugit.</td>
                        </tr>
                        <tr>
                            <td>Wilkie</td>
                            <td>Jonathan</td>
                            <td>2024-01-01</td>
                            <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aliquam ea voluptate eius quo doloribus earum veniam doloremque quisquam dolorum enim quidem tempora, ex minima sit aspernatur quis ducimus harum.</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>

            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th><th>Prenom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Wilkie</td>
                            <td>Jonathan</td>
                        </tr>
                        <tr>
                            <td>Audrey</td>
                            <td>Jonathan</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>File Explorer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vel placeat exercitationem, quam nesciunt officiis culpa eaque ut quo esse nobis blanditiis eligendi fugit modi, porro vero enim temporibus distinctio?</p>
            <FileExplorer>
                <Folder name="css">
                    <File name="normalize.css"></File>
                    <File name="style.css"></File>
                </Folder>
                <Folder name="js">
                    <File name="main.js"></File>
                </Folder>
                <Folder name="ressources">
                    <Folder name="images">
                        <File name="image.jpg"></File>
                        <File name="image2.png"></File>
                    </Folder>
                    <File name="video.mp4"></File>
                    <File name="audio.wav"></File>
                    <File name="document.pdf"></File>
                    <File name="projet.zip"></File>
                </Folder>
                <Folder name="Ceci">
                    <Folder name="Est">
                        <Folder name="Un">
                            <Folder name="Test pour voir">
                                <Folder name="Comment la longueur">
                                    <Folder name="Réagit">
                                        <Folder name="Avec un nom de dossier très long">

                                        </Folder>
                                    </Folder>
                                </Folder>
                            </Folder>
                        </Folder>
                    </Folder>
                </Folder>
                <File name="index.html"></File>
            </FileExplorer>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vel placeat exercitationem, quam nesciunt officiis culpa eaque ut quo esse nobis blanditiis eligendi fugit modi, porro vero enim temporibus distinctio?</p>
        </section>

        <section>
            <h2>Images</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum suscipit atque nobis, a, earum repellendus, et veritatis neque maiores dolor corrupti ratione autem exercitationem? Reprehenderit unde in optio quia!
            </p>
            <Image src={testImage} alt="Test image" />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus vel odit quis optio molestiae neque necessitatibus, fuga, suscipit deleniti ullam ipsa sunt explicabo sequi commodi facere molestias magni delectus. Eius?
            </p>
        </section>

        <section>
            <h2>Spoiler</h2>
            <Spoiler>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id debitis sapiente odit, voluptas minus velit similique, enim corrupti itaque ea rem dolores quis ex deserunt odio. Ipsam, est eveniet!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam vero corrupti error dolores fuga cum cupiditate optio suscipit mollitia, iste cumque laboriosam impedit repellendus rerum. Quas optio praesentium doloribus corporis.
                </p>
            </Spoiler>

            <Spoiler label="Spoiler" border={false}>
                <CodeBlock language="html">
                    {html}
                </CodeBlock>
            </Spoiler>
        </section>
    </>;
}
