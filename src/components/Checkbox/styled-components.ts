import styled from 'styled-components';

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
`;

export const CheckboxInput = styled.input.attrs({
    type: 'radio'
})`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;

    &:checked + div:before {
        opacity: 1;
    }
`;

export const CheckboxBlock = styled.div`
    position: relative;
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: transparent;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        width: 50%;
        height: 50%;
        opacity: 0;
        background-color: var(--color-primary);
        transform: translate(-50%, -50%);
        transition: var(--transition);
    }
`;
