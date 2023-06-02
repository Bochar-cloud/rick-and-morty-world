import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme';

export const Detail = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    margin: 0 0 50px 0;
    place-items: center;

    &:last-child {
        margin: 0;
    }
`;

export const DetailImage = styled.img`
    width: 100%;
`;

export const DetailList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 24px;
`;

export const DetailListItem = styled.li`
    margin: 0 0 50px 0;

    &:last-child {
        margin: 0;
    }

    & span {
        color: ${baseTheme.colors.primary};
        font-weight: 500;
    }
`;

