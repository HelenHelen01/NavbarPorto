import React from "react";

import {
  EduContainer,
  EduTitle,
  EduDescription,
  EduDate,
  Heading,
  Button,
  EduLabel,
  TopLine,
} from "./EducationElement";

const Education = () => {
  return (
    <EduContainer>
      <p> Education</p>
      {/*<ul>Stratford University</ul>
     <Heading>Stratford heading University</Heading>
      <ul>Master of Information System 3.61</ul>
      <EduDate>July 2017</EduDate>
       <Button>Relevant courses End Collapsed button ashiglana</Button>
      <ul>National University of Mongolia</ul>
      <ul>Bachelor of Information Technology</ul> */}
      <EduLabel>Stratford University--Master of Information System</EduLabel>

      <EduLabel>
        National University of Mongolia-- Bachelor of Information Technology
      </EduLabel>
    </EduContainer>
  );
};

export default Education;
