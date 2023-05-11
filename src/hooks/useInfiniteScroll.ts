import { useEffect, useState } from 'react';
import { AsyncThunk } from '@reduxjs/toolkit';
import { Response } from '../types/Response';
import { Character } from '../types/Character';
import { Info } from '../types/Info';
import { useIntersectionObserver } from './useIntersectionObserver';
import { useAppDispatch } from './useAppDispatch';

const FIRST_PAGE = 1;

export const useInfiniteScroll = (
    ref: React.MutableRefObject<null>,
    fetch: AsyncThunk<Response<Character[]>, string | undefined, {}>,
    pageInfo: Info | null
) => {
    const [page, setPage] = useState(FIRST_PAGE);
    const [isUnobserve, setIsUnobserve] = useState(false);

    const isVisible = useIntersectionObserver(ref, isUnobserve);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (pageInfo && pageInfo.pages < page) {
            setIsUnobserve(true);
            return;
        }

        if (isVisible) {
            dispatch(fetch(`page=${page}`));
            setPage((prev) => prev + 1);
        }
    }, [isVisible]);
};
