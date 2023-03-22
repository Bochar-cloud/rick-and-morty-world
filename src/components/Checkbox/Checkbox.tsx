import { Label, CheckboxInput, CheckboxBlock } from './styled-components';

type CheckboxProps = {
    children: JSX.Element | JSX.Element[] | string;
};

const Checkbox = ({ children }: CheckboxProps) => {
    return (
        <Label>
            <CheckboxInput />
            <CheckboxBlock />
            {children}
        </Label>
    );
};

export default Checkbox;
