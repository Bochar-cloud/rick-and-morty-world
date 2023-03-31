import Layout from '../../components/Layout/Layout';
import { GridContainer } from '../../styled-components/GridContainer';
import { PageTitle } from '../../consts/page-title';
import CharactersFilter from './components/CharactersFilter/CharactersFilter';
import CharactersList from './components/CharactersList/CharactersList';

const CharactersPage = () => {
    return (
        <Layout pageTitle={PageTitle.Characters}>
            <GridContainer>
                <CharactersFilter />
                <CharactersList />
            </GridContainer>
        </Layout>
    );
};

export default CharactersPage;
