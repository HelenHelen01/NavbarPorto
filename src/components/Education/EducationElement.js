import React from "react";
import styled from "styled-components";

export const EduContainer = styled.div`
  display: flex;
  //justify-content: center;//
  //align-items: left;//
  padding: 3.5em;
  border-radius: 8px;

  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  background-color: #c0c0c0;
`;

export const EduLabel = styled.div`
  margin-left: 200px;
  font-weight: 400;
`;

export const EduTitle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  color: #4aae9b;
`;
export const EduDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

export const EduDate = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

export const Heading = styled.h2.attrs(() => ({
  className: "display-4",
}))`
  font-weight: normal;
  color: #968c8c;
`;

export const EduIcon = styled.h2.attrs(() => ({
  className: "button",
}))`
  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transition: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: red;
  }
`;

export const Button = styled.a`
  background-color: teal;
  color: white;
  padding: 1rem 2rem;
`;
export default Button;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 26px;
  line-height: 66px;
  font-weight: 400;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 6px;
  margin-left: 200px;
`;
