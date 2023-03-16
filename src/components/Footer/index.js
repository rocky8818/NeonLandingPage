import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'
import { FiTwitter } from 'react-icons/fi'

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIconLink,
    SocialIcons
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>NeonNights</SocialLogo>
                <SocialIcons>
                    <SocialIconLink href='https://www.instagram.com/rickyglz18/' target="blank" aria-label="Facebook">
                        <SlSocialInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="blank" aria-label="Facebook">
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href='/' target="blank" aria-label="Facebook">
                        <FiTwitter/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
