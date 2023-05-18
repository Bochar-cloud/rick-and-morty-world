import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../types/store';

export const getCharacters = (state: RootState) => state.charactersSlice.characters;
export const getPageInfo = (state: RootState) => state.charactersSlice.pageInfo;
export const getLoadingStatus = (state: RootState) => state.charactersSlice.isLoading;
export const getError = (state: RootState) => state.charactersSlice.error;

export const charactersSelector = createSelector(
    [getCharacters, getPageInfo, getLoadingStatus, getError],
    (characters, pageInfo, loadingStatus, error) => {
        return {characters, pageInfo, loadingStatus, error};
    }
);
