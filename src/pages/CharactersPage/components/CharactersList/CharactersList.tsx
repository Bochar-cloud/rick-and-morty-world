import { useRef } from 'react';
import CharactersItem from '../CharactersItem/CharactersItem';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { charactersSelector } from '../../store/selectors';
import { fetchCharacters } from '../../store/api-actions';
import { useInfiniteScroll } from '../../../../hooks/useInfiniteScroll';
import Loading from '../../../../components/Loading/Loading';
import * as C from './components';

const CharactersList = () => {
    const { characters, loadingStatus, pageInfo } = useAppSelector(charactersSelector);
    const refElement = useRef(null);

    useInfiniteScroll(refElement, fetchCharacters, pageInfo);

    return (
        <>
            <C.List>
                {characters.map((character) => {
                    return <CharactersItem key={character.id} character={character} />;
                })}
            </C.List>
            {loadingStatus && <Loading />}
            <div ref={refElement}></div>
        </>
    );
};

export default CharactersList;
