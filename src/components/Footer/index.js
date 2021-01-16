import React, {useState, useEffect} from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLink,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    SocialMedia,
    SocialIconLink,
    SocialLogo,
    SocialIcons,
    SocialMediaWrap,
    WebsiteRight
} from './FooterElements'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const FooterSection = () => {

    const toggleHome = () => {

        scroll.scrollToTop();
    }

    useEffect(() => {
        toggleHome()
    },[])

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/sigin">About us</FooterLink>
                            <FooterLink to="/sigin">How it work</FooterLink>
                            <FooterLink to="/sigin">Testimonials</FooterLink>
                            <FooterLink to="/sigin">Careers</FooterLink>
                            <FooterLink to="/sigin">Investors</FooterLink>
                            <FooterLink to="/sigin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/sigin">Contact</FooterLink>
                            <FooterLink to="/sigin">Support</FooterLink>
                            <FooterLink to="/sigin">Destinations</FooterLink>
                            <FooterLink to="/sigin">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/sigin">Submit Video</FooterLink>
                            <FooterLink to="/sigin">Ambassadors</FooterLink>
                            <FooterLink to="/sigin">Agency</FooterLink>
                            <FooterLink to="/sigin">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/sigin">Instagram</FooterLink>
                            <FooterLink to="/sigin">Facebook</FooterLink>
                            <FooterLink to="/sigin">Youtube</FooterLink>
                            <FooterLink to="/sigin">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Dolla
                        </SocialLogo>
                        <WebsiteRight>Dolla : 2020 
                        All rights reserved.</WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default FooterSection 
