import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../types/store';

export const getCharacter = (state: RootState) => state.characterSlice.character;
export const getEpisodes = (state:RootState) => state.characterSlice.episodes;
export const getLoadingStatus = (state: RootState) => state.characterSlice.isLoading;
export const getError = (state: RootState) => state.characterSlice.error;

export const getCharacterState = createSelector(
    [getCharacter, getEpisodes, getLoadingStatus, getError],
    (character, episodes, loadingStatus, error) => {
        return {
            character,
            episodes,
            loadingStatus,
            error
        };
    }
);
