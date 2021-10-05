import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from "../components/SearchPanel"
import CharacterCardList from "../components/cards/CharacterCardList"
import { IconListView, IconTableView } from "../icons/";
import NavBar from "../components/NavBar"
import { 
  onLoading, 
  fetchData
} from "../store/getRequestsSlice"

const CharactersPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.fetchData)
  
  const { loading, error, characters } = state;

  useEffect(() => {
    dispatch(fetchData("characters"));
    return dispatch(onLoading());
  },[]) 
 
  const [view, toggleView] = useState(true);

  const showViewIcon = () => {
    return (view) ? <IconListView/> : <IconTableView/>
  }
   
  const content = (loading) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> : 
    <CharacterCardList characters={characters}/> 

  return (
    <div className="characters container">
      <div className="characters__header">
        <SearchPanel 
          filter
          path="/filterChar"
          placeholder="Найти персонажа"/>
        <div className="characters__wrapper">
          <div className="characters__total">
            Всего персонажей: {characters.length}
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