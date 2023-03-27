import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #67FFFC;
        --color-primary-second: #BFDE42;
        --color-link: #67FFFC;
        --color-text: #FFFFFF;
        --color-text-invert: #000000;
        --color-ui: #121212;
        --radius: 10px;
        --transition: .3s ease-in-out;
        --color-error: #FF4242;

        --color-status-alive: #BFDE42;
        --color-status-dead: #FF4242;
        --color-status-unknown: #ffb700;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    html {
        position: relative;
        background: url('images/cosmos.svg'), #0A0A0A;
    }

    body {
        margin: 0;
        font-family: 'Kanda';
        font-size: 24px;
        line-height: 110%;
        font-weight: 400;
        letter-spacing: 0.10em;
        color: #fff;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100%;

        main {
            flex-grow: 1;
        }
    }

    img, svg {
        display: block;
    }

    a {
        color: var(--color-link);
        text-decoration: none;
    }
`;

export default GlobalStyles;
