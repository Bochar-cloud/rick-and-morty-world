import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Character } from '../../../types/Character';
import { Episode } from '../../../types/Episode';

export const fetchCharacter = createAsyncThunk<Character, string | undefined>(
    'character/fetchCharacter',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get<Character>(`https://rickandmortyapi.com/api/character/${id ? `${id}` : ''}`);
            return response.data;
        } catch (err) {
            const error = err as AxiosError<{ error: string }>;
            return rejectWithValue(error.response?.data.error);
        }
    },
);

export const fetchCharacterEpisodes = createAsyncThunk<Episode[] | Episode, string[] | undefined>(
    'character/fetchCharacterEpisodes',
    async (ids, { rejectWithValue }) => {
        try {
            const response = await axios.get<Episode[] | Episode>(`https://rickandmortyapi.com/api/episode/${ids?.length ? ids.join(',') : ''}`);

            return response.data;
        } catch (err) {
            const error = err as AxiosError<{ error: string }>;
            return rejectWithValue(error.response?.data.error);
        }
    },
);
