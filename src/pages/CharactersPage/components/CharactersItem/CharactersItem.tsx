import { Link } from 'react-router-dom';
import { Character } from '../../../../types/Character';
import * as C from './components';

type CharacterProps = {
    character: Character;
};

const CharactersItem = ({ character }: CharacterProps) => {
    return (
        <C.CharacterItem status={character.status}>
            <C.CharacterImageLink to={`/characters/${character.id}`}><C.CharacterImage src={character.image}/></C.CharacterImageLink>
            <C.CharacterStatus status={character.status}>{character.status}</C.CharacterStatus>
            <C.CharacterContent>
                <C.CharacterContentItem>Name: <Link to="/">{character.name}</Link></C.CharacterContentItem>
                <C.CharacterContentItem>Location: <Link to="/">{character.location.name}</Link></C.CharacterContentItem>
            </C.CharacterContent>
        </C.CharacterItem>
    );
};

export default CharactersItem;
