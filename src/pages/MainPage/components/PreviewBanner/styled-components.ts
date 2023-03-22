import styled, { keyframes } from 'styled-components';

const rotatePortal = keyframes`
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

export const WrapperInner = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const ImageWrapper = styled.div`
    position: relative;
    margin: 0 auto 40px auto;
    max-width: 500px;
    z-index: 0;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 500px;
        height: 500px;
        background-image: url('/images/Rick-and-Morty-portal.svg');
        background-size: cover;
        transform: translate(-50%, -50%);
        z-index: -1;
        animation: ${rotatePortal} 15s linear infinite;
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Content = styled.div`
    max-width: 900px;
`;

export const Text = styled.p`
    margin: 0 0 30px 0;
    width: 100%;
    text-align: center;
    font-size: 34px;
    line-height: 130%;

    &:last-child {
        margin: 0;
    }
`;
