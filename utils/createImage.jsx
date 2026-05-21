import { join } from "node:path";
import appConfig from "@/app.config";
import { ImageResponse } from "next/og";
import { readFile } from 'node:fs/promises';

export async function getColors(ids, theme) {
    const data = await readFile('./styles/themes.css');
    const colorsArray = data.toString().replace(/[\r \;]/g, '').split('\n')
        .map((line) => line.split(':'))
        .filter(([id]) => ids.includes(id));
        
    const colors = colorsArray.filter((line, index) => theme === 'dark' ? 
            index >= colorsArray.length / 2 : 
            index < colorsArray.length / 2 )
        .reduce((colors, line) => ({ [line[0]]: line[1], ...colors }), {});

    return colors;
}

export async function createIcon(size, theme) {
    const colors = await getColors(
        ['--bg-accent-color', '--bg-accent-gradient-color', '--text-inverted-color'],
        theme
    );

    return new ImageResponse(
        <div style={{
            display: 'flex',
            padding: '6.25%',
            alignItems: 'stretch',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: `linear-gradient(to bottom, ${colors['--bg-accent-color']}, ${colors['--bg-accent-gradient-color']} 70%);`,
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}} fill={colors['--text-inverted-color']} viewBox="0 0 24 24"><path d="M6 2l1.171.203c-.355 2.245.791 2.519 2.699 2.874 1.468.273 3.13.622 3.13 3.284v.639h-1.183v-.639c0-1.556-.48-1.809-2.164-2.122-2.583-.48-4.096-1.391-3.653-4.239zm18 14c0 3.312-2.607 6-5.825 6-1.511 0-2.886-.595-3.921-1.565-1.311-1.229-3.278-1.132-4.55.038-1.03.948-2.389 1.527-3.879 1.527-3.217 0-5.825-2.688-5.825-6s2.608-6 5.825-6l12.563.007c3.118.116 5.612 2.755 5.612 5.993zm-15-1h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2zm4 1h-2v1h2v-1zm4-2c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1zm0 2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm2 2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm2-2c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1z"/></svg>
        </div>,
        { ...size }
    )
}

export async function createOGImage(subTitle, pageTitle, theme) {
    const colors = await getColors(
        ['--bg-accent-color', '--bg-accent-gradient-color', '--text-inverted-color'],
        theme
    );

    const silkscreen = await readFile(
        join(process.cwd(), 'assets/Silkscreen-Regular.ttf')
    )

    return new ImageResponse(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            width: '100%',
            height: '100%',
            padding: '3rem',
            color: colors['--text-inverted-color'],
            background: `linear-gradient(to bottom, ${colors['--bg-accent-color']}, ${colors['--bg-accent-gradient-color']} 70%);`,
            fontSize: '60px'
        }}>
            {/* Website title */}
            <div style={{
                borderBottom: `.5rem solid ${colors['--text-inverted-color']}`,
                fontWeight: '700'
            }}>
                {appConfig.title}
            </div>

            {/* Section or group title */}
            <div style={{ 
                display: 'flex',
                fontSize: `50px`
            }}>
                {subTitle}
            </div>

            {/* Page title */}
            <div style={{ 
                display: 'flex',
                fontSize: `50px`
            }}>
                {pageTitle}
            </div>
        </div>, 
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Silkscreen',
                    data: silkscreen,
                    style: 'normal',
                    weight: 400
                }
            ]
        }
    )
}
