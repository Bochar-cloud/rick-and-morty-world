import { useState, ChangeEvent } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { useConcatSearchParams } from '../../hooks/useConcatSearchParams';
import { FIRST_PAGE } from '../../consts/app-route';
import * as C from './components';

const Search = () => {
    const [searchParams, setSeachParams] = useSearchParams();
    const { allSearchParams } = useConcatSearchParams(searchParams);

    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState<string>(allSearchParams.name ? allSearchParams.name : '');

    const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value);

        if (!evt.target.value) {
            delete allSearchParams['name'];
            delete allSearchParams['page'];
            setSeachParams({...allSearchParams});
            return;
        }

        setSeachParams({...allSearchParams,
            'name': evt.target.value,
            'page': String(FIRST_PAGE)
        });
    };

    const inputFocusHandler = () => {
        setIsFocus(true);
    };

    const inputBlurHandler = () => {
        setIsFocus(false);
    };

    const iconCLearClickHandler = () => {
        setValue('');
        setIsFocus(false);
        delete allSearchParams['name'];
        delete allSearchParams['page'];
        setSeachParams({...allSearchParams});
    };

    return (
        <C.inputWrapper isFocus={isFocus}>
            <C.InputIcon
                className="icon-serach"
                isFocus={isFocus}>
                <FiSearch size={30}/>
            </C.InputIcon>
            <C.Input
                onChange={inputChangeHandler}
                onFocus={inputFocusHandler}
                onBlur={inputBlurHandler}
                value={value}
                type="text"
                placeholder="Search by name..."
            />
            <C.InputIconClear
                isFocus={isFocus}
                className="icon-clear"
                onClick={iconCLearClickHandler}
            >
                <FiX size={34} />
            </C.InputIconClear>
        </C.inputWrapper>
    );
};

export default Search;
