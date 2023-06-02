import styled from 'styled-components';
import { adaptiveContainer } from './mixins';

export const Container = styled.div`
    ${adaptiveContainer()}
`;

export const TitleH2 = styled.h2`
    margin: 0 0 50px 0;
    font-size: 40px;
`;

// export const BorderWrapper = styled.div`
//     padding: 10px;
//     border-width: 2px;
//     border-style: solid;
//     border-color: transparent;
//     transition: ${baseTheme.transitions.easeInOut};

//     &:hover {
//         border-color: ${baseTheme.colors.primary};
//     }
// `;
