import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../../types/Character';
import { Episode } from '../../../types/Episode';
import { getIdentifiersFromPaths } from '../../../helpers/getIdentifiersFromPaths';
import { fetchCharacter, fetchCharacterEpisodes } from './api-actions';

export type CharacterSlice = {
    character: Character | null,
    isLoading: boolean,
    error: string,
    episodes: Episode[],
    episodesIds: string[],
};

const initialState: CharacterSlice = {
    character: null,
    isLoading: false,
    error: '',
    episodes: [],
    episodesIds: [],
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
            state.episodesIds = getIdentifiersFromPaths(state.character.episode);
            state.isLoading = false;
            state.error = '';
        },
        [fetchCharacter.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [fetchCharacterEpisodes.pending.type] : (state) => {
            state.isLoading = true;
        },
        [fetchCharacterEpisodes.fulfilled.type] : (state, action: PayloadAction<Episode[] | Episode>) => {
            if (!Array.isArray(action.payload)) {
                state.episodes = [action.payload];
                state.isLoading = false;
                state.error = '';
                return;
            }

            state.episodes = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        [fetchCharacterEpisodes.rejected.type] : (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default characterSlice.reducer;
// export const { addCharacters } = characterSlice.actions;
