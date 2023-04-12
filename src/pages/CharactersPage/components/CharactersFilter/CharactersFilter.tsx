import Checkbox from '../../../../components/Checkbox/Checkbox';
import { filterFields } from '../../../../consts/filter-fields';
import { Filter, FilterInner, FilterList, FiterItem, FiterItemTitle, FiterItemCheckboxes, FilterTitle } from './styled-components';

const CharactersFilter = () => {
    return (
        <Filter>
            <FilterTitle>Filters</FilterTitle>
            <FilterInner>
                <FilterList>
                    {filterFields.map((field) => (
                        <FiterItem key={field.id}>
                            <FiterItemTitle>{field.name}</FiterItemTitle>
                            <FiterItemCheckboxes>
                                {field.vulues.map((value) => (
                                    <Checkbox key={value} fileld={field.name} name={value}>{value}</Checkbox>
                                ))}
                            </FiterItemCheckboxes>
                        </FiterItem>
                    ))}
                </FilterList>
            </FilterInner>
        </Filter>
    );
};

export default CharactersFilter;
