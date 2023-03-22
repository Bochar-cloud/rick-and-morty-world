import Container from '../../styled-components/Container';
import { LayoutWrapper, LayoutTitleWrapper, LayoutTitle, LayoutContent } from './styled-components';

type LayoutProps = {
    children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <LayoutWrapper>
            <LayoutTitleWrapper>
                <Container>
                    <LayoutTitle>Characters</LayoutTitle>
                </Container>
            </LayoutTitleWrapper>
            <LayoutContent>
                <Container>{children}</Container>
            </LayoutContent>
        </LayoutWrapper>
    );
};

export default Layout;
