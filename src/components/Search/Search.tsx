import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { InputSearch } from './styled-components';

const Search = () => {
    const [serachParams, setSearchParams] = useSearchParams();
    const name = serachParams.get('name');

    const searchInputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        let search;
        const value = evt.target.value;

        if (value) {
            search = {
                name: value
            };
        }

        if (!value) {
            search = undefined;
        }

        setSearchParams(search, { replace: true });
    };

    const changeText = useDebounce(searchInputChangeHandler, 1000);

    console.log(changeText);
    

    return (
        <InputSearch
            value={name ? name : ''}
            onChange={searchInputChangeHandler}
            placeholder="Search by name..."
        />
    );
};

export default Search;
