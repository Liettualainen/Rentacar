

import {
    FixeNavBar, StyledLink} from './Styled/Nav.styled'; 



export function Navigation () {
  return (
  
    <FixeNavBar>

       <StyledLink to="/" end><div>Home</div></StyledLink>
        <StyledLink to="/Catalogue"><div>Catalogue</div></StyledLink>
        <StyledLink to="/Favorites"><div>Favorites</div></StyledLink>

      
    </FixeNavBar>

  )
};