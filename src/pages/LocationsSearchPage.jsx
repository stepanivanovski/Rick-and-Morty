import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import NotFound from '../components/NotFound';
import GoBackButton from "../components/GoBackButton"
import LocationCardList from '../components/cards/LocationCardList';
import { IconCross } from '../icons';
import { 
  getFilteredLocationsThunk,
  getLocationsThunk,
  resetLocations, 
} from "../store/locationsSlice";

const LocationsSearchPage = () => {
  const textInput = useRef();
  const [ inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const { locations, error, type, measurement} = useSelector(state => state.locations)


  useEffect(() => {
    textInput.current.focus();
    return () => {
      dispatch(resetLocations())
      dispatch(getLocationsThunk())
    };
  },[]) 


  const handleInput = (e) => {
    setInputValue(e.target.value);
    dispatch(getFilteredLocationsThunk({ type, measurement }, e.target.value));
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
            dispatch(getFilteredLocationsThunk({ type, measurement }))}}>
          <IconCross className="filter__goBack"/>
        </button>
      </div>
      <p className="search__title text_caption">Результаты поиска</p>
      <div className="container">
        {content}
      </div>
    </div>
  );
};

export default LocationsSearchPage;