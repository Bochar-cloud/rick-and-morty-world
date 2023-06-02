import { Container } from '../../styles/components';
import * as C from './components';

type LayoutProps = {
    children: JSX.Element | JSX.Element[];
    pageTitle?: string;
    pageText?: string;
};

const Layout = ({ children, pageTitle, pageText }: LayoutProps) => {
    return (
        <C.Page
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {pageTitle &&
                <C.PageTop>
                    <Container>
                        {pageTitle && <C.PageTitle>{pageTitle}</C.PageTitle>}
                        {pageText && <C.PageText>{pageText}</C.PageText>}
                    </Container>
                </C.PageTop>
            }
            <Container>
                <C.PageContent>{children}</C.PageContent>
            </Container>
        </C.Page>
    );
};

export default Layout;
