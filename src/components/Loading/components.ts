import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';
import { spin, switchColor } from '../../styles/animations';

export const Loader = styled.div`
    position:relative;
    z-index: ${baseTheme.order.loading};
`;

export const LoaderItem = styled.div`
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border: 6px solid ${baseTheme.colors.primary};
    border-right: 6px solid transparent;
    border-radius: 50%;
    animation: ${switchColor} 5s infinite linear, ${spin} 1s infinite linear;
`;
