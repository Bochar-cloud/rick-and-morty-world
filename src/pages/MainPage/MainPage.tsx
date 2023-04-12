import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/characters');
    });

    return (
        <>
        </>
    );
};

export default MainPage;
