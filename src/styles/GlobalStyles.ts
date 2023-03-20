import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --color-link: #67FFFC;
        --color-text: #FFFFFF;
        --color-ui: #121212;
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
        background: url('images/cosmos.svg'), #0A0A0A;
    }

    body {
        margin: 0;
        font-family: 'Kanda';
        font-size: 24px;
        line-height: 130%;
        font-weight: 400;
        letter-spacing: 0.10em;
        color: #fff;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    #root main {
        flex-grow: 1;
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
