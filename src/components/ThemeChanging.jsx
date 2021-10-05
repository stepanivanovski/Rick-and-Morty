import React from 'react';
import { toggleModal } from '../utils';

const ThemeChanging = ({ modal, setModal }) => {
  const handleInput = (event) => {
    const target = event.target;
    // устанавливаем состояние target.value
    console.log(target.value)
  } 

  return (
    <div 
      onClick={() => toggleModal(modal, setModal)}
      className="modal">
    <div
      onClick={(e) => e.stopPropagation()} 
      className="theme">
      <p className="theme__title">Темная тема</p>
      <div className="theme__radio-wrap">
        <input
          onChange={handleInput} 
          className="theme__radio" 
          type="radio" 
          id="theme-1" 
          name="theme" 
          value="on"/>
        <label htmlFor="theme-1">Выключенна</label>
      </div> 
      <div className="theme__radio-wrap">
        <input 
          onChange={handleInput} 
          className="theme__radio" 
          type="radio" 
          id="theme-2" 
          name="theme" 
          value="off"/>
        <label htmlFor="theme-2">Включенна</label>
      </div>
      <div className="theme__radio-wrap">
        <input 
          onChange={handleInput} 
          className="theme__radio" 
          type="radio" 
          id="theme-3" 
          name="theme" 
          value="option"/>
        <label htmlFor="theme-3">Следовать настройкам системы</label>
      </div>
      <div className="theme__radio-wrap">
        <input
          onChange={handleInput}  
          className="theme__radio" 
          type="radio" 
          id="theme-4" 
          name="theme" 
          value="saving"/>
        <label htmlFor="theme-4">В режиме электросбережения</label>
      </div>
      <button
        onClick={() => toggleModal(modal, setModal)}   
        className="theme__button">
          Отмена
      </button>
    </div>
    </div>
  );
};

export default ThemeChanging;