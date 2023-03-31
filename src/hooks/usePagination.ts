import {FIRST_PAGE, PAGINATIOB_LENGTH} from '../consts/pagination';

export const usePagination = (currentCount: number, lastPage: number): number[] => {
    let count = currentCount;

    if (!currentCount) {
        count = FIRST_PAGE;
    }

    if (currentCount >= lastPage - PAGINATIOB_LENGTH + FIRST_PAGE && currentCount <= lastPage) {
        count = lastPage - PAGINATIOB_LENGTH;
    }

    if (currentCount === lastPage) {
        count = lastPage - PAGINATIOB_LENGTH + FIRST_PAGE;
    }

    const counts = Array.from({length: PAGINATIOB_LENGTH}, () => {
        return count++;
    });

    if (currentCount !== lastPage) {
        counts.push(lastPage);
    }

    if (currentCount > FIRST_PAGE) {
        counts.unshift(FIRST_PAGE);
    }

    return counts;
};
