import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import Swiper from 'swiper/types/swiper-class';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import EpisodesItem from '../EpisodesItem/EpisodesItem';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { getEpisodes } from '../../store/selectors';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { fetchEpisodes } from '../../store/api-actions';
import { TitleH2 } from '../../../../styles/components';
import * as C from './components';


interface IProps {
    episodesIds?: string[];
};

const EpisodesList = ({episodesIds = []}: IProps) => {
    const dispatch = useAppDispatch();
    const episodes = useAppSelector(getEpisodes);
    const [slider, setSlider] = useState<Swiper | null>(null);

    const buttonPrevClickHandler = () => {
        if (slider) {
            slider.slidePrev();
        }
    };

    const buttonNextClickHandler = () => {
        if (slider) {
            slider.slideNext();
        }
    };

    const swiperInitHandler = (swiper: Swiper) => {
        setSlider(swiper);
    };

    useEffect(() => {
        dispatch(fetchEpisodes(episodesIds));
    }, []);

    return (
        <>
            <TitleH2>Episodes</TitleH2>

            <C.SliderWrapper>
                <C.SliderInner>
                    <C.Slider
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        onSwiper={(swiper) => swiperInitHandler(swiper)}
                    >
                        
                        {episodes && episodes.map((episode) => (
                            <C.Slide key={episode.name}>
                                <EpisodesItem episode={episode} />
                            </C.Slide>
                        ))}
                    </C.Slider>
                    <C.SliderButtons>
                        <C.SliderButtonPrev onClick={buttonPrevClickHandler}>
                            <FiChevronLeft size={50} />
                        </C.SliderButtonPrev>
                        <C.SliderButtonNext onClick={buttonNextClickHandler}>
                            <FiChevronRight size={50} />
                        </C.SliderButtonNext>
                    </C.SliderButtons>
                </C.SliderInner>
            </C.SliderWrapper>
        </>
    );
};

export default EpisodesList;
