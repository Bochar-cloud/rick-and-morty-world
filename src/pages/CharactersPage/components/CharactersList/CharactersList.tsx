import { Character } from '../../../../types/character';
import { PaginationInfo } from '../../../../types/pagination-info';
import CharactersItem from '../CharactersItem/CharactersItem';
import Pagination from '../../../../components/Pagination/Pagination';
import { List } from './styled-components';

type CharactersListProps = {
    characters: Character[];
    pagination: PaginationInfo | null;
};

const CharactersList = ({ characters, pagination }: CharactersListProps) => {
    return (
        <List>
            {characters.map((character) => (
                <CharactersItem key={character.id} character={character}/>
            ))}

            <Pagination pagination={pagination}/>
        </List>
    );
};

export default CharactersList;
