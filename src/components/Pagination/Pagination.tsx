import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { useConcatSearchParams } from '../../hooks/useConcatSearchParams';
import { FIRST_PAGE } from '../../consts/app-route';
import * as C from './components';

type PaginationProps = {
    lastPage: number | undefined,
};

const Pagination = ({ lastPage }: PaginationProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageCount = Number(searchParams.get('page')) ? Number(searchParams.get('page')) : FIRST_PAGE;

    const { allSearchParams } = useConcatSearchParams(searchParams);

    const buttonPrevClickHandler = () => {
        const current = pageCount;
        const prev = current - 1;
        const currentPage = prev > 0 ? prev : current;

        setSearchParams({...allSearchParams, page: String(currentPage)});
    };

    const buttonNextClickHandler = () => {
        const current = pageCount;
        const next = current + 1;
        const total = lastPage ? lastPage : current;
        const currentPage = next <= total ? next : current;

        setSearchParams({...allSearchParams, page: String(currentPage)});
    };

    return (
        <C.Pagination>
            
            <C.PaginationButton
                disabled={pageCount === FIRST_PAGE}
                type="button"
                onClick={buttonPrevClickHandler}
            >
                <FiChevronLeft size={36} />
            </C.PaginationButton>
            
            <span>{pageCount} / {lastPage}</span>
            
            <C.PaginationButton
                disabled={pageCount === lastPage}
                type="button"
                onClick={buttonNextClickHandler}
            >
                <FiChevronRight size={36} />
            </C.PaginationButton>
            
        </C.Pagination>
    );
};

export default Pagination;
