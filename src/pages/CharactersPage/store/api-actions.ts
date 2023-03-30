import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { CharacterPage } from '../../../types/character-page';

export const fetchCharacters = createAsyncThunk<CharacterPage, string>(
    'characters/fatchAll',
    async (count, { rejectWithValue }) => {
        try {
            const response = await axios.get<CharacterPage>(`https://rickandmortyapi.com/api/character${count ? `?page=${count}` : ''}`);

            return response.data;
        } catch (err) {
            const error = err as AxiosError<{ error: string }>;
            return rejectWithValue(error.response?.data.error);
        }
        
    }
);
