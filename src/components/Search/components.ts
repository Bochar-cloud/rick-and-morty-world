import styled, { css } from 'styled-components';
import { baseTheme } from '../../styles/theme';
import { borderHover } from '../../styles/mixins';

const resetInput = css`
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: inherit;
    background-color: transparent;
`;

const buttonReset = css`
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    font-family: inherit;
    cursor: pointer;
`;

export const inputWrapper = styled.label<{isFocus: boolean}>`
    position: relative;
    display: block;
    outline: none;
    /* padding: 10px; */
    /* border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.isFocus ? baseTheme.colors.primary : 'transparent'}; */
    transition: ${baseTheme.transitions.easeInOut};
    ${borderHover}
    &:hover,
    &:hover .icon-search {
        /* border-color: ${baseTheme.colors.primary}; */
        color: ${baseTheme.colors.primary};
    }
`;

export const Input = styled.input`
    ${resetInput}
    padding: 20px 20px 20px 54px;
    font-weight: 400;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background-color: ${baseTheme.colors.elements};
    color: ${baseTheme.colors.text};

    /* &::placeholder {
        font-family: inherit;
        font-size: inherit;
    } */
`;

export const InputIcon = styled.div<{isFocus: boolean}>`
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translate(0, -50%);

    & {
        color: ${(props) => props.isFocus ? baseTheme.colors.primary : baseTheme.colors.text};
        transition: ${baseTheme.transitions.easeInOut};
    }
`;

export const InputIconClear = styled.button<{isFocus: boolean}>`
    ${buttonReset}
    position: absolute;
    right: 15px;
    top: 50%;
    opacity: ${(props) => props.isFocus ? 1 : 0};
    color: ${baseTheme.colors.text};
    transition: ${baseTheme.transitions.easeInOut};
    transform: translate(0, -50%);

    &:hover {
        color: ${baseTheme.colors.primary};
    }
`;
