import { useState } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

import Modal from './Modal';
import ModalItem from './ModalItem';
import { useLocalStorage, } from "components/Localstorage";

import {
    CarCardMain, CarCardImg, CarCardButton, CarCarText, CarCarHeader,
    CarPrice, CarModel, CarDeatails, CarFlash, CarBr
} from "./Styled/Card.styled";

import {
    CarFavorite} from './Styled/Card.styled'; 
export const CarCard = ({ id, year, img, make, model, type, rentalPrice,
    address, rentalCompany, accessories, functionalities, fuelConsumption,
    engineSize, mileage, description, rentalConditions }) => {
   
    const [openModal, setOpenModal] = useState(false);
    const close = () => setOpenModal(false);

    const [favorite, setFavorite] = useState(false);
 

  const togle = (id) => {
      setFavorite(!favorite);    
       localStorage.setItem(id, !favorite );
      console.log( !favorite, id); 
      //    console.log('id', id);
    };

    return (
       <CarCardMain>
                  <div data-id={id}>
    <CarFavorite isFavorite={favorite}
               button onClick={() => togle(id)} >
               { favorite ? (<AiFillHeart size="18px" />) : (<AiOutlineHeart size="18px" />)}
                </CarFavorite>
        
    <CarCardImg src={img} alt="Car" /> 
                <CarCarText>
                    <CarCarHeader>
                        <div> <CarPrice>{make} </CarPrice>
                            <CarModel>{model.slice(0,11)},</CarModel>{year} 
                    </div>
                        <CarPrice>{rentalPrice}</CarPrice>
                    </CarCarHeader>
                    <CarDeatails>
                        <CarBr>
                        <CarFlash>{address[1]} </CarFlash>
                        <CarFlash>{address[0]} </CarFlash>
                         {rentalCompany.slice(0, 30)}
                        </CarBr>
                     
                        <CarFlash>{type} </CarFlash>
                        <CarFlash>{model} </CarFlash>
                        <CarFlash>{id} </CarFlash>
                        {accessories[0]}
                    </CarDeatails>
     
                </CarCarText>
       

           <CarCardButton type="button" onClick={() => setOpenModal(true)}>
               Learn more</CarCardButton>
           
               {openModal && (
              <Modal isOpen={openModal} onClose={close}>
                   <ModalItem
                    key={id}
                    data-id={id}
                    year={year}
                    make={make}
                    model={model}
                type={type}
                rentalPrice={rentalPrice}
                address={address}
                rentalCompany={rentalCompany}
                id={id}
                accessories={accessories}
                functionalities={functionalities}
                img={img}
                fuelConsumption={fuelConsumption}
                engineSize={engineSize}
                description={description}
                rentalConditions= {rentalConditions}            
                mileage={mileage}
                   />
              </Modal>
            )}
            </div>
        </CarCardMain>
        );
   
 
};

  
