import * as C from './components';

type SlideProps = {
    children: JSX.Element;
};

const Slide = ({children}: SlideProps) => {
    return (
        <C.Slide>
            {children}
        </C.Slide>
    );
};

export default Slide;
