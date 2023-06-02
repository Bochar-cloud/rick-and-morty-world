export const useConcatSearchParams = (urlSearchParams: URLSearchParams) => {
    const allSearchParams = Object.fromEntries([...urlSearchParams]);

    const urlParams = [];

    for (const entry of Object.entries(allSearchParams)) {
        urlParams.push(entry.join('='));
    }

    const queryParams = urlParams.join('&');

    return {
        allSearchParams,
        queryParams
    };
};
