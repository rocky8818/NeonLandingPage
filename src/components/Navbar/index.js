import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
//RGG
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'><SiHomeassistantcommunitystore/>Neon Nights</NavLink>
        <NavIcon onClick={toggle}>
            <p></p>
            <Bars/>
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar
