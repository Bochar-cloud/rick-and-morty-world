import { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { GridContainer } from '../../styled-components/GridContainer';
import { PageTitle } from '../../consts/page-title';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Pagination from '../../components/Pagination/Pagination';
import CharactersFilter from './components/CharactersFilter/CharactersFilter';
import CharactersList from './components/CharactersList/CharactersList';
import { fetchCharacters } from './store/api-actions';

const CharactersPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    const {characters, isLoading, error, pagination} = useAppSelector((state) => state.characterSlice);

    return (
        <Layout pageTitle={PageTitle.Characters}>
            <GridContainer>
                {isLoading && 'Loading...'}
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
