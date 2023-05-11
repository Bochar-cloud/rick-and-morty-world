import styled from 'styled-components';
import { baseTheme } from './theme';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    max-width: ${baseTheme.sizes.container}px;
`;
