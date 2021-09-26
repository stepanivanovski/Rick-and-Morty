import React from 'react';
import SearchPanel from "../components/SearchPanel"
import CharacterCard from "../components/cards/CharacterCard"
import NavBar from "../components/NavBar"
import { IconListView } from '../icons/';

const CharactersPage = () => {
  return (
    <div className="characters">
      <div className="characters__header">
        <SearchPanel filter/>
        <div className="characters__wrapper">
          <div class="characters__total">
            Всего персонажей: 200
          </div>
          <button className="characters__view-switch"><IconListView/></button>
        </div>
      </div>
      <ul className="characters__list">
        <CharacterCard status/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard status/>
        <CharacterCard/>
        <CharacterCard/>
      </ul>
      <NavBar/>
    </div>
  );
};

export default CharactersPage;