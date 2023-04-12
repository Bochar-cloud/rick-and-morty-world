import { useSearchParams } from 'react-router-dom';

export const useAppSearchParams = (name: string, value: string): URLSearchParams => {
    const [searchParams, setSearchParams] = useSearchParams();

    setSearchParams(`${name}=${value}`);

    return searchParams;
};
