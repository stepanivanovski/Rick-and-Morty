import React from 'react';

const ThemeChanging = () => {
  return (
    <div className="modal">
    <div className="theme">
      <p className="theme__title">Темная тема</p>
      <div className="theme__radio-wrap">
        <input class="theme__radio" type="radio" id="theme-1" name="theme" value="on"/>
        <label htmlFor="theme-1">Выключенна</label>
      </div> 
      <div className="theme__radio-wrap">
        <input class="theme__radio" type="radio" id="theme-2" name="theme" value="off"/>
        <label htmlFor="theme-2">Включенна</label>
      </div>
      <div className="theme__radio-wrap">
        <input class="theme__radio" type="radio" id="theme-3" name="theme" value="option"/>
        <label htmlFor="theme-3">Следовать настройкам системы</label>
      </div>
      <div className="theme__radio-wrap">
        <input class="theme__radio" type="radio" id="theme-4" name="theme" value="saving"/>
        <label htmlFor="theme-4">В режиме электросбережения</label>
      </div>
      <button className="theme__button">Отмена</button>
    </div>
    </div>
  );
};

export default ThemeChanging;