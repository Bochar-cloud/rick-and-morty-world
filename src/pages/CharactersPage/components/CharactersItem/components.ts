import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CharacterStatus as ICharacterStatus } from '../../../../types/CharacterStatus';
import { baseTheme } from '../../../../styles/theme';

const statusColor = {
    Alive: baseTheme.colors.statusAlive,
    Dead: baseTheme.colors.statusDead,
    unknown: baseTheme.colors.statusUnknown,
};

export const CharacterItem = styled.div<{status: ICharacterStatus}>`
    position: relative;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    overflow: hidden;
    padding: 10px;
    transition: var(--transition);

    &:hover {
        border-color: ${({status}) => statusColor[status]};

        & img {
            transform: scale(1.2);
        }
    }
`;

export const CharacterImageLink = styled(Link)`
    display: block;
    overflow: hidden;
    opacity: 1;
`;

export const CharacterImage = styled.img`
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    transition: var(--transition);
`;

export const CharacterStatus = styled.div<{status: ICharacterStatus}>`
    position: absolute;
    right: 15px;
    top: 15px;
    margin: 0 0 10px auto;
    padding: 10px;
    width: fit-content;
    background-color: ${({status}) => statusColor[status]};
    pointer-events: none;

    &:last-child {
        margin: 0;
    }
`;

export const CharacterContent = styled.div`
    padding: 10px 0 0 0;
`;

export const CharacterContentItem = styled.div`
    margin: 0 0 10px 0;

    &:last-child {
        margin: 0;
    }
`;
