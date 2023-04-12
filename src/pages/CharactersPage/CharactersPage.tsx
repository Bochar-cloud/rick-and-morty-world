import Layout from '../../components/Layout/Layout';
import CharactersList from './components/CharactersList/CharactersList';

const CharactersPage = () => {
    return (
        <Layout pageTitle="Characters" pageText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, perferendis.">
            <CharactersList />
        </Layout>
    );
};

export default CharactersPage;
