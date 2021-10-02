import React from 'react';
import { useHistory } from 'react-router';
import CharacterCard from "./CharacterCard"

const CharacterCardList = ({ characters, withArrow=null }) => {
  const history = useHistory();

  return (
    <ul className="characters__list">
      {characters.map(item => {
        return (
          <CharacterCard
            onItemSelected = {(id) => history.push(`/characters/${id}`)}  
            key={item.id} 
            {...item} 
            withArrow={withArrow}/>
        )
      })}
    </ul>
  );
};

export default CharacterCardList;