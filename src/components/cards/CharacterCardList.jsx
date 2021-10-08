import React from 'react';
import { useHistory } from 'react-router';
import CharacterCard from "./CharacterCard"

const CharacterCardList = ({ data, columnView=false, withArrow=null }) => {
  const history = useHistory();

  return (
    <ul className={`characters__list`}>
      {data.map(item => {
        return (
          <CharacterCard
            onItemSelected = {(id) => history.push(`/characters/${id}`)}  
            key={item.id} 
            {...item} 
            withArrow={withArrow}
            columnView={columnView}/>
        )
      })}
    </ul>
  );
};

export default CharacterCardList;