import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { menuLinks } from '../../consts/header-links';
import { Container } from '../../styles/components';
import * as C from './components';

const Header = () => {
    const { pathname } = useLocation();
    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);
    const [isActiveLink, setIsActiveLink] = useState<string | null>(pathname);

    useEffect(() => {
        setIsActiveLink(pathname);
        setIsActiveMenu(false);
    }, [pathname]);

    const burgerCLickHandler = () => {
        setIsActiveMenu((prev) => !prev);
    };

    return (
        <C.HeaderEl>
            <Container>
                <C.Wrapper>
                    <C.Logo to="/">
                        <C.LogoImage src="/images/Rick-and-Morty-logo.svg" />
                    </C.Logo>

                    <C.Burger isActive={isActiveMenu} onClick={burgerCLickHandler} />

                    {isActiveMenu &&
                        <AnimatePresence>
                            <C.Menu
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <C.MenuList>
                                    {menuLinks.map((link) => (
                                        <C.MenuItem key={link.id}>
                                            <C.MenuLink to={link.url} $isActive={isActiveLink === link.url}>{link.name}</C.MenuLink>
                                        </C.MenuItem>
                                    ))}
                                </C.MenuList>
                            </C.Menu>
                        </AnimatePresence>
                    }
                </C.Wrapper>
            </Container>
        </C.HeaderEl>
    );
};

export default Header;
