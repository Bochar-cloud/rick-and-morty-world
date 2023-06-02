import styled from 'styled-components';
import { motion } from 'framer-motion';
import { baseTheme } from '../../styles/theme';
import { adpaptiveOffset } from '../../styles/mixins';

export const Page = styled(motion.main)``;

export const PageTop = styled.div`
    background-color: ${baseTheme.colors.elements};
    ${adpaptiveOffset('padding', '50px 0', '25px 0')}
`;

export const PageTitle = styled.h1`
    ${adpaptiveOffset('margin', '0 0 20px 0', '0 0 10px 0')}
    font-weight: 700;
    line-height: 150%;
`;

export const PageText = styled.p`
    font-weight: 400;
`;

export const PageContent = styled.div`
    ${adpaptiveOffset('padding', '50px 0', '25px 0')}
`;
