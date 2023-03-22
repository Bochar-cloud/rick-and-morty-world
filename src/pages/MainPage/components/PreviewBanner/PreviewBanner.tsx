import Button from '../../../../components/Button/Button';
import Container from '../../../../styled-components/Container';
import { Wrapper, ImageWrapper, Image, Text, WrapperInner, Content } from './styled-components';

const PreviewBanner = () => {
    return (
        <Wrapper>
            <Container>
                <WrapperInner>
                    <ImageWrapper>
                        <Image src="images/Rick-and-Morty-illustration.svg" />
                    </ImageWrapper>
                    <Content>
                        <Text>
                            Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on <a href="https://www.adultswim.com/" target="_blank" rel="noreferrer">Adult Swim</a> that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe. Rick Sanchez is living with his daughter Beth’s family and constantly bringing her, his son-in-law Jerry, granddaughter Summer, and grandson Morty into intergalactic escapades.
                        </Text>
                        <Button text="Go to Characters" type="link"/>
                    </Content>
                </WrapperInner>
            </Container>
        </Wrapper>
    );
};

export default PreviewBanner;
