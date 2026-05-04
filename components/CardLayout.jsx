'use client';

import { useEffect, useRef, useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

import styles from './CardLayout.module.css';

/**
 * @typedef Card
 * @property {string} title The title of the card.
 * @property {string} content The content of the card.
 */

/**
 * See the .layout gap in CardLayout.module.css for the gap between cards.
 */
const GAP = 16;

/**
 * See the .layout grid-auto-rows in CardLayout.module.css for the height of each row.
 */
const ROW_HEIGHT = 10;

/**
 * See the min-width in the media query in CardLayout.module.css for the 
 * minimum width before switching to masonry layout.
 */
const MIN_WIDTH = 320;

/**
 * A layout component that displays cards in a masonry layout. The cards are 
 * resized based on the window width.
 * @param {Object} props The props for the CardLayout component.
 * @param {Card[]} props.cards The array of cards to display. 
 * @param {boolean} [props.displayFilter=true] Whether to display the filter input or not.
 * @returns {JSX.Element} The CardLayout component.
 */
export default function CardLayout({ cards, displayFilter = true }) {
    /**
     * Window width to pass to the Card component. We use this to determine
     * if we need to resize the cards. We keep it here to avoid multiple 
     * event listeners on the window resize event.
     */
    const { windowWidth } = useWindowSize();

    /**
     * State to track if all cards have been resized at least once. This is 
     * used to determine if we should start loading the cards.
     */
    const [allResized, setAllResized] = useState(false);

    /**
     * State to track if each card has been resized at least once. This is
     * used to determine if we should start loading the cards.
     */
    const [cardsResized, setCardsResized] = useState(cards.map(() => false));

    /**
     * Returns a function that sets the card at the given index as resized.
     * This is used to easily update the state when a card is resized detect
     * that it has resized for the first time.
     * @param {number} index Index of the card to set as resized.
     * @returns A function that sets the card at the given index as resized.
     */
    const setCardResized = (index) => () => {
        if (!cardsResized[index]) {
            setCardsResized((cardsResized) => {
                // Creating a new array to avoid mutating the state directly
                const newCardsResized = [...cardsResized];
                newCardsResized[index] = true;

                // Check if all cards have been resized
                setAllResized(newCardsResized.every(cardResized => cardResized));

                // Return the new state
                return newCardsResized;
            });
        }
    };

    /**
     * State to track the filter input value. This is used to filter the cards
     * based on their title.
     */
    const [filter, setFilter] = useState('');

    /**
     * Handles the input change event for the filter input.
     * @param {Event} event The input change event.
     */
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    return <>
        { displayFilter &&
            <div className={styles.filter}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
                <input type="search" placeholder="Filtre" value={filter} onChange={handleFilterChange} />
            </div>
        }

        <div className={styles.layout}>
            {cards.map((card, index) =>
                <Card
                    key={card.title}
                    title={card.title}
                    content={card.content}
                    windowWidth={windowWidth}
                    allResized={allResized}
                    setCardResized={setCardResized(index)}
                    filtered={card.title.includes(filter.trim())}
                />
            )}
        </div>
    </>
}

/**
 * A Card component that displays a single card in the masonry layout.
 * @param {Object} props The props for the Card component.
 * @param {string} props.title The title of the card.
 * @param {string} props.content The content of the card.
 * @param {number} props.windowWidth The current window width. This is used to determine if the card needs to be resized. 
 * @param {boolean} props.allResized Whether all cards have been resized at least once. This is used to determine if the card should start loading.
 * @param {function} props.setCardResized Function that indicates to the layout that the card has been resized at least once.
 * @param {boolean} props.filtered Whether the card should be displayed based on the filter input value.
 * @returns {JSX.Element} The Card component.
 */
function Card({ title, content, windowWidth, allResized, setCardResized, filtered }) {
    /**
     * Ref to the card element. This is used to measure the height of the card
     * based on its content and determine how many rows it should span in the 
     * layout.
     */
    const cardRef = useRef(null);

    /**
     * State to track the number of rows the card should span in the layout.
     */
    const [rowSpan, setRowSpan] = useState(null);

    /**
     * State to track if the card has been loaded in the interface.
     */
    const [isLoaded, setLoaded] = useState(false);

    // Effect to set the row span based on the card height and window width.
    // This effect runs on window resize, when the window width changes.
    useEffect(() => {
        setCardResized();
        if (window.innerWidth < MIN_WIDTH) {
            // If the window width is less than the minimum width, we don't 
            // have a masonry layout. Every cards are one on top of the other.
            // So we set the row span to 'auto' to let the browser handle it.
            setRowSpan('auto');
        }
        else {
            // If the window width is greater than or equal to the minimum 
            // width, we have a masonry layout. We find the number of rows to 
            // span based on the card height and the gap between cards.
            const cardHeight = cardRef.current.firstChild.getBoundingClientRect().height;
            setRowSpan(Math.ceil((cardHeight + GAP) / (ROW_HEIGHT + GAP)));
        }
    }, [windowWidth]);

    // Effect that adds multiples listeners to check if the card is in the 
    // viewport. If it is, we set it as loaded to display it in the interface. 
    // This effect only runs once all cards have been resized at least once.
    useEffect(() => {
        // If all cards have not been resized yet, we don't need to do anything.
        if (!allResized) {
            return;
        }

        /**
         * Checks if the card is in the viewport. If it is, we set it as loaded
         * and remove the listeners.
         * @returns {boolean} Whether the card is in the viewport or not.
         */
        function isCardInViewport() {
            // Check if the card is in the viewport
            const { top, bottom } = cardRef.current.firstChild.getBoundingClientRect();
            const isInViewport =
                (top > 0 && top < window.document.documentElement.clientHeight) ||
                (bottom > 0 && bottom < document.documentElement.clientHeight);

            // If the card is in the viewport, we set it as loaded and remove 
            // the listeners
            if (isInViewport) {
                setLoaded(true);
                removeListeners();
            }

            // Return whether the card is in the viewport or not
            return isInViewport;
        }

        /**
         * Removes the event listeners for scroll and resize events.
         */
        function removeListeners() {
            window.removeEventListener('scroll', isCardInViewport);
            resizeObserver.unobserve(document.body);
        }

        /**
         * ResizeObserver to observe changes in the size of the web page.
         */
        const resizeObserver = new ResizeObserver(() => isCardInViewport());

        // If the card is not in the viewport initialy, we add the event 
        // listeners to update it later
        if (!isCardInViewport()) {
            window.addEventListener('scroll', isCardInViewport);
            resizeObserver.observe(document.body);
        }

        // Clean up the event listeners when the component is unmounted
        return removeListeners;
    }, [allResized])

    return <div
        ref={cardRef}
        className={styles.card + (!isLoaded ? ' ' + styles.loading : '') + (!filtered ? ' ' + styles.hidden : '')}
        style={{ gridRowEnd: `span ${rowSpan}` }}>
        <div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    </div>
}
