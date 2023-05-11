import { useEffect, useState } from 'react';

export const useIntersectionObserver = (ref: React.MutableRefObject<null>, isUnobserve: boolean) => {
    const [isVisisible, setIsVisible] = useState(false);

    const observerCallback: IntersectionObserverCallback = ([entry]) => {
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        };

        const observer = new IntersectionObserver(observerCallback, options);
        const element = ref.current;

        if (isUnobserve) {
            return () => {
                if (element) {
                    observer.unobserve(element);
                }
            };
        }

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref, isUnobserve]);

    return isVisisible;
};
