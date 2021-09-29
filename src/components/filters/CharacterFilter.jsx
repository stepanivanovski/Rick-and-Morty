import React from 'react';
import GoBackButton from '../GoBackButton'
import { IconABC, IconCBA, IconRedFilter } from '../../icons'

const CharacterFilter = () => {
  return (
    <div className="filter">
      <div className="filter__header">
        <GoBackButton text="Выберите тип" className="filter__goBack"/>
        <IconRedFilter/>
      </div>
      <div className="filter__item">
        <p className="filter__item-title text_caption">Сортировать</p>
        <div className="filter__item-wrapper">
          <p className="filter__text text_main-16px">По алфавиту</p>
          <div className="filter__icons">
            <IconABC/>
            <IconCBA/>
          </div>
        </div>
      </div>
      <hr />
      <div className="filter__item">
        <p className="filter__item-title text_caption">Статус</p>
       
        <div className="check">
          <input type="checkbox" id="alive"/>
          <label className="text_main-16px" htmlFor="alive">Живой</label>
        </div>
        <div className="check">
          <input type="checkbox" id="dead"/>
          <label className="text_main-16px" htmlFor="dead">Мертвый</label>
        </div>
        <div className="check">
          <input
            type="checkbox"
            id="unknown-alive"
          />
          <label className="text_main-16px" htmlFor="unknown-alive">Неизвестно</label>
        </div>
        
      </div>
      <hr />
      <div className="filter__item">
        <p className="filter__item-title text_caption">Пол</p>

        <div className="check">
          <input type="checkbox" id="male"/>
          <label className="text_main-16px" htmlFor="male">Мужчина</label>
        </div>
        <div className="check small-title">
          <input type="checkbox" id="female"/>
          <label className="text_main-16px" htmlFor="female">Женщина</label>
        </div>
        <div className="check">
          <input
            type="checkbox"
            id="none-gender"
          />
          <label className="text_main-16px" htmlFor="none-gender">Бесполый</label>
        </div>

       
      </div>  
    </div>
  );
};

export default CharacterFilter;