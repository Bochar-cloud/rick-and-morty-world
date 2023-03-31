import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts/app-route';
import { menuLinks } from '../../consts/header-links';
import Container from '../../styled-components/Container';
import { Wrapper, WrapperInner, Logo, Menu, MenuList, MenuItem, MenuItemLink } from './styled-components';

const Header = () => {
    const [activeLink, setActiveLink] = useState(AppRoute.Home);

    return (
        <Wrapper>
            <Container>
                <WrapperInner>
                    <Link to={AppRoute.Home}>
                        <Logo src="images/Rick-and-Morty-logo.svg" />
                    </Link>
                    <Menu>
                        <MenuList>
                            {menuLinks.map((link) => (
                                <MenuItem key={link.id}>
                                    <MenuItemLink
                                        to={link.url}
                                        $isActive={activeLink === link.url}
                                        onClick={() => setActiveLink(link.url)}
                                    >
                                        {link.name}
                                    </MenuItemLink>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </WrapperInner>
            </Container>
        </Wrapper>
    );
};

export default Header;
