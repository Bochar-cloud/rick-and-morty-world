import { Info } from './Info';

export interface Response<T> {
    info: Info,
    results: T,
};
