import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Logo = styled.div`
   margin-top: -15px;
   margin-right: 10px;
   padding-right: 100px;
   margin-left: -139px;
   @media screen and (max-width: 1200px) and (min-width: 600px), (max-width: 600px){
    display:flex;
    margin-right: 0px;
    margin-left:0px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;
export const Nav = styled.nav`
  background: #ffffff;
  height: 85px;
  display: flex;
  width:100%;
  margin-left: 0;
  margin-right: -100px;
  justify-content: center;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 1200px) and (min-width: 600px), (max-width: 600px){
    display:flex;
    margin-right: 0px;
    margin-left:0px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.04em;
  line-height:1.1;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  cursor: pointer;
  padding-left:65px;
  margin-left:-35px;
  padding-right: 60px;
  
  &.active {
    color: #000000;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    
  }
  @media screen and (max-width: 1200px) and (min-width: 600px), (max-width: 600px){
    display:flex;
    margin-right: 0px;
    margin-left:0px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -100px;
  padding-right: 0px;
  padding-left: 50px;
  margin-left:90px;
  
  @media screen and (max-width: 1200px) and (min-width: 600px), (max-width: 600px){
    display:flex;
    margin-right: 0px;
    margin-left:0px;
    padding-left: 0px;
    padding-right: 0px;
  }
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
 
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding-left:100px;
  margin-left: 100px;
  margin-right: -100px;
    
  
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 1200px) and (min-width: 600px), (max-width: 600px){
    display:flex;
    margin-right: 0px;
    margin-left:0px;
    padding-left: 0px;
    padding-right: 0px;
  }
  
 
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #f7f5f5;
  padding: 10px 22px;
  color: #000000;
  font-size: 16px;
  outline: none;
  
  border: none;
  cursor: pointer;
 
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 32px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e7d0c9;
    color: #f8f2f2;
  }
  @media screen and (max-width: 1200px) and (min-width: 600px), (max-width: 600px){
    display:flex;
    margin-right: 0px;
    margin-left:0px;
padding: 0px;
  }
`;