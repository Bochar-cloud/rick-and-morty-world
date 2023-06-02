import { createGlobalStyle } from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import { baseTheme } from './theme';
import { adpaptiveFont } from './mixins';

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
        ${adpaptiveFont(baseTheme.fonts.p.desctop, baseTheme.fonts.p.phone)}
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

    a, button {
        color: var(--color-primary);
        text-decoration: none;
        opacity: .7;
        transition: var(--transition);

        &:hover {
            opacity: 1;
        }
    }

    h1 {
        ${adpaptiveFont(baseTheme.fonts.h1.desctop, baseTheme.fonts.h1.phone)}
        font-weight: 700;
        line-height: 150%;
    }

    h2 {
        ${adpaptiveFont(baseTheme.fonts.h2.desctop, baseTheme.fonts.h2.phone)}
        font-weight: 700;
        line-height: 150%;
    }

    h3 {
        ${adpaptiveFont(baseTheme.fonts.h3.desctop, baseTheme.fonts.h3.phone)}
        font-weight: 700;
        line-height: 150%;
    }

    h4 {
        ${adpaptiveFont(baseTheme.fonts.h4.desctop, baseTheme.fonts.h4.phone)}
        font-weight: 700;
        line-height: 150%;
    }

    p {
        margin: 0 0 20px 0;
        ${adpaptiveFont(baseTheme.fonts.p.desctop, baseTheme.fonts.p.phone)}
        font-weight: 400;
        line-height: 130%;

        &:last-child {
            margin: 0;
        }
    }
`;





export default GlobalStyles;
