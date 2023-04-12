import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Label, CheckboxInput, CheckboxBlock } from './styled-components';

type CheckboxProps = {
    children: JSX.Element | JSX.Element[] | string;
    name: string;
    fileld: string;
};

const Checkbox = ({ children, fileld, name }: CheckboxProps) => {
    const [checked, setChecked] = useState(false);


    const checkboxInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setChecked((prevState) => !prevState);
    };

    return (
        <Label>
            <CheckboxInput name={fileld} checked={checked} onChange={checkboxInputChangeHandler} />
            <CheckboxBlock />
            {children}
        </Label>
    );
};

export default Checkbox;
