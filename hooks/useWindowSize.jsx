import { useEffect, useState } from 'react';

export default function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(undefined);
    const [windowHeight, setWindowHeight] = useState(undefined);
    const [windowResizing, setWindowResizing] = useState(false);

    // Empty array ensures that effect is only run on mount
    useEffect(() => {
        let resizeTimer; 
        
        // Handler to call on window resize
        const handleResize = () => {
            // Set window width/height in state
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);

            // Set resizing boolean in state
            setWindowResizing(true);
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setWindowResizing(false);
            }, 400);
        }

        // Set initial window size
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return { windowWidth, windowHeight, windowResizing };
}