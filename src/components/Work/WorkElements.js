import React from "react";
import styled from "styled-components";

export const WorkContainer = styled.div`
  display: flex;
  //justify-content: center;//
  //align-items: left;//
  padding: 3.5em;
  border-radius: 8px;
`;

export const WorkLabel = styled.div`
  font-weight: 400;
  color: #01bf71;
`;

export const WorkTitle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  color: #4aae9b;
`;
export const WorkDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

export const WorkDate = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

export const Heading = styled.h2.attrs(() => ({
  className: "display-4",
}))`
  font-weight: normal;
  color: #968c8c;
`;

export const WorkIcon = styled.h2.attrs(() => ({
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
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 6px;
  margin-left: 200px;
`;

export const BgColor = styled.div`
  background-color: #c0c0c0;
`;

export const Common = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 0.4px;
  //margin-bottom: 100px;
  margin-left: 400px;
  background-color: #c0c0c0;
`;
