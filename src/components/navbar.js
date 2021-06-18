import React from 'react'
import { Nav, NavLink, NavMenu,NavBtn, NavBtnLink
  } from './NavbarElements';
const navbar = () => {
    return (
            
            <Nav>
                <NavMenu>
                <img class="imgg" src="logo.PNG"  alt="Logo"/>
                <NavLink to='/about' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/events' activeStyle>
                    Products
                </NavLink>
                <NavLink to='/annual' activeStyle>
                    Catalog
                </NavLink>
                <NavLink to='/team' activeStyle>
                    Sale
                </NavLink>
                <NavLink to='/blogs' activeStyle>
                    Support
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
    
        
    )
}

export default navbar
