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
    currentPage: number
};

const initialState: CharacterSlice = {
    characters: [],
    pageInfo: null,
    isLoading: false,
    error: '',
    currentPage: 1,
};

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            if (action.payload === state.currentPage) {
                return;
            }

            state.currentPage = action.payload;
        }
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

export default charactersSlice.reducer;
export const { setCurrentPage } = charactersSlice.actions;
