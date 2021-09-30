import React from 'react';
import CharacterCard from "./CharacterCard"

const CharacterCardList = ({ withArrow=null }) => {
  return (
    <ul className="characters__list">
      <CharacterCard withArrow={withArrow}/>
      <CharacterCard status withArrow={withArrow}/>
      <CharacterCard withArrow={withArrow}/>
      <CharacterCard withArrow={withArrow} status/>
      <CharacterCard withArrow={withArrow}/>
    </ul>
  );
};

export default CharacterCardList;