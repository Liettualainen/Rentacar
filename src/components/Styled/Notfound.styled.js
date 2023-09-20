import styled from "styled-components";

export const NotFoundMain = styled.button`
display: flex;
flex-direction: column;
  margin-bottom: 40px;
  margin-left: auto;
margin-right: auto;
padding-bottom: 40px;

  justify-content: center;
  align-items: center;

 font-family: "manrope";
 background-color: white;
 border-width: 0;
`;

export const NotFoundAlertText = styled.span`
  margin-top: 40px;
font-family: "manrope";
font-size: 24px;
font-weight: 900;
 background-color: white;
 border-width: 0;
 color: red;
`;
export const NotFoundDriveText = styled.span`
  margin-bottom: 40px;
font-family: "manrope";
font-size: 24px;
font-weight: 900;
 background-color: white;
 border-width: 0;
 color: black;
`;

export const NotFoundButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 274px;
height: 44px;
border-width: 0;
border-radius: 10px;
border-color: #3470FF;

font-family: "manrope";
font-size: 24px;
font-weight: 600;

color: red;
background-color: rgb(255, 255,0);
&:hover,
  &:focus {
    background-color: rgb(0, 255,0);
    color: blue;
    cursor: pointer;
  }

`;