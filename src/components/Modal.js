import React, {  useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
    Overlay, Mod} from './Styled/Modal.styled'; 

// public file indexedDB.html <div id="modal-root"></div>
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
                     {children}
                </Mod>
             </Overlay>, modalRoot
    );
   }


export default Modal;


