import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../types/store';

export const getCharacters = (state: RootState) => state.characterSlice.characters;
export const getPageInfo = (state: RootState) => state.characterSlice.pageInfo;
export const getLoadingStatus = (state: RootState) => state.characterSlice.isLoading;
export const getError = (state: RootState) => state.characterSlice.error;

export const charactersSelector = createSelector(
    [getCharacters, getPageInfo, getLoadingStatus, getError],
    (characters, pageInfo, loadingStatus, error) => {
        return {characters, pageInfo, loadingStatus, error};
    }
);
