import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite'
import Spinner from '../components/Spinner';
import NotFound from '../components/NotFound';
import GoBackButton from "../components/GoBackButton"
import EpisodeCardList from '../components/cards/EpisodeCardList';
import { IconCross } from '../icons';
import episodesStore from "../store/episodesStore";

const LocationsSearchPage = observer(() => {
  const textInput = useRef();
  const [ inputValue, setInputValue] = useState('');

  const { episodes, error, loading, onLoading, getEpisodeByName } = episodesStore;


  useEffect(() => {
    textInput.current.focus();
    return () => onLoading();
  },[]) 


  const handleInput = (e) => {
    setInputValue(e.target.value);
    getEpisodeByName(e.target.value);
  }

  const content = (loading) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> :
    (episodes.length === 0) ? 
    <NotFound text={"Эпизода с таким названием нет"} url={"no-episode.png"}/> :
    <EpisodeCardList data={episodes}/> 

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
            getEpisodeByName()}}>
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