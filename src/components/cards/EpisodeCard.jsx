import React from 'react';
import { IconMoreThen } from "../../icons";

const EpisodeCard = ({premiere, imageName, series , id, name, withArrow}) => {
  const arrow = withArrow ? 
    <IconMoreThen className="character__arrow"/> : 
    null;

  const convertDate = (premiere) => {
    const date = new Date(premiere);
    const months = [
      'января', 'февраля', 'марта',
      'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября',
      'октября', 'ноября', 'декабря'
    ];

    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }

  return (
    <li className="episode">
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