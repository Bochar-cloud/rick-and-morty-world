import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CharacterStatus as ICharacterStatus } from '../../../../types/CharacterStatus';
import { baseTheme } from '../../../../styles/theme';
import { adpaptiveOffset, borderHover } from '../../../../styles/mixins';

const statusColor = {
    Alive: baseTheme.colors.statusAlive,
    Dead: baseTheme.colors.statusDead,
    unknown: baseTheme.colors.statusUnknown,
};

export const CharacterItem = styled(Link)<{status: ICharacterStatus}>`
    position: relative;
    transition: var(--transition);
    ${borderHover}

    &:hover {
        & img {
            transform: scale(1.2);
        }
    }
`;

export const CharacterImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    opacity: 1;
    ${adpaptiveOffset('margin', '0 0 20px 0', '0 0 10px 0')}
`;

export const CharacterImage = styled.img`
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    transition: ${baseTheme.transitions.easeInOut};
`;

export const CharacterStatus = styled.div<{status: ICharacterStatus}>`
    position: absolute;
    right: 15px;
    top: 15px;
    margin: 0 0 10px auto;
    width: fit-content;
    color: ${baseTheme.colors.text};
    background-color: ${({status}) => statusColor[status]};
    pointer-events: none;
    ${adpaptiveOffset('padding', '10px', '10px')}

    &:last-child {
        margin: 0;
    }
`;

export const CharacterName = styled.p`
    color: ${baseTheme.colors.text};
`;

// export const CharacterContent = styled.div`
//     padding: 10px 0 0 0;
// `;

// export const CharacterContentItem = styled.div`
//     margin: 0 0 10px 0;

//     &:last-child {
//         margin: 0;
//     }
// `;
