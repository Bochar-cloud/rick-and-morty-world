import { AppRoute } from '../../consts/app-route';
import { ButtonElement } from './styles';

const Button = () => {
    return (
        <ButtonElement to={AppRoute.Characters}>
            Go to Characters
        </ButtonElement>
    );
};

export default Button;
