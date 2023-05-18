import styled, {css} from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const buttonReset = css`
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const SliderWrapper = styled.div`
    position: relative;
`;

export const SliderInner = styled.div`
    /* margin: -90px 0 0 0;
    padding: 90px 0 0 0; */
    width: 100vw;
    overflow: hidden;
`;

export const Slider = styled(Swiper)`
    overflow: unset;
    margin: 0;
    padding: 0;
    padding-right: 30px;
    width: 100%;
    max-width: 1410px;
`;

export const Slide = styled(SwiperSlide)`
    height: auto;
`;

export const SliderButtons = styled.div`
    position: absolute;
    right: 0;
    top: -90px;
`;

export const SliderButtonPrev = styled.button.attrs({
    type: 'button'
})`
    ${buttonReset}
`;

export const SliderButtonNext = styled.button.attrs({
    type: 'button'
})`
    ${buttonReset}
`;
