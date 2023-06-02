import styled from 'styled-components';
import { baseTheme, buttonReset, disabled } from '../../styles/theme';
import { borderHover } from '../../styles/mixins';

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    max-width: 500px;
    margin: 50px auto 0 auto;
`;

export const PaginationButton = styled.button.attrs({
    type: 'button'
})<{isActive?: boolean}>`
    ${buttonReset}
    ${borderHover}
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 22px;
    background-color: ${baseTheme.colors.elements};
    color: ${(props) => props.isActive ? baseTheme.colors.primary : baseTheme.colors.text};

    &:disabled {
        ${disabled}
    }
`;
