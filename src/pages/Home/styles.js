import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
display: flex; 
`;
export const Container = styled.aside`
background-color: ${(props) => props.theme.colors.background};
width: 360px;
height: 100vh;
overflow-y: auto;
`;
export const Search = styled.section`
display: flex;
flex-direction: column;
background-color: white;
justify-content: center;
padding: 16px;
`;
export const Logo = styled.img `
width: 60%;
margin: auto;
margin-bottom: 16px;
`;
export const Map = styled.main`
background-color: red;
width: calc(100vw - 360px);
`;
export const Carousel = styled(Slider)`
.slick-slide {
    margin-right: 30px;
}
`;
export const CarouselTitle = styled.h1`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-size: 24px;
font-weight: bold;
line-height: 29px;
margin: 16px 0;
`;
export const ModalTitle = styled.h2`
margin-bottom: 10px;
letter-spacing: 0.11px;
font-family: ${(props => props.theme.fonts.regular)};
color: ${(props => props.theme.colors.text)}
text-transform: none;
line-height: 29px;
font-size: 24px;
font-weght: bold;
`;
export const ModalContent = styled.p`
margin-bottom: 10px;
font-family: ${(props => props.theme.fonts.regular)};
color: ${(props => props.theme.colors.text)};
text-transform: none;
line-height: 19px;
font-size: 16px;
letter-spacing: 0.15px;
`;