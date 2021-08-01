import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoExperience from "../components/InfoExperience";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoExperience/Data";
import Services from "../components/Services";
import Education from "../components/Education";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoExperience {...homeObjOne} />
      <Services />
      {/* <InfoExperience {...homeObjThree} /> */}
      <Education />
      <Footer />
    </>
  );
};

export default Home;
