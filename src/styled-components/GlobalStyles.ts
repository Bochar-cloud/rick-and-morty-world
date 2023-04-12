import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #BAD44E;
        --color-text: #FFFFFF;
        --color-ui: #1e1e1e;
        --color-bg: #0A0A0A;




        --color-primary-second: #BFDE42;
        --color-link: #67FFFC;
        --color-text-invert: #000000;
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
        background-color: var(--color-bg);
        /* background: url('images/cosmos.svg'), var(--color-bg); */
    }

    body {
        margin: 0;
        padding: 100px 0 0 0;
        font-family: 'Rubik';
        font-size: 18px;
        line-height: 150%;
        font-weight: 300;
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
        color: var(--color-primary);
        text-decoration: none;
        opacity: .7;
        transition: var(--transition);

        &:hover {
            opacity: 1;
        }
    }
`;

export default GlobalStyles;
