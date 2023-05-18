import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';


export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0 0 50px 0;
    padding: 15px 25px;
    border: none;
    font-family: inherit;
    font-size: 18px;
    color: ${baseTheme.colors.text};
    background-color: transparent;
    cursor: pointer;
    background-color: ${baseTheme.colors.primary};
`;
