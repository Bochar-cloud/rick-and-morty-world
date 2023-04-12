import { useEffect, useState } from 'react';
import CharactersItem from '../CharactersItem/CharactersItem';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { getCharacters } from '../../store/selectors';
import { fetchCharacters } from '../../store/api-actions';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useObserver } from '../../../../hooks/useObserver';
import { List } from './styled-components';

const CharactersList = () => {
    const dispatch = useAppDispatch();
    const characters = useAppSelector(getCharacters);
    const [pageCount, setPageCount] = useState(0);

    const {ref, isVisible} = useObserver({
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    });

    useEffect(() => {
        dispatch(fetchCharacters(`?page=${pageCount ? pageCount + 1 : ''}`));

        setPageCount((prev) => prev + 1);
    }, [dispatch, isVisible]);

    return (
        <List>
            {characters.map((character) => (
                <CharactersItem refElement={ref} key={character.id} character={character} />
            ))}
        </List>
    );
};

export default CharactersList;
