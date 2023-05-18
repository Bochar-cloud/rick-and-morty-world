import styled from 'styled-components';
import { motion } from 'framer-motion';
import { baseTheme } from '../../styles/theme';

export const Page = styled(motion.main)``;

export const PageTop = styled.div`
    padding: 50px 0;
    background-color: ${baseTheme.colors.primary};
`;

export const PageTitle = styled.h1`
    margin: 0;
    font-size: 50px;
    font-weight: 700;
    line-height: 150%;
`;

export const PageText = styled.p`
    font-size: 20px;
    font-weight: 400;
`;

export const PageContent = styled.div`
    padding: 50px 0;
`;
