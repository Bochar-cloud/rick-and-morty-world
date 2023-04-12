import { useSearchParams } from 'react-router-dom';
import { FIRST_PAGE } from '../../consts/pagination';
import { useAppSelector } from '../../hooks/useAppSelector';
import { usePagination } from '../../hooks/usePagination';
import { getPagination } from '../../pages/CharactersPage/store/selectors';
import { Wrapper, ButtonPrev, ButtonNext, PaginationList, PaginationItem } from './styled-components';

const Pagination = () => {
    const pagination = useAppSelector(getPagination);

    const [searchParams] = useSearchParams();
    const currentCount = Number(searchParams.get('page'));

    const counts = usePagination(currentCount, pagination ? pagination.pages : 0);

    return (
        <Wrapper>
            <ButtonPrev
                to={`/characters?page=${currentCount - 1}`}
                $disabled={!currentCount || currentCount === FIRST_PAGE}
            >
                Prev
            </ButtonPrev>
            <PaginationList>
                {counts && counts.map((count) => (
                    <PaginationItem
                        $active={currentCount === count || (currentCount + 1 === count && count === 1)}
                        to={`/characters?page=${count}`}
                        key={count}
                    >
                        {count}
                    </PaginationItem>
                ))}
            </PaginationList>
            <ButtonNext
                to={`/characters?page=${!currentCount || currentCount === FIRST_PAGE ? 2 : currentCount + 1}`}
                $disabled={currentCount === counts[counts.length - 1]}
            >
                Next
            </ButtonNext>
        </Wrapper>
    );
};

export default Pagination;
