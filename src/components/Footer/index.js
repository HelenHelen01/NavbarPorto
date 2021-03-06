import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";

import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/contactin"> How it works</FooterLink>
              <FooterLink to="/contactin"> Testimonials</FooterLink>
              <FooterLink to="/contactin"> Careers</FooterLink>
              <FooterLink to="/contactin"> Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/contactin"> How it works</FooterLink>
              <FooterLink to="/contactin"> Testimonials</FooterLink>
              <FooterLink to="/contactin"> Careers</FooterLink>
              <FooterLink to="/contactin"> Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/contactin"> How it works</FooterLink>
              <FooterLink to="/contactin"> Testimonials</FooterLink>
              <FooterLink to="/contactin"> Careers</FooterLink>
              <FooterLink to="/contactin"> Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/contactin"> How it works</FooterLink>
              <FooterLink to="/contactin"> Testimonials</FooterLink>
              <FooterLink to="/contactin"> Careers</FooterLink>
              <FooterLink to="/contactin"> Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">HT</SocialLogo>
            <WebsiteRights>
              {" "}
              HT @ {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink
                href="https://github.com/HelenHelen01?tab=repositories"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaGithub />
              </SocialIconsLink>

              <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.linkedin.com/in/helenenkhtuul/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
