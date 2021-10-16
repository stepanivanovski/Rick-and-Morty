import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoBackButton from '../GoBackButton'
import { IconABC, IconCBA, IconRedFilter } from '../../icons'
import { 
  toggleStatus,
  toggleGender,
  resetCharactersFilter,
  setAlphabet,
  resetCharacters,
  setRemainingPages,
  setNextPage
} from '../../store/charactersSlice';

const CharacterFilter = () => {

  const dispatch = useDispatch();

  const { checkbox, filterState, alphabetFilterState } = useSelector(state => state.characters);
  const { status: { alive, dead, unknown}, gender: { male, female, trans }} = checkbox;

  const handleInput = (event) => {
    dispatch(resetCharacters())
    dispatch(setNextPage(1))
    dispatch(setRemainingPages(1))

    const target = event.target;

    if (target.name.slice(0, 6) === "Gender") {

      if (target.checked) {
        dispatch(toggleGender({[target.id]: target.name}));
      } else {
        dispatch(toggleGender({[target.id]: false}))
      }

    } else {

      if (target.checked) {
        dispatch(toggleStatus({[target.id]: target.name}));
      } else {
        dispatch(toggleStatus({[target.id]: false}))
      }

    }
  }

  return (
    <div className="filter">
      <div className="filter__header">
        <GoBackButton text="Выберите тип" className="filter__goBack"/>
        {(filterState) ?
          <button 
            onClick = {() => dispatch(resetCharactersFilter())}
            className="filter__button">
            <IconRedFilter/>
          </button> :
          null
        }
      </div>
      <div className="filter__item container">
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
      <div className="filter__item container">
        <p className="filter__item-title text_caption">Статус</p>
       
        <div className="check">
          <input
            onChange={handleInput} 
            type="checkbox" 
            id="alive"
            name="Status=0"
            checked={alive}
            />
          <label className="text_main-16px filter__checkbox-label" htmlFor="alive">Живой</label>
        </div>
        <div className="check">
          <input
            onChange={handleInput} 
            type="checkbox" 
            id="dead"
            name="Status=1"
            checked={dead}
            />
          <label className="text_main-16px filter__checkbox-label" htmlFor="dead">Мертвый</label>
        </div>
        <div className="check">
          <input
            onChange={handleInput} 
            type="checkbox"
            id="unknown"
            name="Status=2"
            checked={unknown}
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
            name="Gender=0"
            checked={male}
          />
          <label className="text_main-16px filter__checkbox-label" htmlFor="male">Мужчина</label>
        </div>
        <div className="check small-title">
          <input
            onChange={handleInput} 
            type="checkbox" 
            id="female"
            name="Gender=1"
            checked={female}
          />
          <label className="text_main-16px filter__checkbox-label" htmlFor="female">Женщина</label>
        </div>
        <div className="check">
          <input
            onChange={handleInput} 
            type="checkbox"
            id="trans"
            name="Gender=2"
            checked={trans}
          />
          <label className="text_main-16px filter__checkbox-label" htmlFor="trans">Бесполый</label>
        </div>

       
      </div>  
    </div>
  );
};

export default CharacterFilter;