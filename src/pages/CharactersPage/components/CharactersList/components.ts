import styled from 'styled-components';
import { baseTheme } from '../../../../styles/theme';
import { adpaptiveOffset } from '../../../../styles/mixins';

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${adpaptiveOffset('grid-gap', '50px', '25px')}

    @media screen and (${baseTheme.media.medium}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (${baseTheme.media.small}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ListWrapper = styled.div`
    position: relative;
`;
