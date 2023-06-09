import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroBtn, HeroH1, HeroP, HeroItems } from './HeroElements'
//RGG
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>  {
        setIsOpen(!isOpen);
    };
    return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
            <HeroItems>
                <HeroH1>Best Neon Signs</HeroH1>
                <HeroP>Choose your design</HeroP>
                <HeroBtn>Ask for quotation</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
};

export default Hero;
