import { useState, useEffect } from 'react';

function getWindowPageOffset() {
    const { pageYOffset: offsetY } = window
    return {
        offsetY
    };
  }
  
export default function useWindowOffset() {
    const [offset, setOffset] = useState(getWindowPageOffset());

    useEffect(() => {
        function handleScroll() {
            setOffset(getWindowPageOffset());
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return offset;
}