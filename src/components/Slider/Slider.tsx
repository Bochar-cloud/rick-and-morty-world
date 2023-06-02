import { useState, useEffect } from 'react';
import Swiper from 'swiper/types/swiper-class';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as C from './components';

type SliderProps = {
    children: JSX.Element | JSX.Element[];
    options: {
        slidesPerView: number,
        spaceBetween: number,
        length: number
    };
};

const Slider = ({ children, options }: SliderProps) => {
    const [slider, setSlider] = useState<Swiper | null>(null);
    const [isDestroy, setIsDestroy] = useState(false);

    useEffect(() => {
        if (slider && options.length && options.length <= options.slidesPerView) {
            slider.destroy(false);
            setIsDestroy(true);
            return;
        }

        setIsDestroy(false);
        slider?.init();
    }, [slider, isDestroy, options.length]);

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

    return (
        <C.SliderWrapper>
            <C.SliderInner isDestroy={isDestroy}>
                <C.Slider
                    spaceBetween={options.spaceBetween}
                    slidesPerView={options.slidesPerView}
                    onSwiper={(swiper) => swiperInitHandler(swiper)}
                >
                    {children}
                </C.Slider>
                {!isDestroy &&
                    <C.SliderButtons>
                        <C.SliderButtonPrev onClick={buttonPrevClickHandler}>
                            <FiChevronLeft size={50} />
                        </C.SliderButtonPrev>
                        <C.SliderButtonNext onClick={buttonNextClickHandler}>
                            <FiChevronRight size={50} />
                        </C.SliderButtonNext>
                    </C.SliderButtons>
                }
            </C.SliderInner>
        </C.SliderWrapper>
    );
};

export default Slider;
