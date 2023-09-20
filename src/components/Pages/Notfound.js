import { NotFoundMain, NotFoundButton, NotFoundAlertText, NotFoundDriveText } from "../Styled/Notfound.styled";
import { StyledLink } from 'components/Styled/Nav.styled';
import  car from 'images/car.png'

export default function NotFound() {

    return (
        <NotFoundMain>
        <NotFoundAlertText>
          There is no such page <br /> you are looking for
        </NotFoundAlertText>
            <div>
            <img src={car} alt="car"></img>
            </div>            
        <NotFoundDriveText>Push the button<br />and drive back<br />to the main page
            </NotFoundDriveText>
        <StyledLink to="/">
            <NotFoundButton>Drive to Home Page</NotFoundButton>
        </StyledLink>
      </NotFoundMain>
  )
}