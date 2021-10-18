import React, { useEffect, useRef, useState } from 'react';
import { observer } from "mobx-react-lite";
import Spinner from '../components/Spinner';
import NotFound from '../components/NotFound';
import GoBackButton from "../components/GoBackButton"
import LocationCardList from '../components/cards/LocationCardList';
import { IconCross } from '../icons';
import locationsStore from "../store/locationsStore";

const LocationsSearchPage = observer(() => {
  const textInput = useRef();
  const [ inputValue, setInputValue] = useState('');

  const { 
    locations, 
    error, 
    type, 
    measurement, 
    filterState,
    getFilteredLocations,
    getLocations,
    resetLocations
  } = locationsStore

  useEffect(() => {
    textInput.current.focus();
    return () => {
      resetLocations()

      if (!filterState) {
        getLocations(1);
      } else {
        getFilteredLocations({ type, measurement });
      }
    };
  },[]) 

  const handleInput = (e) => {
    setInputValue(e.target.value);
    getFilteredLocations({ type, measurement }, e.target.value);
  }

  const content = (!locations) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> :
    (locations.length === 0) ? 
    <NotFound text={"Локации с таким названием не найдено"} url={"no-location.png"}/> :
    <LocationCardList data={locations}/> 

  return (
    <div className="filter search">
     <div className="search__header">
        <GoBackButton  className="filter__goBack"/>
        <input
          onChange={handleInput}
          ref={textInput}
          className="search__input"
          type="text"
          value={inputValue}/>
        <button className="filter__button"
          onClick = {() => {
            setInputValue('')
            getFilteredLocations({ type, measurement })}}>
          <IconCross className="filter__goBack"/>
        </button>
      </div>
      <p className="search__title text_caption">Результаты поиска</p>
      <div className="container">
        {content}
      </div>
    </div>
  );
});

export default LocationsSearchPage;