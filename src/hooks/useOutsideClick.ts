import { useEffect, RefObject , useRef} from 'react';

export const useOutsideClick = (callback: () => void) => {
    const ref: RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
  
        document.addEventListener('mousedown', handleClickOutside);
  
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);

    return ref;
};
