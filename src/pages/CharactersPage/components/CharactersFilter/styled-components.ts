import styled from 'styled-components';


export const Filter = styled.div`
    position: sticky;
    top: 50px;
    height: fit-content;
    max-width: 300px;
`;

export const FilterInner = styled.div`
    border-radius: var(--radius);
    padding: 30px;
    width: 100%;
    background-color: var(--color-ui);
`;

export const FilterTitle = styled.h2`
    margin: 0 0 30px 0;
    font-size: 50px;
    line-height: 110%;
    text-align: center;
`;

export const FilterList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export const FiterItem = styled.li`
    margin: 0 0 50px 0;

    &:last-child {
        margin: 0;
    }
`;

export const FiterItemTitle = styled.div`
    margin: 0 0 20px 0;
    font-size: 40px;
    line-height: 110%;
`;

export const FiterItemCheckboxes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 0 0 20px;
`;
