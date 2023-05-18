import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { baseTheme } from '../../../../styles/theme';

export const Episode = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    height: 100%;
    color: ${baseTheme.colors.text};
    background-color: ${baseTheme.colors.elements};
`;

export const EpisodeName = styled.h3`
    margin: 0 0 30px 0;
    font-size: 30px;
    line-height: 150%;
    text-align: center;
    color: ${baseTheme.colors.primary};
`;

export const EpisodeCount = styled.span`

`;
