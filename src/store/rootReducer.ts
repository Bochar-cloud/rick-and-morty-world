import { combineReducers } from '@reduxjs/toolkit';
import charactersSlice from '../pages/CharactersPage/store/reducer';
import characterSlice from '../pages/CharacterPage/store/reducer';

export const rootReducer = combineReducers({
    charactersSlice,
    characterSlice
});
