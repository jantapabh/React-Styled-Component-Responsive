import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SideBtnWrap,
    SidebarRouter,
    SidebarWrapper,
    SidebarLink
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon toggle={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="/service" onClick={toggle}>
                        Service
                    </SidebarLink>
                    <SidebarLink to="/signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="/signin" onClick={toggle}>
                        Sign In
                    </SidebarRouter>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
