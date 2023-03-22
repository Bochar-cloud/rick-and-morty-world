import styled from 'styled-components';

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

export const CharacterStatus = styled.div`
    margin: 0 0 10px auto;
    padding: 10px;
    border-radius: var(--radius);
    width: fit-content;
    background-color: var(--color-ui);

    &:last-child {
        margin: 0;
    }
`;

export const CharacterSpecies = styled.div`
    margin: 0 0 10px auto;
    padding: 10px;
    border-radius: var(--radius);
    width: fit-content;
    background-color: var(--color-ui);

    &:last-child {
        margin: 0;
    }
`;

export const CharacterContent = styled.div`
    padding: 30px;
`;

export const CharacterName = styled.div`

`;

export const CharacterLocation = styled.div`

`;

export const CharacterEpisode = styled.div`

`;
