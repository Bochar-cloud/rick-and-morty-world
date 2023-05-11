import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Response } from '../../../types/Response';
import { Character } from '../../../types/Character';

export const fetchCharacters = createAsyncThunk<Response<Character[]>, string | undefined>(
    'characters/fatchAll',
    async (params, { rejectWithValue }) => {
        try {
            const response = await axios.get<Response<Character[]>>(`https://rickandmortyapi.com/api/character?${params ? `${params}` : ''}`);
            return response.data;
        } catch (err) {
            const error = err as AxiosError<{ error: string }>;
            return rejectWithValue(error.response?.data.error);
        }
    }
);
