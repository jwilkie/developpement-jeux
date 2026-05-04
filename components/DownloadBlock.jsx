'use client'

import { useEffect, useState } from 'react';
import config from '@/next.config.mjs';
import { isArchive, isAudio, isImage, isPDF, isVideo } from '@/utils/fileType';

import styles from './DownloadBlock.module.css';

export function File({ fileName, path }) {
    const completeName = fileName || path.split('/').at(-1);
    const name = completeName.substring(0, completeName.lastIndexOf('.'));
    const extension = completeName.substring(completeName.lastIndexOf('.')).toLowerCase();

    const [size, setSize] = useState('0B');
    useEffect(() => {
        const controller = new AbortController();
        const route = config.basePath ? `${config.basePath}${path}` : path
        fetch(route, { method: 'HEAD', signal: controller.signal })
            .then((response) => {
                setSize(displaySize(response.headers.get('content-length')))
            })
            .catch(() => { });

        return () => {
            controller.abort();
        }
    }, [path]);

    const displaySize = (size) => {
        const UNIT = ['B', 'KB', 'MB', 'GB'];
        let displaySize = size;
        let unitIndex = 0;
        while (displaySize > 100) {
            displaySize /= 1024;
            unitIndex++;
        }

        return displaySize.toFixed(2) + UNIT[unitIndex];
    }

    return <a className={styles.file} href={config.basePath ? `${config.basePath}${path}` : path} download={completeName}>
        {isArchive(extension) ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.997 19.06c0 1.277-2.996 1.268-2.996.003 0-1.314 2.996-1.344 2.996-.003zm11.003-8.06v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-14-4h3v-1h-3v1zm0-2h3v-1h-3v1zm0-2h3v-1h-3v1zm0 6h3v-1h-3v1zm0 2h3v-1h-3v1zm0 2h3v-1h-3v1zm3.925 5.5l-.925-4.5h-3l-.925 4.5c-.393 1.578.801 2.5 2.425 2.5 1.626 0 2.817-.924 2.425-2.5zm3.984-12.723c2.047-.478 4.805.279 6.091 1.179-1.494-1.998-5.23-5.708-7.432-6.881 1.156 1.168 1.563 4.234 1.341 5.702z" /></svg>
        : isPDF(extension) ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.819 14.427c.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12h.496c.474 0 .803.173.916.644zm3.091-8.65c2.047-.479 4.805.279 6.09 1.179-1.494-1.997-5.23-5.708-7.432-6.882 1.157 1.168 1.563 4.235 1.342 5.703zm-7.457 7.955h-.546v.943h.546c.235 0 .467-.027.576-.227.067-.123.067-.366 0-.489-.109-.198-.341-.227-.576-.227zm13.547-2.732v13h-20v-24h8.409c4.858 0 3.334 8 3.334 8 3.011-.745 8.257-.42 8.257 3zm-12.108 2.761c-.16-.484-.606-.761-1.224-.761h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.094-.292.094-.597 0-.885zm3.407-.303c-.297-.299-.711-.458-1.199-.458h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.554-.659.586-2.035-.063-2.693zm3.701-.458h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784z" /></svg>
        : isImage(extension) ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.568.075c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702zm7.432 10.925v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3zm-15 1.5c0 .828.672 1.5 1.501 1.5.827 0 1.499-.672 1.499-1.5s-.672-1.5-1.499-1.5c-.829 0-1.501.672-1.501 1.5zm10 6.5l-3.5-6-2.093 2.968-1.31-.968-3.097 4h10z" /></svg>
        : isVideo(extension) ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.568.074c2.202 1.174 5.938 4.885 7.432 6.882-1.286-.899-4.044-1.657-6.091-1.179.222-1.468-.185-4.535-1.341-5.703zm7.432 10.926v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.42 8.256 3zm-7 3.508l-6-3.528v7.02l6-3.492z" /></svg>
        : isAudio(extension) ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm2.255 8.852c-.003 1.684-2.484 2.059-2.925.812-.333-.945.797-1.947 1.926-1.725v-2.912l-4.001.955v3.469c-.001 1.682-2.5 2.059-2.94.811-.334-.944.813-1.948 1.941-1.723v-4.344l5.999-1.195v5.852zm-1.431-16.777c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z" /></svg>
        :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm.256 11h-8v-1h8v1zm4-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z" /></svg>
        }

        <div className={styles.info}>
            <span className={styles.name}>
                <span>{name}</span>
                <span>{extension}</span>
            </span>
            <span className={styles.size}>{size}</span>
        </div>
    </a>
}

export function DownloadBlock({ children }) {
    return <div className={styles.block}>
        {children}
    </div>
}
