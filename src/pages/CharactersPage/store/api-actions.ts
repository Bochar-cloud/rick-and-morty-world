import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { CharacterPage } from '../../../types/character-page';

export const fetchCharacters = createAsyncThunk(
    'characters/fatchAll',
    async (_args, { rejectWithValue }) => {
        try {
            const response = await axios.get<CharacterPage>('https://rickandmortyapi.com/api/character');
            return response.data;
        } catch (err) {
            const error = err as AxiosError<{ error: string }>;
            return rejectWithValue(error.response?.data.error);
        }
        
    }
);
