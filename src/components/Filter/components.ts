import styled, { css } from 'styled-components';
import { baseTheme } from '../../styles/theme';
import { adpaptiveOffset, borderHover } from '../../styles/mixins';

const buttonReset = css`
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    font-family: inherit;
    background-color: transparent;
    cursor: pointer;
`;

const filterButton = css`
    ${buttonReset}
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: ${baseTheme.colors.text};
    height: 70px;
    width: 100%;
    background-color: ${baseTheme.colors.elements};
    transition: ${baseTheme.transitions.easeInOut};
    opacity: 1;
`;

export const Filter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    ${adpaptiveOffset('grid-gap', '50px', '25px')}
    grid-template-areas:
    "search search"
    "selects selects";
    ${adpaptiveOffset('margin', '0 0 50px 0', '0 0 25px 0')}
`;

export const FilterSearch = styled.div`
    grid-area: search;
`;

export const FilterSelects = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    ${adpaptiveOffset('grid-gap', '50px', '25px')}
    grid-area: selects;
`;

export const FilterSubmit = styled.button`
    ${filterButton}
    ${borderHover}
    grid-area: submit;

    &:hover {
        background-color: ${baseTheme.colors.statusAlive};
    }
`;

export const FilterClear = styled.button`
    ${filterButton}
    ${borderHover}
    grid-area: clear;

    &:hover {
        background-color: ${baseTheme.colors.statusDead};
    }
`;
