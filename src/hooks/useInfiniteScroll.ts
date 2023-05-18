import { useEffect, useState } from 'react';
import { AsyncThunk } from '@reduxjs/toolkit';
import { useSearchParams } from 'react-router-dom';
import { Response } from '../types/Response';
import { Character } from '../types/Character';
import { Info } from '../types/Info';
// import { setCurrentPage } from '../pages/CharactersPage/store/reducer';
import { useIntersectionObserver } from './useIntersectionObserver';
import { useAppDispatch } from './useAppDispatch';
// import { useSafeState } from './useSafeState';
import { useAppSelector } from './useAppSelector';

const FIRST_PAGE = 1;

export const useInfiniteScroll = (
    ref: React.MutableRefObject<null>,
    fetch: AsyncThunk<Response<Character[]>, string | undefined, {}>,
    pageInfo: Info | null
) => {
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const pageNumber = Number(searchParams.get('page'));
    const [currentPage, setCurrentPage] = useState(pageNumber ? pageNumber + 1 : FIRST_PAGE);

    const [isUnobserve, setIsUnobserve] = useState(false);

    const isVisible = useIntersectionObserver(ref, isUnobserve);

    useEffect(() => {
        if (pageInfo && pageInfo.pages < currentPage) {
            setIsUnobserve(true);
            return;
        }

        if (isVisible) {
            dispatch(fetch(`page=${currentPage}`));
            setSearchParams({page: String(currentPage)});
            setCurrentPage((prev) => prev + 1);
        }
    }, [isVisible]);
};
