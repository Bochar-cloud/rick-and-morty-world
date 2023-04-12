import { Link } from 'react-router-dom';
import { CharacterItem, CharacterImageLink, CharacterImage, CharacterStatus, CharacterContent, CharacterName, CharacterLocation, CharacterInfo } from './styled-components';
import type { Character } from '../../../../types/character';

type CharacterProps = {
    character: Character;
    refElement?: React.RefObject<HTMLDivElement>;
};

const CharactersItem = ({ character, refElement }: CharacterProps) => {
    return (
        <CharacterItem ref={refElement} status={character.status}>
            <CharacterImageLink to="/"><CharacterImage src={character.image}/></CharacterImageLink>
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
