import React from 'react';
import GoBackButton from '../GoBackButton';

const types = [
  'Мир',
  'Планета',
  'Микровселенная',
  'Цитадель',
  'Созданная реальность',
  'Здание',
  'Неопределенно',
];
const measurements = [
  'Измерение 35-C',
  'Измерение C-137',
  'Измерение C-500A',
  'Измерение J19ζ7',
  'Измерение Дупиду',
  'Измерение подмены',
];

const LocationFilter = () => {
  return (
    <div className="filter">
      <GoBackButton text="Фильтры"/>
      <div className="">
        <p className="__title">Темная тема</p>
        <div className="__radio-wrap">
          <input class="__radio" type="radio" id="theme-1" name="theme" value="on"/>
          <label htmlFor="theme-1">Выключенна</label>
        </div> 
        <div className="__radio-wrap">
          <input class="__radio" type="radio" id="theme-2" name="theme" value="off"/>
          <label htmlFor="theme-2">Включенна</label>
        </div>
        <div className="__radio-wrap">
          <input class="__radio" type="radio" id="theme-3" name="theme" value="option"/>
          <label htmlFor="theme-3">Следовать настройкам системы</label>
        </div>
        <div className="__radio-wrap">
          <input class="__radio" type="radio" id="theme-4" name="theme" value="saving"/>
          <label htmlFor="theme-4">В режиме электросбережения</label>
        </div>
        <button className="theme__button">Отмена</button>
      </div>
    </div>
  );
};

export default LocationFilter;