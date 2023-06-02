import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from '../../components/Layout/Layout';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useScrollTo } from '../../hooks/useScrollTo';
import { fetchCharacter } from './store/api-actions';
import CharacterDetail from './components/ChracterDetail/CharacterDetail';
import { getCharacterState } from './store/selectors';
import EpisodesList from './components/EpisodesList/EpisodesList';

const CharacterPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const { character, loadingStatus } = useAppSelector(getCharacterState);

    useScrollTo({ top: 0 });

    useEffect(() => {
        dispatch(fetchCharacter(id));
    }, [id]);

    return (
        <Layout pageTitle={character?.name}>
            <ButtonBack />

            <>
                {character && (
                    <>
                        <CharacterDetail character={character} isLoading={loadingStatus}/>
                        <EpisodesList />
                    </>
                )}
            </>
        </Layout>
    );
};

export default CharacterPage;
