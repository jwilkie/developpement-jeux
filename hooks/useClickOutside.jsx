import { useEffect, useRef } from 'react';

export default function useClickOutside(listener) {
    /**
     * Element ref that you want to detect the outside click.
     */
    const elementRef = useRef(null);

    /**
     * Executed when there is a click on the page. If the click is outside the 
     * element, the listener is executed.
     * @param {Event} event The click event object
     */
    const onClick = (event) => {
        // If the element does not contains the target, we execute the listener
        if (!elementRef.current.contains(event.target)) {
            listener(event);
        }
    }

    /**
     * Register and unregister the mouse click on mount and demount
     */
    useEffect(() => {
        document.addEventListener('mousedown', onClick);

        return () => {
            document.removeEventListener('mousedown', onClick);
        }
    });

    // Return the element ref so it can be linked in the component.
    return elementRef;
}
