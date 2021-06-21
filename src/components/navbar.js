import React from 'react'
import { Nav, NavLink, NavMenu,NavBtn, NavBtnLink, Logo,
  } from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons"

const navbar = () => {
    return (
            <Nav>
                <Logo>
                <img class="imgg" src="logo.PNG"  alt="Logo"/>
                </Logo>
                <NavMenu>
                
                <NavLink to='/about' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/events' activeStyle>
                    Products
                </NavLink>
                
                <NavLink id="Sale"to='/team' activeStyle>
                    Sale
                </NavLink>
                <NavLink to='/blogs' activeStyle>
                    Catalogue
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                <NavBtn>
                <NavBtnLink style={{color:"red"}} to='/index'><FontAwesomeIcon  icon={faCartArrowDown}/></NavBtnLink>
                </NavBtn>
                </NavMenu>
                
            </Nav>
    
        
    )
}

export default navbar
