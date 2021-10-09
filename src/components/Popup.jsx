import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './base/Button';

const Popup = ({ title, set, actionCreator }) => {
  const dispatch = useDispatch();
  
  const onModal = () => {
    dispatch(actionCreator([]))
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
        <Button onModal={onModal} text="Ок" className="btn_transparent"/>
      </div>
    </div>
  );
};

export default Popup;