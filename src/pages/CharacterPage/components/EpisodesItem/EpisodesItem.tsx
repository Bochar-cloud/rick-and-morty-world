import { Episode } from '../../../../types/Episode';
import * as C from './components';

interface IProps {
    episode: Episode;
};

const EpisodesItem = ({episode}: IProps) => {
    return (
        <C.Episode to={episode.url}>
            <C.EpisodeName>{episode.name}</C.EpisodeName>
            <C.EpisodeCount>{episode.episode}</C.EpisodeCount>
        </C.Episode>
    );
};

export default EpisodesItem;
