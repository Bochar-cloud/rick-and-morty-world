import { keyframes } from 'styled-components';
import { baseTheme } from './theme';

export const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const switchColor = keyframes`
    0% {
      border-color: ${baseTheme.colors.statusAlive};
      border-right-color: transparent;
    }

    50% {
      border-color: ${baseTheme.colors.statusDead};
      border-right-color: transparent;
    }

    100% {
      border-color: ${baseTheme.colors.statusUnknown};
      border-right-color: transparent;
    }
`;
