import Filter from '../../components/Filter/Filter';
import Layout from '../../components/Layout/Layout';
import CharactersList from './components/CharactersList/CharactersList';


const CharactersPage = () => {
    return (
        <Layout pageTitle="Characters" pageText="Here are all the characters from the Rick and Morty universe.">
            <Filter />
            <CharactersList />
        </Layout>
    );
};

export default CharactersPage;
