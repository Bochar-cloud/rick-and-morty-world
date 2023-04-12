import { useEffect, useRef, useState } from 'react';

export const useObserver = (options: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const callback: IntersectionObserverCallback = ([entry]) => {
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);

        const element = ref.current;

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };

    }, [ref, options]);

    return {ref, isVisible};
};
