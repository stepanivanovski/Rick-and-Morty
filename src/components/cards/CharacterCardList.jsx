import React from 'react';
import CharacterCard from "./CharacterCard"

const CharacterCardList = () => {
  return (
    <ul className="characters__list">
      <CharacterCard/>
      <CharacterCard status/>
      <CharacterCard/>
      <CharacterCard status/>
      <CharacterCard/>
    </ul>
  );
};

export default CharacterCardList;