import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import * as C from './components';

const PREV_PAGE = -1;

const ButtonBack = () => {
    const navigate = useNavigate();

    const buttonClickHandler = () => {
        navigate(PREV_PAGE);
    };

    return (
        <C.Button onClick={buttonClickHandler}>
            <FiArrowLeft /> Back
        </C.Button>
    );
};

export default ButtonBack;
