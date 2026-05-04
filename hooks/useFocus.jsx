import { useRef } from 'react';

export default function useFocus() {
    const elementRef = useRef(null);
    const setFocus = () => {
        if(elementRef.current) {
            elementRef.current.focus();   
        }
    }
    
    return [elementRef, setFocus];
}