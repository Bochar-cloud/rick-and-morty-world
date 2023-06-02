import { useRef } from 'react';
import { Container } from '../../styles/components';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import * as C from './components';
import HeaderLinks from './HeaderLinks';

const options:IntersectionObserverInit = {
    root: null,
    rootMargin: '-100px 0px 0px 0px',
    threshold: 0
};

const Header = () => {
    const ref = useRef(null);

    const isIntersecting = useIntersectionObserver(ref, false, options);

    return (
        <>
            <div ref={ref} />
            <C.Header isSticky={isIntersecting}>
                <Container>
                    <C.Wrapper>
                        <C.Logo to="/">
                            <C.LogoImage src="/images/Rick-and-Morty-logo.svg" />
                        </C.Logo>

                        <HeaderLinks />
                    </C.Wrapper>
                </Container>
            </C.Header>
        </>
    );
};

export default Header;
