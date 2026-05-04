'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Logo from './Logo'
import SearchBar from './SearchBar'
import NavLink from './NavLink'
import Switch from './Switch'
import useClickOutside from '@/hooks/useClickOutside'

import styles from './Header.module.css'

export default function Header({groups}) {
    const [isOpen, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mounted, setMounted] = useState(false); 
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const toggleTheme = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    }

    const toggleSearchBar = () => {
        setSearchOpen((searchOpen) => !searchOpen);
    }

    const toggleMenu = () => {
        setOpen((open) => !open);
    }

    const closeMenu = () => {
        if (isOpen) {
            toggleMenu();
        }
    }

    const headerRef = useClickOutside(closeMenu);

    return <header ref={headerRef} className={styles.header + (isOpen ? ' ' + styles.open : '')}>

        <div className={styles.base}>
            <Link href="/">
                <Logo />
            </Link>
            <button onClick={toggleMenu} title="Ouvrir le menu de l'entête">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
            </button>
        </div>

        <div className={styles.openable}>
            <div className={styles.search}>
                <SearchBar visible={searchOpen} onSearch={closeMenu} onToggleSearchBar={toggleSearchBar} />
            </div>

            <nav className={styles.navigation + (searchOpen ? ' ' + styles.hidden : '')}>
                <ul>
                    {Object.values(groups).filter((group) => !group.noIndex).map((group) =>
                        <li key={group.slug}>
                            <NavLink href={`/group/${group.slug}`} activeClassName={styles.active} onClick={closeMenu}>
                                {group.label}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>

            <div className={styles.switch}>
                <Switch checked={mounted ? resolvedTheme === 'dark' : undefined} onChange={toggleTheme} />
            </div>
        </div>
    </header>
}
