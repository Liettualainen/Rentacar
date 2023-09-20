import styled from "styled-components";

export const ButtonLoad= styled.button`
      display:block;
   position: relative;
   margin-top: 50px;
     margin-bottom: 20px;
   margin-left: auto;
   margin-right: auto;

width: 100px;
height: 25px;
border-width: 0;
border-radius: 10px;
border-color: #3470FF;

font-family: "manrope";
font-size: 16px;
font-weight: 500;
  text-decoration: underline  #3470FF;

color: #3470FF;
background-color: white;
&:hover,
  &:focus {
    // background-color: rgb(222,212,247);
   color: #0B44CD;
    cursor: pointer;
  }
`;