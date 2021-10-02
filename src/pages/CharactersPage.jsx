import React, { useState, useEffect } from 'react';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from "../components/SearchPanel"
import CharacterCardList from "../components/cards/CharacterCardList"
import { IconListView, IconTableView } from "../icons/";
import NavBar from "../components/NavBar"
import { getCharacters } from "../services/api/characters.api";

const CharactersPage = () => {
 
  const [view, toggleView] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters()
      .then(res => {
        console.log(res)
        setData(res);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      })
  }, data) 

  const showViewIcon = () => {
    return (view) ? <IconListView/> : <IconTableView/>
  }

 
  const content = (loading) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> : 
    <CharacterCardList characters={data}/> 

  return (
    <div className="characters container">
      <div className="characters__header">
        <SearchPanel 
        filter
        placeholder="Найти персонажа"/>
        <div className="characters__wrapper">
          <div className="characters__total">
            Всего персонажей: {data.length}
          </div>
          <button 
            className="characters__view-switch"
            onClick={() => toggleView(!view)}>
            {showViewIcon()}
          </button>
        </div>
      </div>
      {content}
      <NavBar/>
    </div>
  );
};

export default CharactersPage;