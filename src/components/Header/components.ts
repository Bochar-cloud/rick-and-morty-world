import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { baseTheme } from '../../styles/theme';

export const HeaderEl = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100px;
    padding: 20px 0 20px 0;
    background-color: var(--color-ui);
    z-index: 10;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled(Link)`

`;

export const LogoImage = styled.img`
    width: 200px;
`;

export const Menu = styled(motion.nav)`
    position: absolute;
    right: 0;
    top: calc(100% + 30px);
    padding: 20px;
    background-color: var(--color-ui);
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    padding: 0 0 0 0;
    list-style-type: none;
`;

export const MenuItem = styled.li`

`;

export const MenuLink = styled(Link)<{$isActive: boolean}>`
    color: ${props => props.$isActive ? baseTheme.colors.primary : baseTheme.colors.text};

    &:hover {
        color: ${baseTheme.colors.primary};
        transition: var(--transition);
    }
`;

export const Burger = styled.button.attrs({
    type: 'button'
})<{isActive: boolean}>`
    position: relative;
    border: none;
    padding: 0;
    width: 48px;
    height: 48px;
    background-color: ${props => props.isActive ? baseTheme.colors.primary : '#0A0A0A'};
    transition: ${baseTheme.transitions.easeInOut};
    cursor: pointer;

    &:hover {
        background-color: ${baseTheme.colors.primary};
    }

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: ${props => props.isActive ? '50%' : '14px'};
        width: 30px;
        height: 6px;
        background-color: var(--color-text);
        transform: ${props => props.isActive ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, 0)'};
        transition: var(--transition);
    }

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: ${props => props.isActive ? 'auto' : '14px'};
        width: 30px;
        height: 6px;
        background-color: var(--color-text);
        transform: ${props => props.isActive ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, 0)'};
        transition: var(--transition);
    }
`;

