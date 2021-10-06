import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoBackButton from '../GoBackButton';
import { IconABC, IconCBA, IconMoreThen, IconRedFilter } from '../../icons';
import { 
  toggleCheked,
} from '../../store/filterSlice';

const LocationFilter = () => {
  const dispatch = useDispatch();

  const { checkbox, locFilter, locAlphabet } = useSelector(state => state.filter);

  return (
    <div className="filter">
      <div className="filter__header">
        <GoBackButton text="Выберите тип" className="filter__goBack"/>
        <button className="filter__button">
          <IconRedFilter/>
        </button>
      </div>
      <div className="filter__item">
        <p className="filter__item-title text_caption">Сортировать</p>
        <div className="filter__item-wrapper">
          <p className="filter__text text_main-16px">По алфавиту</p>
          <div className="filter__icons">
            {(locFilter) ?
            <button 
              // onClick = {() => dispatch(resetLocFilter())}
              className="filter__button">
              <IconRedFilter/>
            </button> :
            null
          }
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
        <IconMoreThen  className="item-link__svg"/>
      </div>
      </div>  
    </div>
  );
};

export default LocationFilter;