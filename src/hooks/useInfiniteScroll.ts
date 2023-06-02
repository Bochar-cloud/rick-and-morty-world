import { useEffect, useState } from 'react';
import { AsyncThunk } from '@reduxjs/toolkit';
import { Response } from '../types/Response';
import { Character } from '../types/Character';
import { Info } from '../types/Info';
import { getPageCount } from '../pages/CharactersPage/store/selectors';
import { setPageCount } from '../pages/CharactersPage/store/reducer';
import { useIntersectionObserver } from './useIntersectionObserver';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useInfiniteScroll = (
    ref: React.MutableRefObject<null>,
    fetch: AsyncThunk<Response<Character[]>, string | undefined, {}>,
    pageInfo: Info | null
) => {
    const page = useAppSelector(getPageCount);

    const [isUnobserve, setIsUnobserve] = useState(false);

    const isVisible = useIntersectionObserver(ref, isUnobserve);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (pageInfo && pageInfo.pages < page) {
            setIsUnobserve(true);
            return;
        }

        if (isVisible) {
            dispatch(setPageCount(page));
            dispatch(fetch(`page=${page}`));
        }
    }, [isVisible]);
};
