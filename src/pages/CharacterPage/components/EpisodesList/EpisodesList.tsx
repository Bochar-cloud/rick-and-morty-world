import { useEffect } from 'react';
import EpisodesItem from '../EpisodesItem/EpisodesItem';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { getEpisodes } from '../../store/selectors';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { fetchCharacterEpisodes } from '../../store/api-actions';
import { TitleH2 } from '../../../../styles/components';
import Slider from '../../../../components/Slider/Slider';
import { Slide } from '../../../../components/Slider/components';

const EpisodesList = () => {
    const dispatch = useAppDispatch();
    const episodes = useAppSelector(getEpisodes);
    const episodesIds = useAppSelector(state => state.characterSlice.episodesIds);

    useEffect(() => {
        dispatch(fetchCharacterEpisodes(episodesIds));
    }, [episodesIds]);

    return (
        <>
            <TitleH2>Episodes</TitleH2>
            <Slider
                options={{
                    slidesPerView: 4,
                    spaceBetween: 50,
                    length: episodes.length
                }}
            >
                {episodes.map((episode) => (
                    <Slide key={episode.name}>
                        <EpisodesItem episode={episode}/>
                    </Slide>
                ))}
            </Slider>
        </>
    );
};

export default EpisodesList;
