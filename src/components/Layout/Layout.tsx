import Container from '../../styled-components/Container';
import { Page, PageTop, PageTitle, PageText, PageContent } from './styled-components';

type LayoutProps = {
    children: JSX.Element | JSX.Element[];
    pageTitle?: string;
    pageText?: string;
};

const Layout = ({ children, pageTitle, pageText }: LayoutProps) => {
    return (
        <Page
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {pageTitle &&
                <PageTop>
                    <Container>
                        <PageTitle>{pageTitle}</PageTitle>
                        <PageText>{pageText}</PageText>
                    </Container>
                </PageTop>
            }
            <PageContent>
                <Container>{children}</Container>
            </PageContent>
        </Page>
    );
};

export default Layout;
