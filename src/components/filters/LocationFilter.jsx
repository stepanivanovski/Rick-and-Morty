import React from 'react';
import GoBackButton from '../GoBackButton';
import { IconABC, IconCBA, IconMoreThen, IconRedFilter } from '../../icons';

const LocationFilter = () => {
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
      <div className="item-link item-link_mb-36">
        <div>
          <div className="text_main-16px">Тип</div>
          <div className="text_second-14px">Выберите тип локации</div>
        </div>
        <IconMoreThen className="item-link__svg"/>
      </div>
      <div className="item-link item-link_mb-36">
        <div>
          <div className="text_main-16px">Измерение</div>
          <div className="text_second-14px">Выберите измерения локации</div>
        </div>
        <IconMoreThen/>
      </div>
      </div>  
    </div>
  );
};

export default LocationFilter;