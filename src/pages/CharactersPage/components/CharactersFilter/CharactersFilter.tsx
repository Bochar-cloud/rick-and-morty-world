import Checkbox from '../../../../components/Checkbox/Checkbox';
import { Filter, FilterInner, FilterList, FiterItem, FiterItemTitle, FiterItemCheckboxes, FilterTitle } from './styled-components';

const CharactersFilter = () => {
    return (
        <Filter>
            <FilterTitle>Filters</FilterTitle>
            <FilterInner>
                <FilterList>
                    <FiterItem>
                        <FiterItemTitle>Status</FiterItemTitle>
                        <FiterItemCheckboxes>
                            <Checkbox>Alive</Checkbox>
                            <Checkbox>Dead</Checkbox>
                            <Checkbox>Unknown</Checkbox>
                        </FiterItemCheckboxes>
                    </FiterItem>
                    <FiterItem>
                        <FiterItemTitle>Species</FiterItemTitle>
                        <FiterItemCheckboxes>
                            <Checkbox>Human</Checkbox>
                            <Checkbox>Alien</Checkbox>
                            <Checkbox>Humanoid</Checkbox>
                        </FiterItemCheckboxes>
                    </FiterItem>
                    <FiterItem>
                        <FiterItemTitle>Gender</FiterItemTitle>
                        <FiterItemCheckboxes>
                            <Checkbox>Male</Checkbox>
                            <Checkbox>Female</Checkbox>
                            <Checkbox>Unknown</Checkbox>
                        </FiterItemCheckboxes>
                    </FiterItem>
                </FilterList>
            </FilterInner>
        </Filter>
    );
};

export default CharactersFilter;
