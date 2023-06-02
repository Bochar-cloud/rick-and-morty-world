import { css } from 'styled-components';

export const baseTheme = {
    colors: {
        primary: '#BAD44E',
        secondary: '#A9D3E9',
        text: '#FFFFFF',
        elements: '#1e1e1e',
        background: '#0A0A0A',
        statusAlive: '#BFDE42',
        statusDead: '#FF4242',
        statusUnknown: '#ffb700',
        elementsHover: '#414141'
    },

    media: {
        extraLarge: 'max-width: 1200px',
        large: 'max-width: 991px',
        medium: 'max-width: 768px',
        small: 'max-width: 575px',
    },

    // in px
    fonts: {
        h1: {
            desctop: 40,
            phone: 26,
        },
        h2: {
            desctop: 34,
            phone: 22,
        },
        h3: {
            desctop: 26,
            phone: 20,
        },
        h4: {
            desctop: 24,
            phone: 18,
        },
        p: {
            desctop: 20,
            phone: 16,
        },
        header: {
            desctop: 20,
            phone: 16,
        }
    },

    // in px
    sizes: {
        container: {
            width: 1920,
        },
        header: {
            height: 100,
        },
        icon: {
            width: 34,
            height: 34,
        }
    },

    // in ms
    transitions: {
        easeInOut: '.3s ease-in-out',
    },

    // z-index
    order: {
        header: 50,
        loading: 100,
    },
};

export const visuallyHidden = css`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

export const buttonReset = css`
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    font-family: inherit;
    background-color: transparent;
    cursor: pointer;
`;

export const disabled = css`
    pointer-events: none;
    opacity: 0.3;
`;
