import Container from '../../styled-components/Container';
import { LayoutWrapper, LayoutTitleWrapper, LayoutTitle, LayoutContent, LayoutInner } from './styled-components';

type LayoutProps = {
    children: JSX.Element | JSX.Element[];
    pageTitle?: string;
};

const Layout = ({ children, pageTitle }: LayoutProps) => {
    return (
        <LayoutWrapper>
            <LayoutInner>
                {pageTitle && (
                    <LayoutTitleWrapper>
                        <Container>
                            <LayoutTitle>{pageTitle}</LayoutTitle>
                        </Container>
                    </LayoutTitleWrapper>
                )}
                <LayoutContent>
                    <Container>{children}</Container>
                </LayoutContent>
            </LayoutInner>
        </LayoutWrapper>
    );
};

export default Layout;
