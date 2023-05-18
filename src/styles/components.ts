import styled from 'styled-components';
import { baseTheme } from './theme';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    max-width: ${baseTheme.sizes.container}px;
`;

export const TitleH2 = styled.h2`
    margin: 0 0 50px 0;
    font-size: 40px;
`;
