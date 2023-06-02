import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { menuLinks } from '../../consts/header-links';
import * as C from './components';

const HeaderLinks = () => {
    const { pathname } = useLocation();

    const [isActiveLink, setIsActiveLink] = useState<string | null>(pathname);

    useEffect(() => {
        setIsActiveLink(pathname);
    }, [pathname]);

    return (
        <C.Menu>
            <C.MenuLinks>
                {menuLinks.map((link) => (
                    <C.MenuItem key={link.id}>
                        <C.MenuLink $isActive={isActiveLink === link.url} to={link.url}>{link.name}</C.MenuLink>
                    </C.MenuItem>
                ))}
                
            </C.MenuLinks>
        </C.Menu>
    );
};

export default HeaderLinks;
