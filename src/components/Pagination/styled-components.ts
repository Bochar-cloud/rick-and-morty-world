import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    grid-column: 1 / -1;
    margin: 50px 0 0 0;
`;

export const ButtonPrev = styled(Link)<{$disabled: boolean}>`
    opacity: ${props => props.$disabled ? '.5' : '1'};
    pointer-events: ${props => props.$disabled ? 'none' : 'unset'};
`;

export const ButtonNext = styled(Link)`

`;

export const PaginationList = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const PaginationItem = styled(Link)<{$active: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 2px solid var(--color-link);
    background-color: ${props => props.$active ? 'var(--color-link)' : 'transparent'};
    color: ${props => props.$active ? 'var(--color-text-invert)' : 'var(--color-link)'};
    cursor: pointer;
`;
