import React from 'react'
import { SidebarContainer, SideBtnWrap, SidebarMenu, SidebarRoute, SidebarLink, Icon, CloseIcon } from './SidebarElements'
//RGG
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarMenu>

        <SidebarLink to="/">Nosotros</SidebarLink>
        <SidebarLink to="/">Projectos</SidebarLink>
        <SidebarLink to="/">Tienda</SidebarLink>

      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Contacto</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
