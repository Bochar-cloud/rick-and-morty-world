import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Page = styled(motion.main)``;

export const PageTop = styled.div`
    margin: 0 0 50px 0;
    padding: 50px 0;
    background-color: var(--color-primary);
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
