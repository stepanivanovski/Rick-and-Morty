import React from 'react';

const EpisodeCard = () => {
  return (
    <li className="episode">
      <div className="episode__img" style={{ backgroundImage: `url("http://173.249.20.184:7001/images/Пилот_001.jpg")` }} />
      <div className="episode__text">
        <p className="episode__number">Серия 1</p>
        <p className="episode__title">Пилот</p>
        <p className="episode__date">2 декабря 2013</p>
      </div> 
    </li>
  );
};         

export default EpisodeCard;