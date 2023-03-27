import { PaginationInfo } from './pagination-info';
import type { Character } from './character';

export type CharacterPage = {
    info: PaginationInfo,
    results: Character[]
};
