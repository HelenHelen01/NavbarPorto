import { infinity } from "check-types";
import { from } from "pumpify";
import styled, { keyframes } from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#9A9A90" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 460px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 5px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 5px;
  padding: 0 15px;
  grid-area: col2;
  margin-left: 125px;
`;

export const TextWrapper = styled.div`
  max-width: 640px;
  padding-top: 0;
  padding-bottom: 10px;
  margin-left: 60px;
  letter-spacing: 1px;
`;
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 26px;
  line-height: 66px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#grey" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 740px;
  margin-bottom: 35px;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#grey" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 25px;
`;
export const ImgWrap = styled.div`
  max-width: 655px;
  height: 100%;
  box-shadow: 4px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Hackaton = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const animatePosition = keyframes`

  0%, 100%{
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-10px);
  }

`;

export const animateOpacity = keyframes`

0%, 100% {
  opacity: 1;
}
50%{
  opacity: 0;
}

`;

export const Paragraph = styled.p`
  animation: ${animatePosition} 3s infinite;
`;

export const rotate = keyframes`
 from{transform: rotate(0deg)}
 to{transfrom: rotate(90deg)}
 
 `;
export const fly = keyframes`
    0% {left:0px}
    50% {left:450px}
    75% {transform: rotate(720deg)}
    100% {left:0px}
`;

export const SocialIconsLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-left: 100px;
`;
