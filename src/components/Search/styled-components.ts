import styled from 'styled-components';

export const InputSearch = styled.input.attrs({
    type: 'text',
})`
    display: block;
    margin: 0 auto 50px auto;
    padding: 15px 20px;
    border: 2px solid transparent;
    outline: none;
    border-radius: var(--radius);
    width: 100%;
    max-width: 700px;
    background-color: var(--color-ui);
    color: var(--color-text);
    transition: var(--transition);

    &:focus-visable {
        border-color: var(--color-link);
    }

    &:focus {
        border-color: var(--color-link);
    }
`;
