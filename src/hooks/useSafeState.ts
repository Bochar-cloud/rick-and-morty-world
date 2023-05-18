import { useRef, useEffect, useState, useCallback } from 'react';

const useIsMounted = () => {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    return isMounted;
};

export const useSafeState = <S>(initialValue: (() => S) | S) => {
    const [value, setValue] = useState(initialValue);

    const isMounted = useIsMounted();

    const setState = useCallback((newValue: React.SetStateAction<S>) => {
        if (!isMounted.current) {
            return;
        }

        setValue(newValue);
    }, []);

    return [value, setState] as const;
};
