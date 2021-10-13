import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import GoBackButton from '../GoBackButton';
import { IconABC, IconCBA, IconMoreThen, IconRedFilter } from '../../icons';
import { 
  resetFilter, 
  setAlphabet
} from '../../store/locationsSlice';

const LocationFilter = () => {
  const history = useHistory(); 
  const dispatch = useDispatch();

  const { filterState, alphabetFilterState, type, measurement } = useSelector(state => state.locations);

  return (
    <div className="filter">
      <div className="filter__header">
        <GoBackButton text="Фильтры" className="filter__goBack"/>
        {(filterState) ?
          <button 
            onClick = {() => dispatch(resetFilter())}
            className="filter__button">
            <IconRedFilter/>
          </button> :
          null
        }
      </div>
      <div className="filter__item">
        <p className="filter__item-title text_caption">Сортировать</p>
        <div className="filter__item-wrapper">
          <p className="filter__text text_main-16px">По алфавиту</p>
          <div className="filter__icons">
            <button
              onClick={() => dispatch(setAlphabet("abc"))} 
              className="filter__button">
              <IconABC 
                className={(alphabetFilterState === "abc") ? "filter__active-icon" : ''}/>
            </button>
            <button
              onClick={() => dispatch(setAlphabet("cba"))}  
              className="filter__button">
              <IconCBA
                className={(alphabetFilterState === "cba") ? "filter__active-icon" : ''}/>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="filter__item">       
      <div
        onClick={() => history.push(`/filterLoc/type`)} 
        className="item-link item-link_mb-36">
        <div>
          <div className="text_main-16px">{type || "Тип"}</div>
          <div className="text_second-14px">Выберите тип локации</div>
        </div>
        <IconMoreThen className="item-link__svg"/>
      </div>
      <div
        onClick={() => history.push(`/filterLoc/measurement`)}  
        className="item-link item-link_mb-36">
        <div>
          <div className="text_main-16px">{measurement || "Измерение"}</div>
          <div className="text_second-14px">Выберите измерения локации</div>
        </div>
        <IconMoreThen  className="item-link__svg"/>
      </div>
      </div>  
    </div>
  );
};

export default LocationFilter;