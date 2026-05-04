import { join } from "node:path";
import appConfig from "@/app.config";
import acronym from '@/utils/acronym';
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

    const fontSizeMultiplier = 0.575;

    const openSans = await readFile(
        join(process.cwd(), 'assets/OpenSans-Bold.ttf')
    )

    return new ImageResponse(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            color: colors['--text-inverted-color'],
            background: `linear-gradient(to bottom, ${colors['--bg-accent-color']}, ${colors['--bg-accent-gradient-color']} 70%);`,
            fontSize: `${size.width * fontSizeMultiplier}px`,
            fontWeight: 700
        }}>
            {acronym(appConfig.title)}
        </div>,
        { 
            ...size,
            fonts: [
                {
                    name: 'OpenSans',
                    data: openSans,
                    style: "normal",
                    weight: 700
                }
            ]
        }
    )
}

export async function createOGImage(subTitle, pageTitle, theme) {
    const colors = await getColors(
        ['--bg-accent-color', '--bg-accent-gradient-color', '--text-inverted-color'],
        theme
    );

    const openSans = await readFile(
        join(process.cwd(), 'assets/OpenSans-Regular.ttf')
    )

    const openSansBold = await readFile(
        join(process.cwd(), 'assets/OpenSans-Bold.ttf')
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
                    name: 'OpenSans',
                    data: openSans,
                    style: 'normal',
                    weight: 400
                },
                {
                    name: 'OpenSans',
                    data: openSansBold,
                    style: 'normal',
                    weight: 700
                }
            ]
        }
    )
}
