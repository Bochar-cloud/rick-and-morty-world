export const getIdentifiersFromPaths = (paths: string[]): string[] => {
    return paths.map((path) => {
        let id = '';

        for (let i = path.length - 1; i >= 0; i--) {
            if (path[i] === '/') {
                break;
            }

            id += path[i];
        }

        return id.split('').reverse().join('');
    });
};
