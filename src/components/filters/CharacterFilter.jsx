import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import GoBackButton from '../GoBackButton'
import { IconABC, IconCBA, IconRedFilter } from '../../icons'

const CharacterFilter = () => {
  const handleInput = (event) => {
    const target = event.target;
    const name = target.id
  
    // setS[target.id] = false
    // console.log(target.id, target.name, target.value); 
  }

  return (
    <div className="filter">
      <div className="filter__header">
        <GoBackButton text="Выберите тип" className="filter__goBack"/>
        <button className="filter__button">
          <IconRedFilter/>
        </button>
      </div>
      <div className="filter__item container">
        <p className="filter__item-title text_caption">Сортировать</p>
        <div className="filter__item-wrapper">
          <p className="filter__text text_main-16px">По алфавиту</p>
          <div className="filter__icons">
            <button className="filter__button">
              <IconABC className="filter__active-icon"/>
            </button>
            <button className="filter__button">
              <IconCBA/>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="filter__item container">
        <p className="filter__item-title text_caption">Статус</p>
       
        <div className="check">
          <input
            onChange={handleInput} 
            type="checkbox" 
            id="alive"
            name="Gender=0"
            // checked={obj.alive}\
            />
          <label className="text_main-16px filter__checkbox-label" htmlFor="alive">Живой</label>
        </div>
        <div className="check">
          <input
            onChange={handleInput} 
            type="checkbox" 
            id="dead"
            name="Gender=1"
            // checked={obj.dead}
            />
          <label className="text_main-16px filter__checkbox-label" htmlFor="dead">Мертвый</label>
        </div>
        <div className="check">
          <input
            onChange={handleInput} 
            type="checkbox"
            id="unknown"
            name="Gender=2"
            // checked={false}
          />
          <label className="text_main-16px filter__checkbox-label" htmlFor="unknown">Неизвестно</label>
        </div>
        
      </div>
      <hr />
      <div className="filter__item filter__item_pb16 container">
        <p className="filter__item-title text_caption">Пол</p>

        <div className="check">
          <input
            onChange={handleInput} 
            type="checkbox" 
            id="male"
            name="Status=0"
            // checked={obj.male}
          />
          <label className="text_main-16px filter__checkbox-label" htmlFor="male">Мужчина</label>
        </div>
        <div className="check small-title">
          <input
            onChange={handleInput} 
            type="checkbox" 
            id="female"
            name="Status=1"
            // checked={obj.female}
          />
          <label className="text_main-16px filter__checkbox-label" htmlFor="female">Женщина</label>
        </div>
        <div className="check">
          <input
            onChange={handleInput} 
            type="checkbox"
            id="trans"
            name="Status=2"
            // checked={obj.trans}
          />
          <label className="text_main-16px filter__checkbox-label" htmlFor="trans">Бесполый</label>
        </div>

       
      </div>  
    </div>
  );
};

export default CharacterFilter;