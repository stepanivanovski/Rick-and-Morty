import React, { useState, useEffect } from 'react';
import SearchPanel from "../components/SearchPanel"
import CharacterCardList from "../components/cards/CharacterCardList"
import NavBar from "../components/NavBar"
import { getProfile } from '../services/api/profile.api';
import { IconListView, IconTableView } from '../icons/';

const CharactersPage = () => {
 
  const [view, toggleView] = useState(true);

  getProfile()
    .then(request => {
      console.log(request)
    })

  return (
    <div className="characters">
      <div className="characters__header">
        <SearchPanel 
        filter
        placeholder="Найти персонажа"/>
        <div className="characters__wrapper">
          <div class="characters__total">
            Всего персонажей: 200
          </div>
          <button 
            className="characters__view-switch"
            onClick={() => toggleView(!view)}>
            <IconListView/>
          </button>
        </div>
      </div>
      <CharacterCardList/>
      <NavBar/>
    </div>
  );
};

export default CharactersPage;