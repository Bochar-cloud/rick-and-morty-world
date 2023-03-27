import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginationInfo } from '../../../types/pagination-info';
import { fetchCharacters } from './api-actions';
import type { Character } from '../../../types/character';
import type { CharacterPage } from '../../../types/character-page';

export type CharacterSlice = {
    characters: Character[],
    pagination: PaginationInfo | null;
    isLoading: boolean,
    error: string,
};

const initialState: CharacterSlice = {
    characters: [],
    pagination: null,
    isLoading: false,
    error: '',
};

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending.type] : (state) => {
            state.isLoading = true;
        },
        [fetchCharacters.fulfilled.type] : (state, action: PayloadAction<CharacterPage>) => {
            state.isLoading = false;
            state.error = '';
            state.characters = action.payload.results;
            state.pagination = action.payload.info;
        },
        [fetchCharacters.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default characterSlice.reducer;
