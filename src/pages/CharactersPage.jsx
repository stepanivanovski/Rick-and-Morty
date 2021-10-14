import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from "../components/SearchPanel"
import CharacterCardList from "../components/cards/CharacterCardList"
import { IconListView, IconTableView } from "../icons/";
import NavBar from "../components/NavBar";
import { getCharactersSelector } from '../selectors/charactersSelector';
import { 
  getCharactersThunk,
  getFilteredCharactersThunk,
} from "../store/charactersSlice";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const observerElement = useRef();
  const { characters: { loading, error, filterState, checkbox, page, prevY  } } = useSelector(state => state);
  const characters = useSelector(getCharactersSelector);

  const [view, toggleView] = useState(true);
  
  const handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;
    // if (prevY > y) {
      console.log(y);
    // }
  }

  useEffect(() => {
    if (!characters) {
      if (!filterState) {
        dispatch(getCharactersThunk());
      } else {
        dispatch(getFilteredCharactersThunk(checkbox))
      }
    }
    const options = {
      root: null, // Page as root
      rootMargin: "0px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(
      handleObserver, //callback
      options
    );
    observer.observe(observerElement.current);
  },[]) 
 
  const showViewIcon = () => {
    return (view) ? <IconListView/> : <IconTableView/>
  }

  const content = (!characters) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> :
    (characters === null) ? 
    null :
    (characters.length === 0) ? 
    <NotFound text="По данным фильтра ничего не найдено" url="not-found.png"/> :
    <CharacterCardList columnView={view} data={characters}/> 
     
  return (
    <div className="characters container">
      <div className="characters__header">
        <SearchPanel 
          path="./searchChar"
          filter
          filterPath="/filterChar"
          placeholder="Найти персонажа"/>
        <div className="characters__wrapper">
          <div className="characters__total">
            Всего персонажей: {characters?.length}
          </div>
          <button 
            className="characters__view-switch"
            onClick={() => toggleView(!view)}>
            {showViewIcon()}
          </button>
        </div>
      </div>
      {content}
      <div
        className="characters__observer"
        ref={observerElement}>
          {
            (loading) ?
              <span>Loading...</span> :
              null 
          }
      </div>
      <NavBar/>
    </div>
  );
};


export default CharactersPage;