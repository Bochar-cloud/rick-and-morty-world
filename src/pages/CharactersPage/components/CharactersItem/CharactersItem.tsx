import { Link } from 'react-router-dom';
import { CharacterItem, CharacterImage, CharacterStatus, CharacterContent, CharacterName, CharacterLocation, CharacterInfo } from './styled-components';
import type { Character } from '../../../../types/character';

type CharacterProps = {
    character: Character
};

const CharactersItem = ({ character }: CharacterProps) => {
    return (
        <CharacterItem>
            <Link to="/"><CharacterImage src={character.image}/></Link>
            <CharacterInfo>
                <CharacterStatus status={character.status}>{character.status}</CharacterStatus>
            </CharacterInfo>
            <CharacterContent>
                <CharacterName>Name: <Link to="/">{character.name}</Link></CharacterName>
                <CharacterLocation>Location: <Link to="/">{character.location.name}</Link></CharacterLocation>
            </CharacterContent>
        </CharacterItem>
    );
};

export default CharactersItem;
