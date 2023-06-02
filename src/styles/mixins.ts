import { css } from 'styled-components';
import { getNumberFromString } from '../helpers/getNumberFromString';
import { baseTheme } from './theme';

export const adpaptiveFont = (
    desctopSize: number,
    mobileSize: number,
    containerWidth: number = baseTheme.sizes.container.width
) => {
    const addSize = desctopSize - mobileSize;
    const addMobileSize = addSize + addSize * 0.7;

    return css`
        font-size: calc(${mobileSize}px + ${addSize} * (100vw / ${containerWidth}));

        @media screen and (${baseTheme.media.medium}) {
            font-size: calc(${mobileSize}px + ${addMobileSize} * ((100vw - 320px) / ${containerWidth}));
        }
    `;
};

export const adaptiveContainer = () => {
    return css`
        margin: 0 auto;
        padding: 0 15px;
        width: 100%;
        max-width: 70vw;

        @media screen and (${baseTheme.media.extraLarge}) {
            max-width: none;
        }
    `;
};

export const adpaptiveOffset = (
    propertyName: 'padding' | 'margin' | 'gap' | 'grid-gap',
    desctopOffset: string,
    phoneOffset: string
) => {
    const desctopOffsets = desctopOffset.split(' ');
    const phoneOffsets = phoneOffset.split(' ');

    const desctopOffsetsResult = desctopOffsets.map((offset, offsetIdx) => {
        const currentOffset = getNumberFromString(offset);

        if (!currentOffset) {
            return `${currentOffset}`;
        }

        const phoneOffset = getNumberFromString(phoneOffsets[offsetIdx]);

        const addSize = currentOffset - phoneOffset;

        return `calc(${phoneOffset}px + ${addSize} * (100vw / ${baseTheme.sizes.container.width}))`;
    }).join(' ');

    const phoneOffsetsResult = phoneOffsets.map((offset, offsetIdx) => {
        const currentOffset = getNumberFromString(offset);

        if (!currentOffset) {
            return `${currentOffset}`;
        }

        const desctopOffset = getNumberFromString(desctopOffsets[offsetIdx]);

        const addSize = desctopOffset - currentOffset;
        const addPhoneSize = addSize + addSize * 0.7;    

        return `calc(${currentOffset}px + ${addPhoneSize} * ((100vw - 320px) / ${baseTheme.sizes.container.width}))`;
    }).join(' ');

    switch (propertyName) {
    case 'padding':
        return css`
            padding: ${desctopOffsetsResult};

            @media screen and (${baseTheme.media.medium}) {
                padding: ${phoneOffsetsResult};
            }
        `;
    case 'margin':
        return css`
            margin: ${desctopOffsetsResult};

            @media screen and (${baseTheme.media.medium}) {
                margin: ${phoneOffsetsResult};
            }
        `;
    case 'gap':
        return css`
            gap: ${desctopOffsetsResult};

            @media screen and (${baseTheme.media.medium}) {
                gap: ${phoneOffsetsResult};
            }
        `;
    case 'grid-gap':
        return css`
            grid-gap: ${desctopOffsetsResult};

            @media screen and (${baseTheme.media.medium}) {
                grid-gap: ${phoneOffsetsResult};
            }
        `;
    }
};

export const borderHover = css`
    position: relative;
    --padding: 10px;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        border: 2px solid transparent;
        width: calc(100% + (var(--padding) * 2) + 2px);
        height: calc(100% + (var(--padding) * 2) + 2px);
        transition: ${baseTheme.transitions.easeInOut};
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    &:hover::before {
        border-color: ${baseTheme.colors.primary};
    }
`;
