import Search from '../Search/Search';
import Select from '../Select/Select';
import * as C from './components';

const genders = [
    'Female',
    'Male',
    'Genderless',
    'unknown',
];

const statuses = [
    'Alive',
    'Dead',
    'unknown',
];

const Filter = () => {
    return (
        <C.Filter>
            <C.FilterSearch>
                <Search />
            </C.FilterSearch>
            <C.FilterSelects>
                <Select type="gender" options={genders}/>
                <Select type="status" options={statuses}/>
            </C.FilterSelects>
            {/* <C.FilterSubmit onClick={buttonSubmitClickHandler} >
                <FiCheck size={30}/>
            </C.FilterSubmit>
            <C.FilterClear onClick={buttonClearClickhandler} >
                <FiX size={30}/>
            </C.FilterClear> */}
        </C.Filter>
    );
};

export default Filter;
