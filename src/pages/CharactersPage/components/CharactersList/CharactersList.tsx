import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CharactersItem from '../CharactersItem/CharactersItem';
import Pagination from '../../../../components/Pagination/Pagination';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { getCharacters } from '../../store/selectors';
import { fetchCharacters } from '../../store/api-actions';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useScrollTo } from '../../../../hooks/useScrollTo';
import { List } from './styled-components';

const CharactersList = () => {
    const dispatch = useAppDispatch();
    const characters = useAppSelector(getCharacters);

    const [searchParams] = useSearchParams('');
    const pageCount = searchParams.get('page');

    useScrollTo({
        top: 0,
        behavior: 'smooth'
    });

    useEffect(() => {
        dispatch(fetchCharacters(`${pageCount ? `${pageCount}` : ''}`));
    }, [pageCount ,dispatch]);

    return (
        <List>
            {characters.map((character) => (
                <CharactersItem key={character.id} character={character}/>
            ))}

            <Pagination />
        </List>
    );
};

export default CharactersList;
