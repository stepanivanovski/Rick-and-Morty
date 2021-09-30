import React from 'react';
import { IconMoreThen } from "../../icons";

const EpisodeCard = ({withArrow}) => {
  const arrow = withArrow ? <IconMoreThen className="character__arrow"/> : null;

  return (
    <li className="episode">
      <div className="episode__img" style={{ backgroundImage: `url("http://173.249.20.184:7001/images/Пилот_001.jpg")` }} />
      <div className="episode__text">
        <p className="episode__number">Серия 1</p>
        <p className="episode__title">Пилот</p>
        <p className="episode__date">2 декабря 2013</p>
      </div>
      {arrow} 
    </li>
  );
};         

export default EpisodeCard;