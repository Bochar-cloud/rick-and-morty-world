import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Kanda';
        src: url('/fonts/Kanda-Regular.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Kanda';
        src: url('/fonts/Kanda-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }
`;

export default FontStyles;
