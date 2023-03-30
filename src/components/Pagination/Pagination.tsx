import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PaginationInfo } from '../../types/pagination-info';
import { Wrapper, ButtonPrev, ButtonNext, PaginationList, PaginationItem } from './styled-components';

type PaginationProps = {
    pagination: PaginationInfo | null;
};

const usePagination = (currentCount: number, lastPage: number): number[] | undefined => {
    if (currentCount < 0) {
        return;
    }

    let count = currentCount ? currentCount : 1;

    const counts = Array.from({length: 5}, (_, idx) => count++);

    counts.push(lastPage);

    return counts;
};

const Pagination = ({ pagination }: PaginationProps) => {
    const [searchParams] = useSearchParams('');
    const currentCount = searchParams.get('page');
    const navigate = useNavigate();

    useEffect(() => {
        if (Number(currentCount) <= 0) {
            navigate('/characters/');
        }
    }, [currentCount, navigate]);

    const counts = usePagination(Number(currentCount),42);
    
    return (
        <Wrapper>
            <ButtonPrev to={`/characters?page=${Number(currentCount) - 1}`} $disabled={!currentCount}>Prev</ButtonPrev>
            <PaginationList>
                {counts && counts.map((count) => (
                    <PaginationItem $active={Number(currentCount) === count || !currentCount} to={`/characters?page=${count}`} key={count}>{count}</PaginationItem>
                ))}
            </PaginationList>
            <ButtonNext to={`/characters?page=${Number(currentCount) + 1}`}>Next</ButtonNext>
        </Wrapper>
    );
};

export default Pagination;
