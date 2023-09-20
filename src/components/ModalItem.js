
import { React } from "react";
import { Link } from "react-router-dom";
import {CgClose} from 'react-icons/cg';
import {
  Mod, ModImg, CarCardButton, CarCarHeader,
  CarPrice, CarModel, CarDeatails, CarFlash, CarBr, CarDescr, CarAcces, RentCond, RentCondBlock, CarCondBr,
  RentCondBlockColor, CarCrusaider
} from './Styled/Modal.styled'; 



const ModalItem = ({ id, year, img, make, model, type, rentalPrice,
  address, rentalCompany, accessories, functionalities, fuelConsumption, engineSize,
  description, rentalConditions, mileage }) => {

  
const phoneNumber = "tel:+380730000000";

  
  
  return (
        
       <Mod >     
           <CarCrusaider >
               <CgClose size="12px" />
                </CarCrusaider>
         {<ModImg src={img} alt="Car" width={420} />}
             <ul>
        <CarCarHeader>
          <div> <CarPrice>{make} </CarPrice>
               <CarModel>{model},</CarModel>
            {year}
          </div>
        </CarCarHeader>
        
               <CarDeatails>
                <CarBr>
               <CarFlash>{address[1]} </CarFlash>
               <CarFlash>{address[0]} </CarFlash>
              <CarFlash>Id: {id} </CarFlash>
               <CarFlash>Year: {year} </CarFlash>
               Type: {type} 
             </CarBr>
             <CarBr> 
            <CarFlash>Fuel consumption: {fuelConsumption} </CarFlash>
             Engine size: {engineSize}
             </CarBr>
        </CarDeatails>
        
             <CarDescr>
          {description}
        </CarDescr>

        <>
          <CarAcces>Accessories and functionalities:    </CarAcces> 
            <CarDeatails>
                        <CarBr>
               <CarFlash> {accessories[0]} </CarFlash>
               <CarFlash>{accessories[1]} </CarFlash>
              {accessories[2]}
        <br />
              <CarFlash> {functionalities[0]} </CarFlash>
               <CarFlash>{functionalities[1]} </CarFlash>
              {functionalities[2]}
               <br />
             </CarBr>
               </CarDeatails>
        </>

        <RentCond>
              <CarAcces>   Rental Conditions:</CarAcces> 
             <CarBr>
         
            <CarCondBr>
              <RentCondBlock> {rentalConditions.split("\n").shift(0).slice(0, 12)}
                
                <RentCondBlockColor>{rentalConditions.split("\n").shift(0).slice(12)}
                </RentCondBlockColor>
              </RentCondBlock>
              <RentCondBlock>{rentalConditions.split("\n").splice(1, 1)}
              </RentCondBlock>
            </CarCondBr>

            <CarCondBr>
              <RentCondBlock>{rentalConditions.split("\n").splice(2, 2)}</RentCondBlock>
              <RentCondBlock>  Milage: <RentCondBlockColor>{Intl.NumberFormat().format(mileage)}</RentCondBlockColor></RentCondBlock>
               <RentCondBlock>  Price: <RentCondBlockColor>{rentalPrice}</RentCondBlockColor></RentCondBlock>
            </CarCondBr>
             </CarBr>
        </RentCond>

          <Link to={phoneNumber}>
                      <CarCardButton>Rental car</CarCardButton>
              </Link>
  
             </ul>
         </Mod>
  );
}

export default ModalItem;



       
    //    <div data-id={id}>

    //        <img src={img}   alt="Car" width={420} /> 
           
    //         {make} {model}, {year}     {rentalPrice}<br />
    //        {address.slice(20, 24)} {address.slice(26, 33)} {rentalCompany}<br />
    //        {type} {id} {functionalities[0]}<br/>

    //          price: {Intl.NumberFormat().format(4500)}<br />
    //          </div>