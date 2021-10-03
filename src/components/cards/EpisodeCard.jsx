import React from 'react';
import { IconMoreThen } from "../../icons";
import { convertDate } from '../../utils';

const EpisodeCard = ({premiere, imageName, series , id, name, onItemSelected, withArrow}) => {
  const arrow = withArrow ? 
    <IconMoreThen className="character__arrow"/> : 
    null;

  return (
    <li className="episode"
      onClick={() => onItemSelected(id)}>
      <div className="episode__img" style={{ backgroundImage: `url(${imageName})`}} />
      <div className="episode__text">
        <p className="episode__number">Серия {series}</p>
        <p className="episode__title">{name}</p>
        <p className="episode__date">{convertDate(premiere)}</p>
      </div>
      {arrow} 
    </li>
  );
};         

export default EpisodeCard;