import styled from "styled-components";


export const CarCardMain = styled.div`
width: 274px;
height: 426px;
// margin-left: 29px;
margin-bottom: 21px;
// border: solid 1px black;
`;

export const CarFavorite = styled.button`
position: absolute;
margin-top: 14px;
margin-left: 242px;
  border: medium none;
background-image: none; 
  background: transparent;
  float: left;
  background-color: transparent;
color: 
${p => {
        return (p.isFavorite) ? '#3470FF' : 'rgba(235,235, 235, 1)';
}};
`;

export const CarCardImg = styled.img`
width: 274px;
height: 268px;
border-radius: 15px;
 overflow: hidden;
 object-fit: cover;
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
font-size: 16px;
font-weight: 500;#121417
color:#121417;
`;

export const CarPrice = styled.span`
margin-right: 9px;
font-family: "manrope";
font-size: 16px;
font-weight: 500;
`;

export const CarModel = styled.span`
margin-left: -9px;
margin-right: 4px;
font-family: "inter";
font-size: 16px;
font-weight: 500;
color: #3470FF;
// border-right: 1px solid #121417;
`;



export const CarDeatails = styled.span`

font-family: "manrope";
font-size: 12px;
font-weight: 400;
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


export const CarCardButton = styled.button`
align-items: center;
align: bottom;
width: 274px;
height: 44px;
border-width: 0;
border-radius: 10px;
border-color: #3470FF;

font-family: "manrope";
font-size: 14px;
font-weight: 600;

color: #FFFFFF;
background-color: #3470FF;
&:hover,
  &:focus {
    background-color: #0B44CD;
    cursor: pointer;
  }

`;
