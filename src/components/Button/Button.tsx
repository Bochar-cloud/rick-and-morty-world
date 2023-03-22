import { AppRoute } from '../../consts/app-route';
import { ButtonElement, LinkElement } from './styled-components';

type ButtonProps = {
    text: string;
    type: 'link' | 'button';
};

const Button = ({ text, type }: ButtonProps) => {
    return (
        <>
            {type === 'button' && <ButtonElement>{text}</ButtonElement>}
            {type === 'link' && <LinkElement to={AppRoute.Characters}>{text}</LinkElement>}
        </>
    );
};

export default Button;
