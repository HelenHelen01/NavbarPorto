import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HelenBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HelenBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HelenBg>
      <HeroContent>
        <HeroH1>Front End developer</HeroH1>
        <HeroP>Contact this number and email. Welcome to my page</HeroP>
        <HeroBtnWrapper>
          <Button
            to="burtguulne uu"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Sign up {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
