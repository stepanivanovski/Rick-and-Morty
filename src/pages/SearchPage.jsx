import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import NotFound from '../components/NotFound';
import GoBackButton from "../components/GoBackButton"
import CharacterCardList from "../components/cards/CharacterCardList";
import LocationCardList from '../components/cards/LocationCardList';
import EpisodeCardList from '../components/cards/EpisodeCardList';
import { IconCross } from '../icons';
import { 
  onLoading, 
  fetchData
} from "../store/fetchDataSlice";

const SearchPage = () => {
  const textInput = useRef();
  const { pathname } = useLocation();
  const [ inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const { 
    fetch, 
    charFilter: { 
      checkbox, 
      charAlphabet 
    }, 
    locFilter : { 
      locAlphabet, 
      type, 
      measurement  
    }
  } = useSelector(state => state)
  
  const { loading, error, characters, locations, episodes } = fetch;
  
  const configData = [
    { 
      fetch: ["filteredChar", {removeFilterData: checkbox, localFilterData: charAlphabet}],
      img:"no-character.png",
      message: "Персонаж с таким именем не найден",
      data:characters,
      CardList: CharacterCardList
    },
    { 
      fetch: ["filteredLoc", {removeFilterData: { type, measurement }, localFilterData: locAlphabet}],
      img: "no-location.png",
      message: "Локации с таким названием не найдено",
      data: locations,
      CardList: LocationCardList
    },
    { 
      fetch: ["filteredEpis", {}],
      img: "no-episode.png",
      message: "Эпизода с таким названием нет",
      data: episodes,
      CardList: EpisodeCardList
    }
  ]; 

  const configObj= (pathname === "/searchChar") ? 
    configData[0] :
    (pathname === "/searchLoc") ?
    configData[1] :
    configData[2];  
    
  useEffect(() => {
    textInput.current.focus();
    return () => dispatch(onLoading());
  },[]) 


  const handleInput = (e) => {
    setInputValue(e.target.value);
    dispatch(fetchData(...configObj.fetch, inputValue));
  }

  const content = (loading) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> :
    (configObj.data.length === 0) ? 
    <NotFound text={configObj.message} url={configObj.img}/> :
    <configObj.CardList data={configObj.data}/> 

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
            dispatch(fetchData(...configObj.fetch))}}>
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

export default SearchPage;