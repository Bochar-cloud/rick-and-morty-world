import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../../types/Character';
import { Episode } from '../../../types/Episode';
import { fetchCharacter, fetchEpisodes } from './api-actions';

export type CharacterSlice = {
    character: Character | null,
    isLoading: boolean,
    error: string,
    episodes: Episode[]
};

const initialState: CharacterSlice = {
    character: null,
    isLoading: false,
    error: '',
    episodes: [],
};

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchCharacter.pending.type] : (state) => {
            state.isLoading = true;
        },
        [fetchCharacter.fulfilled.type] : (state, action: PayloadAction<Character>) => {
            state.character = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        [fetchCharacter.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchEpisodes.pending.type] : (state) => {
            state.isLoading = true;
        },
        [fetchEpisodes.fulfilled.type] : (state, action: PayloadAction<Episode[]>) => {
            state.episodes = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        [fetchEpisodes.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default characterSlice.reducer;
// export const { addCharacters } = characterSlice.actions;
