import { useState } from 'react'
import { useRouter } from 'next/navigation'
import useClickOutside from '@/hooks/useClickOutside'
import useFocus from '@/hooks/useFocus'
import useWindowSize from '@/hooks/useWindowSize'

import styles from './SearchBar.module.css'

export default function SearchBar({ visible, onSearch, onToggleSearchBar }) {
    const [searchText, setSearchText] = useState('');
    const handleSearchChange = (event) => setSearchText(event.target.value);
    const router = useRouter();

    const { windowWidth } = useWindowSize();

    const [opening, setOpening] = useState(false);
    const [searchRef, setFocus] = useFocus();

    const focusInput = () => {
        setOpening(false);
        setFocus();
    }

    const toggleSearchBar = () => {
        setOpening(!visible);
        onToggleSearchBar();
    }

    const closeSearchBar = () => {
        if(visible){
            toggleSearchBar();
        }
    }

    const submitSearch = (event) => {
        event.preventDefault();

        if(searchText.length > 0){
            router.push(`/search?value=${ encodeURI(searchText) }`);
            setSearchText('');
            closeSearchBar();
            if(onSearch){
                onSearch();
            }
        }
    }

    const formRef = useClickOutside(closeSearchBar);

    return <form ref={formRef} className={styles.search} onSubmit={submitSearch}>
        <button type="button" onClick={toggleSearchBar} disabled={windowWidth < 640}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
        </button>
        <input
            type="search"
            ref={searchRef}
            className={(visible ? styles.visible : "")}
            value={searchText}
            onChange={handleSearchChange}
            onTransitionEnd={opening ? focusInput : undefined} />
        <input
            type="submit"
            className={(visible ? styles.visible : "")}
            value="Recherche" />
    </form>
}
