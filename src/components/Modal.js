import React, {  useEffect } from 'react';
import { createPortal } from 'react-dom';
import {CgClose} from 'react-icons/cg';
import {
    Overlay, Mod, CarCrusaider, CrusaiderSvg} from './Styled/Modal.styled'; 

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.code === 'Escape') {
         console.log('Close')
         onClose();
      }
    };
    window.addEventListener("keydown",handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  const handleBackDrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
    return createPortal(
  
            <Overlay onClick={handleBackDrop}>
        <Mod>
          <CarCrusaider onClick={onClose}>
            <CrusaiderSvg> <CgClose size="12px" /></CrusaiderSvg>
              
                </CarCrusaider>
                     {children}
                </Mod>
             </Overlay>, modalRoot
    );
   }


export default Modal;


