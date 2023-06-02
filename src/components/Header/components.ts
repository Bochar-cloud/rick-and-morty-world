import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { baseTheme } from '../../styles/theme';
import { adpaptiveFont } from '../../styles/mixins';

export const Header = styled.header<{isSticky: boolean}>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: ${baseTheme.sizes.header.height}px;
    padding: 20px 0 20px 0;
    background-color: ${baseTheme.colors.elements};
    z-index: 10;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        box-shadow: ${props => !props.isSticky ? 'rgb(0, 0, 0) 0px 0px 25px 0px' : 'none'};
        transition: box-shadow .1s ease-in-out;
        pointer-events: none;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled(Link)`
    width: 100%;
    max-width: 200px;
    height: auto
`;

export const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const Menu = styled.nav`

`;

export const MenuLinks = styled.ul`
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export const MenuItem = styled.li`

`;

export const MenuLink = styled(Link)<{$isActive?: boolean}>`
    ${adpaptiveFont(baseTheme.fonts.header.desctop, baseTheme.fonts.header.phone)}
    color: ${(props) => props.$isActive ? baseTheme.colors.primary : baseTheme.colors.text};
`;

// export const Menu = styled(motion.nav)`
//     position: absolute;
//     right: 0;
//     top: calc(100% + 30px);
//     padding: 20px;
//     background-color: var(--color-ui);
//     box-shadow: rgb(0, 0, 0) 0px 0px 25px 5px;
// `;

// export const MenuList = styled.ul`
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//     margin: 0;
//     padding: 0 0 0 0;
//     list-style-type: none;
// `;

// export const MenuItem = styled.li`

// `;

// export const MenuLink = styled(Link)<{$isActive: boolean}>`
//     color: ${props => props.$isActive ? baseTheme.colors.primary : baseTheme.colors.text};

//     &:hover {
//         color: ${baseTheme.colors.primary};
//         transition: var(--transition);
//     }
// `;

// export const Burger = styled.button.attrs({
//     type: 'button'
// })<{isActive: boolean}>`
//     position: relative;
//     border: none;
//     padding: 0;
//     width: 48px;
//     height: 48px;
//     background-color: ${props => props.isActive ? baseTheme.colors.primary : '#0A0A0A'};
//     transition: ${baseTheme.transitions.easeInOut};
//     cursor: pointer;

//     &:hover {
//         background-color: ${baseTheme.colors.primary};
//     }

//     &::before {
//         content: '';
//         position: absolute;
//         left: 50%;
//         top: ${props => props.isActive ? '50%' : '14px'};
//         width: 30px;
//         height: 6px;
//         background-color: var(--color-text);
//         transform: ${props => props.isActive ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, 0)'};
//         transition: var(--transition);
//     }

//     &::after {
//         content: '';
//         position: absolute;
//         left: 50%;
//         bottom: ${props => props.isActive ? 'auto' : '14px'};
//         width: 30px;
//         height: 6px;
//         background-color: var(--color-text);
//         transform: ${props => props.isActive ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, 0)'};
//         transition: var(--transition);
//     }
// `;







