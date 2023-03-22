import Layout from '../../components/Layout/Layout';
import { GridContainer } from '../../styled-components/GridContainer';
import CharactersFilter from './components/CharactersFilter/CharactersFilter';
import CharactersList from './components/CharactersList/CharactersList';

const CharactersPage = () => {
    return (
        <Layout>
            <GridContainer>
                <CharactersFilter />
                <CharactersList />
            </GridContainer>
        </Layout>
    );
};

export default CharactersPage;
