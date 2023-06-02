import { Character } from '../../../../types/Character';
import * as C from './components';

type CharacterProps = {
    character: Character;
};

const CharactersItem = ({ character }: CharacterProps) => {
    return (
        <C.CharacterItem  to={`/characters/${character.id}`} status={character.status}>
            <C.CharacterImageWrapper>
                <C.CharacterImage src={character.image}/>
            </C.CharacterImageWrapper>
            <C.CharacterStatus status={character.status}>{character.status}</C.CharacterStatus>
            <C.CharacterName>{character.name}</C.CharacterName>
            {/* <C.CharacterContent>
                <C.CharacterContentItem>Name: <Link to="/"></Link></C.CharacterContentItem>
                <C.CharacterContentItem>Location: <Link to="/">{character.location.name}</Link></C.CharacterContentItem>
            </C.CharacterContent> */}
        </C.CharacterItem>
    );
};

export default CharactersItem;
