import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    list-style-type: none;
    text-decoration: none;
    font-family: "manrope";
    font-size:26px;
  color: black;
  &.active {
    color:red;
  }
`;


export const FixeNavBar = styled.nav`
  display: flex;
position: absolute;
//   padding-left: 150px;
// padding-right: 300px;
max-width: 1280px;
margin-right: auto;
margin-left: auto;

justify-content: space-evenly;
  align-items: center;
//   align-content: space-between
 top: 0;
 left: 0;
  position: sticky;

 z-index: 9999;
 width: 100 %;
 height: 50px;
 opacity: 100%;
 background-color:rgb(212,221,255, 1); 

`;

export const NavBar = styled.nav`


`;

