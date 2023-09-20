
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;

`;

export const Mod = styled.div`
width: 541px;
height: 730px;
color:black;
background-color: white;
border-radius: 15px;
`;

export const ModImg = styled.img`
width: 461px;
height: 248px;
border-radius: 15px;
margin-top: 40px;
margin-left: auto;
margin-right: auto;
 overflow: hidden;
 object-fit: cover;
`;



export const FixeNavBar = styled.nav`
 position: fixed;
 top: 0;
 left: 0;
 z - index: 9999;
 width: 100 %;
 height: 50px;
 background - color: #00a087; }
`;




export const CarCarText = styled.span`
display: flex;
flex-direction: column;


 height: 113px;
border-radius: 15px;
 overflow: hidden;
 object-fit: cover;
`;

export const CarCarHeader = styled.div`
margin-top: 14px;
margin-bottom: 8px;
display: flex;
flex-direction: row;
justify-content: space-between;

font-family: "manrope";
font-size: 18px;
font-weight: 500;#121417
color:#121417;
`;

export const CarPrice = styled.span`
margin-right: 9px;
font-family: "manrope";
font-size: 18px;
font-weight: 500;
`;

export const CarModel = styled.span`
margin-left: -9px;
margin-right: 4px;
font-family: "inter";
font-size: 18px;
font-weight: 500;
color: #3470FF;
// border-right: 1px solid #121417;
`;

export const CarDeatails = styled.span`
margin-bottom: 6px;
font-family: "manrope";
font-size: 12px;
font-weight: 400;
line-height: 18px;
color: rgba(18, 20, 23, 0.5);
// opacity: 50%;
// border-right: 1px solid #121417;
`;

export const CarFlash = styled.span`

margin-right: 6px;
 border-right: 1px solid rgba(18, 20, 23, 0.5);;
`;

export const CarBr = styled.div`
margin-bottom: 4px;
`;

export const CarDescr = styled.div`
margin-top: 10px;
width: 461px;
margin-bottom: 24px;
font-family: "manrope";
font-size: 14px;
font-weight: 400;
line-height:20px;
`;

export const CarAcces = styled.div`

width: 461px;
margin-bottom: 8px;
font-family: "manrope";
font-size: 14px;
font-weight: 500;
`;




export const RentCond = styled.div`
margin-top: 24px;
font-family: "manrope";
font-size: 14px;
font-weight: 500;
`;

export const CarCondBr = styled.div`
display: flex;
margin-top: 8px;
`;
export const RentCondBlock = styled.div`
padding: 7px 14px;
margin-right: 8px;
text-align; center;
background-color:rgba(249, 249, 249, 1);
border-radius: 15px;
font-family: "montserrat";
font-size: 12px;
font-weight:400;
`;
export const RentCondBlockColor = styled.span`
font-weight:600;
color:rgba(52, 112, 255, 1);
`;





export const CarCardButton = styled.button`
margin-top: 24px;
padding: 12px 50px;
align-items: center;
border-width: 0;
border-radius: 12px;
border-color: #3470FF;

font-family: "manrope";
font-size: 14px;
font-weight: 600;
color: rgba(255, 255, 255, 1);

background-color:rgba(52, 112, 255, 1);

&:hover,
  &:focus {
    background-color: #0B44CD;
    cursor: pointer;
  }

`;


export const CarCrusaider = styled.button`
position: relative;
margin-top: 22px;
margin-left: 500px;
  border: medium none;
background-image: none; 
  background: transparent;
  float: left;
  background-color: transparent;
color:black;
&:hover,
  &:focus {
    cursor: pointer;
  }
`;