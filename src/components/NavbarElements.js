import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #ffffff;
  height: 85px;
  display: flex;
  width:100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding-top: 08px;
  padding-left: 55px;
  padding-right: 50px;
  padding-bottom: 20px;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
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
  padding-left:100px;
  margin-left:10px;
  
  &.active {
    color: #000000;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    
  }
`;

  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -34px;
  
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding-left:70px;
  
  
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  
  @media screen and (max-width: 768px) {
    display: none;
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
    background: #862e2e;
    color: #f8f2f2;
  }
`;