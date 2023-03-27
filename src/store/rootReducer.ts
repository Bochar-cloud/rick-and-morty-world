import { combineReducers } from '@reduxjs/toolkit';
import characterSlice from '../pages/CharactersPage/store/reducer';

export const rootReducer = combineReducers({
    characterSlice
});
