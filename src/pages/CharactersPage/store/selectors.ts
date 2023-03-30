import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../types/store';

export const getCharacters = (state: RootState) => state.characterSlice.characters;
export const getPagination = (state: RootState) => state.characterSlice.pagination;
export const getLoadingStatus = (state: RootState) => state.characterSlice.isLoading;
export const getError = (state: RootState) => state.characterSlice.error;

export const charactersSelector = createSelector(
    [getCharacters, getPagination, getLoadingStatus, getError],
    (characters, pagination, loadingStatus, error) => {
        return {characters, pagination, loadingStatus, error};
    }
);
