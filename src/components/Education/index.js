import React from "react";

import {
  EduContainer,
  EduTitle,
  EduDescription,
  EduDate,
  Heading,
  Button,
} from "./EducationElement";

const Education = () => {
  return (
    <EduContainer>
      <EduTitle>Stratford University</EduTitle>
      <Heading>Stratford heading University</Heading>
      <EduDescription>Master of Information System 3.61</EduDescription>
      <EduDate>July 2017</EduDate>
      <Button>Relevant courses End Collapsed button ashiglana</Button>
    </EduContainer>
  );
};

export default Education;
