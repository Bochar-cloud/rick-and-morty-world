export const baseTheme = {
    colors: {
        primary: '#BAD44E',
        secondary: '',
        text: '#FFFFFF',
        elements: '#1e1e1e',
        background: '#0A0A0A',
        statusAlive: '#BFDE42',
        statusDead: '#FF4242',
        statusUnknown: '#ffb700',
    },

    media: {
        extraLarge: '(max-width: 1200px)',
        large: '(max-width: 991px)',
        medium: '(max-width: 768px)',
        small: '(max-width: 575px)',
    },

    // in px
    sizes: {
        container: 1410,
        header: {
            height: 100,
        }
    },

    // in ms
    durations: {
        ms300: 300,
    },

    // z-index
    order: {
        header: 50,
        loading: 100,
    },
};
