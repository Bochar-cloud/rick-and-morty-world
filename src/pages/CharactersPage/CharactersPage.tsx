import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { GridContainer } from '../../styled-components/GridContainer';
import { PageTitle } from '../../consts/page-title';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import CharactersFilter from './components/CharactersFilter/CharactersFilter';
import CharactersList from './components/CharactersList/CharactersList';
import { fetchCharacters } from './store/api-actions';
import { charactersSelector } from './store/selectors';

const CharactersPage = () => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams('');
    const pageCount = searchParams.get('page');

    useEffect(() => {
        dispatch(fetchCharacters(`${pageCount ? `${pageCount}` : ''}`));
    }, [pageCount ,dispatch]);

    const {characters, pagination, loadingStatus, error} = useAppSelector(charactersSelector);

    return (
        <Layout pageTitle={PageTitle.Characters}>
            <GridContainer>
                {loadingStatus && 'Loading...'}
                {error && `${error}`}
                {characters.length && (
                    <>
                        <CharactersFilter />
                        <CharactersList characters={characters} pagination={pagination} />
                    </>
                )}
            </GridContainer>
        </Layout>
    );
};

export default CharactersPage;
