import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CharacterLiveStatus } from '../../consts/CharacterLiveStatus';

export type CharacterStatusProps = {
    status: string;
};

export const CharacterItem = styled.div.attrs(({ref}) => ({
    ref: ref,
}))<{status: string}>`
    position: relative;
    background-color: var(--color-ui);
    overflow: hidden;
    box-shadow: ${({status}) => {
        if (status === CharacterLiveStatus.Alive) {
            return '-10px 10px 0 0 var(--color-status-alive)';
        }

        if (status === CharacterLiveStatus.Dead) {
            return '-10px 10px 0 0 var(--color-status-dead)';
        }

        return '-10px 10px 0 0 var(--color-status-unknown)';
    }};
    transition: var(--transition);

    &:hover {
        box-shadow: ${({status}) => {
        if (status === CharacterLiveStatus.Alive) {
            return '0 0 0 0 var(--color-status-alive)';
        }

        if (status === CharacterLiveStatus.Dead) {
            return '0 0 0 0 var(--color-status-dead)';
        }

        return '0 0 0 0 var(--color-status-unknown)';
    }};

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

export const CharacterInfo = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
    pointer-events: none;
`;

export const CharacterStatus = styled.div<CharacterStatusProps>`
    margin: 0 0 10px auto;
    padding: 10px;
    width: fit-content;
    background-color: ${({status}) => {
        if (status === CharacterLiveStatus.Alive) {
            return 'var(--color-status-alive)';
        }

        if (status === CharacterLiveStatus.Dead) {
            return 'var(--color-status-dead)';
        }

        return 'var(--color-status-unknown)';
    }};

    &:last-child {
        margin: 0;
    }
`;

export const CharacterContent = styled.div`
    padding: 20px;
`;

export const CharacterName = styled.div`
    margin: 0 0 20px 0;
`;

export const CharacterLocation = styled.div`

`;

export const CharacterEpisode = styled.div`

`;
