import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts/app-route';
import Container from '../../styled-components/Container';
import { Wrapper, WrapperInner, Logo, Menu, MenuList, MenuItem, MenuItemLink } from './styled-components';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <WrapperInner>
                    <Link to={AppRoute.Main}>
                        <Logo src="images/Rick-and-Morty-logo.svg" />
                    </Link>
                    <Menu>
                        <MenuList>
                            <MenuItem>
                                <MenuItemLink to={AppRoute.Characters}>Characters</MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink to={AppRoute.Locations}>Locations</MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink to={AppRoute.Episodes}>Episodes</MenuItemLink>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </WrapperInner>
            </Container>
        </Wrapper>
    );
};

export default Header;
