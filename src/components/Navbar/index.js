import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavbarContainer,
  NavMenu,
  MobileIcon,
  NavBtn,
  NavItem,
  NavLogo,
  NavLinks,
  NavBtnLink,
  NavIconsLink,
  NavButtonLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">HT</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                href="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                href="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Individual Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                href="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Work
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                href="/signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Education
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                href="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Resume
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href="https://github.com/HelenHelen01?tab=repositories"
              target="_blank"
              aria-label="Github"
            >
              Github
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
