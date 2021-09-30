import React, { useState } from 'react';
import GoBackButton from "../components/GoBackButton"
import CharacterCardList from "../components/cards/CharacterCardList"
import { IconCross } from '../icons';

const SearchPage = () => {

  return (
    <div className="filter">
     <div className="filter__header">
        <GoBackButton text="Выберите тип" className="filter__goBack"/>
        <button className="filter__button">
          <IconCross/>
        </button>
      </div>
      <p className="search__title text_caption">Сортировать</p>
      <CharacterCardList/>  
    </div>
  );
};

export default SearchPage;