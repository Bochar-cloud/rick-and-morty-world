import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Character } from '../../../types/Character';
import { Episode } from '../../../types/Episode';
import { Response } from '../../../types/Response';

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

export const fetchEpisodes = createAsyncThunk<Response<Episode[]>, string[] | undefined>(
    'character/fetchLocations',
    async (ids, { rejectWithValue }) => {
        try {
            const response = await axios.get<Response<Episode[]>>(`https://rickandmortyapi.com/api/episode/${ids?.length ? ids.join(',') : ''}`);
            return response.data;
        } catch (err) {
            const error = err as AxiosError<{ error: string }>;
            return rejectWithValue(error.response?.data.error);
        }
    },
);
