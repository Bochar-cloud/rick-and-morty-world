import { CharacterLocation } from './CharacterLocation';
import { CharacterGender } from './CharacterGender';
import { CharacterStatus } from './CharacterStatus';

export interface Character {
    id: number,
    created: string,
    episode: string[],
    gender: CharacterGender,
    image: string,
    location: CharacterLocation,
    name: string,
    origin: CharacterLocation,
    species: string,
    status: CharacterStatus,
    type: string,
    url: string,
};
