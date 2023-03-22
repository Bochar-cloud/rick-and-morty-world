import { CharacterItem, CharacterImage, CharacterStatus, CharacterSpecies, CharacterContent, CharacterName, CharacterLocation, CharacterInfo } from './styled-components';
import type { Character } from '../../../../types/character';

type CharacterProps = {
    character: Character
};

const CharactersItem = ({ character }: CharacterProps) => {
    return (
        <CharacterItem>
            <CharacterImage src={character.image}/>
            <CharacterInfo>
                <CharacterStatus>{character.status}</CharacterStatus>
                <CharacterSpecies>{character.species}</CharacterSpecies>
            </CharacterInfo>
            <CharacterContent>
                <CharacterName>{character.name}</CharacterName>
                <CharacterLocation>{character.location.name}</CharacterLocation>
                {/* <CharacterEpisode>{character.episode}</CharacterEpisode> */}
            </CharacterContent>
        </CharacterItem>
    );
};

export default CharactersItem;
