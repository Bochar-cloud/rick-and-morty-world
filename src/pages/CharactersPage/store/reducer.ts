import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Info } from '../../../types/Info';
import { Response } from '../../../types/Response';
import { Character } from '../../../types/Character';
import { fetchCharacters } from './api-actions';

export type CharacterSlice = {
    characters: Character[],
    pageInfo: Info | null;
    isLoading: boolean,
    error: string,
};

const initialState: CharacterSlice = {
    characters: [],
    pageInfo: null,
    isLoading: false,
    error: '',
};

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchCharacters.pending.type] : (state) => {
            state.isLoading = true;
        },
        [fetchCharacters.fulfilled.type] : (state, action: PayloadAction<Response<Character[]>>) => {
            state.isLoading = false;
            state.error = '';
            state.characters = [...state.characters, ...action.payload.results];
            state.pageInfo = action.payload.info;
        },
        [fetchCharacters.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default characterSlice.reducer;
// export const { addCharacters } = characterSlice.actions;
