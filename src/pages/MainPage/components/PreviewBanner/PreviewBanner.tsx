import Button from '../../../../components/Button/Button';
import Container from '../../../../styles/Container';
import { Wrapper, ImageWrapper, Image, Text, WrapperInner } from './styles';

const PreviewBanner = () => {
    return (
        <Wrapper>
            <Container>
                <WrapperInner>
                    <ImageWrapper>
                        <Image src="images/Rick-and-Morty-illustration.svg" />
                    </ImageWrapper>
                    <Text>
                        Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe. Rick Sanchez is living with his daughter Beth’s family and constantly bringing her, his son-in-law Jerry, granddaughter Summer, and grandson Morty into intergalactic escapades.

                        <Button />
                    </Text>
                </WrapperInner>
            </Container>
        </Wrapper>
    );
};

export default PreviewBanner;
