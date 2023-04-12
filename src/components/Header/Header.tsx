import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppRoute } from '../../consts/app-route';
import { menuLinks } from '../../consts/header-links';
import Container from '../../styled-components/Container';
import { useCurrentPage } from '../../hooks/useCurrentPage';
import { HeaderEl, Logo, LogoImage, Menu, MenuList, MenuItem, MenuLink, Wrapper, Burger } from './styled-components';

const Header = () => {
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
    const [isActiveLink, setIsActiveLink] = useState<string>('');

    const currentPage = useCurrentPage();

    useEffect(() => {
        setIsActiveLink(currentPage);
    }, [currentPage]);

    const burgerCLickHandler = () => {
        setIsActiveMenu((prev) => !prev);
    };

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Logo to="/">
                        <LogoImage src="images/Rick-and-Morty-logo.svg" />
                    </Logo>

                    <Burger isActive={isActiveMenu} onClick={burgerCLickHandler} />

                    {isActiveMenu &&
                        <AnimatePresence>
                            <Menu
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <MenuList>
                                    {menuLinks.map((link) => (
                                        <MenuItem key={link.id}>
                                            <MenuLink to={link.url} $isActive={isActiveLink === link.url}>{link.name}</MenuLink>
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                        </AnimatePresence>
                    }
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;
