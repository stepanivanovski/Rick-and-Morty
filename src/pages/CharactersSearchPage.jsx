import React, { useEffect, useRef, useState } from 'react';
import { observer } from "mobx-react-lite";
import Spinner from '../components/Spinner';
import NotFound from '../components/NotFound';
import GoBackButton from "../components/GoBackButton"
import CharacterCardList from "../components/cards/CharacterCardList";
import { IconCross } from '../icons';
import charactersStore from '../store/charactersStore';

const CharactersSearchPage = observer(() => {

  const textInput = useRef();
  const [ inputValue, setInputValue] = useState('');

  const { 
    characters, 
    error, 
    checkbox, 
    filterState, 
    getFilteredCharacters,  
    getCharacters, 
    resetCharacters, 
  } = charactersStore; 

  useEffect(() => {
    textInput.current.focus();
    return () => {
      resetCharacters()
      
      if (!filterState) {
        getCharacters(1);
      } else {
        getFilteredCharacters(checkbox);
      }
    }
  },[]) 

  const handleInput = (e) => {
    setInputValue(e.target.value);
    getFilteredCharacters(checkbox, e.target.value);
  }

  const content = (!characters) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> :
    (characters?.length === 0) ? 
    <NotFound text={"Персонаж с таким именем не найден"} url={"no-character.png"}/> :
    <CharacterCardList data={characters}/> 

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
            getFilteredCharacters(checkbox)}}>
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


export default CharactersSearchPage;