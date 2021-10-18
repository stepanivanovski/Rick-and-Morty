import React from 'react';
import Button from './base/Button';

const Popup = ({ title, set, actionCreator }) => {
  
  const onModal = () => {
    actionCreator([])
  }

  return (
    <div
      onClick={onModal}
      className="modal">
      <div
        onClick={(e) => e.stopPropagation()} 
        className="message"> 
        <h3 className="message__title">{title}</h3>
        <p className="message__text">{ set }</p>
        <Button 
          onClick={onModal} 
          text="Ок" 
          className="btn_transparent"/>
      </div>
    </div>
  );
};

export default Popup;