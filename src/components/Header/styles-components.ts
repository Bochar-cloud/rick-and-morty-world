import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
    padding: 15px 0;
    background-color: var(--color-ui);
`;

export const WrapperInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    width: 230px;
`;

export const Menu = styled.nav``;

export const MenuList = styled.ul`
    display: flex;
    gap: 30px;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export const MenuItem = styled.li``;

export const MenuItemLink = styled(Link)`
    font-size: 30px;
`;
