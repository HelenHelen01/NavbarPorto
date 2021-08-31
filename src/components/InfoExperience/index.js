import React from "react";
import { FaDochub, FaGithub } from "react-icons/fa";
import { Button } from "../ButtonElement";
import image from "./../../images/hackaton01.jpg";
//import image01 from "./../../images/Strat.jpg";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Paragraph,
  BtnWrap,
  ImgWrap,
  SocialIconsLink,
} from "./InfoExperience";

const InfoExperience = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  hackaton01,
  primary,
  dark,
  dark2,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              {/*<Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle> */}
              <Paragraph>{description}</Paragraph>
              <BtnWrap>
                <Button
                  to="home"
                  smooth={true}
                  duration={80}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
            <SocialIconsLink
              href="https://www.dropbox.com/s/le4kvbsgrpbe4en/Helen_ENKHTUUL-LongVersion%29.docx?dl=0"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaDochub />
            </SocialIconsLink>
          </Column1>
          <Column2>
            <ImgWrap>
              {/*<Img src={img} alt={alt} />*/}
              <img src={image} height={300} width={250}></img>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoExperience;
