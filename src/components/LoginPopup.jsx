import React from 'react';
import Button from './base/Button';
import { toggleModal } from '../utils';

const LoginPopup = ({ modal, setModal, set }) => {
  
  const onModal = () => {
    toggleModal(modal, setModal)
  }

  return (
    <div
      onClick={onModal}
      className="modal">
      <div
        onClick={(e) => e.stopPropagation()} 
        className="message"> 
        <h3 className="message__title">Ошибка</h3>
        <p className="message__text">{ set }</p>
        <Button onModal={onModal} text="Ок" className="btn_transparent"/>
      </div>
    </div>
  );
};

export default LoginPopup;