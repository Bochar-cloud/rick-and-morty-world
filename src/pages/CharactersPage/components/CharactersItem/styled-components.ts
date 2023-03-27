import styled from 'styled-components';
import { CharacterLiveStatus } from '../../consts/CharacterLiveStatus';

export type CharacterStatusProps = {
    status: string;
};

export const CharacterItem = styled.div`
    position: relative;
    border-radius: var(--radius);
    background-color: var(--color-ui);
    font-size: 30px;
    overflow: hidden;
`;

export const CharacterImage = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
`;

export const CharacterInfo = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
`;

export const CharacterStatus = styled.div<CharacterStatusProps>`
    margin: 0 0 10px auto;
    padding: 10px;
    border-radius: var(--radius);
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
    padding: 30px;
`;

export const CharacterName = styled.div`
    margin: 0 0 20px 0;
`;

export const CharacterLocation = styled.div`

`;

export const CharacterEpisode = styled.div`

`;
