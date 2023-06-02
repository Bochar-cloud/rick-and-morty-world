import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CharactersItem from '../CharactersItem/CharactersItem';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { charactersSelector } from '../../store/selectors';
import { fetchCharacters } from '../../store/api-actions';
import Loading from '../../../../components/Loading/Loading';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import Pagination from '../../../../components/Pagination/Pagination';
import { useScrollTo } from '../../../../hooks/useScrollTo';
import { useConcatSearchParams } from '../../../../hooks/useConcatSearchParams';
import * as C from './components';

const CharactersList = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const pageCount = searchParams.get('page');
    const { characters, loadingStatus, pageInfo, error } = useAppSelector(charactersSelector);

    const {queryParams } = useConcatSearchParams(searchParams);

    useEffect(() => {
        dispatch(fetchCharacters(queryParams));
    }, [pageCount, queryParams]);

    useScrollTo({
        top: 0,
        behavior: 'smooth'
    });

    return (
        <C.ListWrapper>
            {loadingStatus && <Loading />}
            {error && <h2>{error}</h2>}
            {!error && <>
                <C.List>
                    {characters.map((character) => {
                        return <CharactersItem key={character.id} character={character} />;
                    })}
                </C.List>
                <Pagination lastPage={pageInfo?.pages} />
            </>}
        </C.ListWrapper>
    );
};

export default CharactersList;
