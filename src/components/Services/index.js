import React from "react";

/*import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";*/

import {
  ServicesContainer,
  ServicesH1,
  ServiceWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Youtube,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> my projects</ServicesH1>
      <ServiceWrapper>
        <ServicesCard>
          {/* <ServicesIcon src={Icon1} /> 
          <ServicesH2></ServicesH2>*/}
          <ul>
            <li>Frontend: HTML, CSS</li>
            <li>Backend: Node.js Express.js</li>
            <li>Database: Firebase -Websocket: Socket.iot</li>
          </ul>
          <ServicesP>
            <iframe
              width="479"
              height="200"
              src="https://www.youtube.com/embed/DGKTsj_wuxk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/*  <ServicesIcon src={Icon3} />*/}
          <ul>
            <li>React.js Axios, hooks,</li>
            <li>Backend: Node.js JSON</li>
            <li>Database: Firebase</li>
          </ul>
          <ServicesP></ServicesP>
          <ServicesP>
            <iframe
              width="479"
              height="200"
              src="https://www.youtube.com/embed/gTQJqcT_B3k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/*<ServicesIcon src={Icon2} />*/}
          <ServicesH2>Yoga Application</ServicesH2>
          <ServicesP>
            I'm a yoga enthusiast.Makes my daily routine easier. I used HTML,
            CSS and JavaScript. It will give me peaceful n relaxing sound
            <iframe
              width="479"
              height="200"
              src="https://www.youtube.com/embed/XQeI7gmVkJA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={Icon3} />/>*/}
          <ServicesH2>Asterisk-tech company</ServicesH2>
          <ServicesP>
            <iframe
              width="479"
              height="250"
              src="https://www.youtube.com/embed/fxZKlq_2oik"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ServicesP>
        </ServicesCard>
        {/*  <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Asterisk</ServicesH2>
          <ServicesP>Link here if you want to access my web site</ServicesP>
        </ServicesCard>*/}
      </ServiceWrapper>
    </ServicesContainer>
  );
};

export default Services;
