import styled from 'styled-components';
import { motion } from 'framer-motion';
import { baseTheme, buttonReset, visuallyHidden } from '../../styles/theme';
import { borderHover } from '../../styles/mixins';

export const Select = styled.div<{isOpen: boolean}>`
    position: relative;
    /* border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.isOpen ? baseTheme.colors.primary : 'transparent'}; */
    width: 100%;
    /* padding: 10px; */
    z-index: 1;
    transition: ${baseTheme.transitions.easeInOut};
    ${borderHover}
    /* &:hover {
        border-color: ${baseTheme.colors.primary};
    } */
`;

export const SelectPlaceholderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    background-color: ${baseTheme.colors.elements};
    cursor: pointer;
`;

export const SelectPlaceholder = styled.span`
    display: block;
    opacity: 0.7;
`;

export const SelectValue = styled.span`
    display: block;
`;

export const SelectIcon = styled.button.attrs({
    type: 'button'
})<{isOpen?: boolean}>`
    display: flex;
    gap: 20px;
    transform: ${(props) => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: ${baseTheme.transitions.easeInOut};
    color: ${baseTheme.colors.text};
    ${buttonReset}
`;

export const SelectControls = styled.div`
    display: flex;
    gap: 20px;
`;

export const SelectDropdawn = styled(motion.div)`
    position: absolute;
    left: 0;
    top: 90px;
    width: 100%;
`;

export const SelectOption = styled.div<{isSelect: boolean}>`
    padding: 20px;
    background-color: ${(props) => props.isSelect ? baseTheme.colors.elementsHover : baseTheme.colors.elements};
    color: ${(props) => props.isSelect ? baseTheme.colors.primary : baseTheme.colors.text};
    cursor: ${(props) => props.isSelect ? 'not-allowed' : 'pointer'};
    transition: ${baseTheme.transitions.easeInOut};

    &:hover {
        background-color: ${baseTheme.colors.elementsHover};
    }
`;

export const InputHidden = styled.input`
    ${visuallyHidden}
`;
