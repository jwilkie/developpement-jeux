'use client'

import Image from 'next/image'

import logoECite from '@/public/img/e-cite.png'
import logoLaCite from '@/public/img/la-cite.png'
import styles from './Footer.module.css'

export default function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.links}>
            <a href="https://www.collegelacite.ca/" target="_blank" rel="noopener noreferrer">
                <Image src={logoLaCite} alt="Logo La Cité" />
            </a>
            <a href="https://ecite.lacitec.on.ca/" target="_blank" rel="noopener noreferrer">
                <Image src={logoECite} alt="Logo eCité" />
            </a>
        </div>
        <div className={styles.text}>
            <p>© Collège La Cité {new Date().getFullYear()}</p>
            <p className={styles.credits}>Développé par Jonathan Wilkie | Design par Catherine Wilkie</p>
        </div>
    </footer>
}
