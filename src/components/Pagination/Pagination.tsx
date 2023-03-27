import { PaginationInfo } from '../../types/pagination-info';
import { Wrapper, ButtonPrev, ButtonNext, PaginationList, PaginationItem } from './styled-components';

type PaginationProps = {
    pagination: PaginationInfo | null;
};

const Pagination = ({ pagination }: PaginationProps) => {
    return (
        <Wrapper>
            <ButtonPrev>Prev</ButtonPrev>
            <PaginationList>
                <PaginationItem>1</PaginationItem>
                <PaginationItem>2</PaginationItem>
                <PaginationItem>3</PaginationItem>
                <PaginationItem>4</PaginationItem>
                <PaginationItem>5</PaginationItem>
                <PaginationItem>42</PaginationItem>
            </PaginationList>
            <ButtonNext>Next</ButtonNext>
        </Wrapper>
    );
};

export default Pagination;
