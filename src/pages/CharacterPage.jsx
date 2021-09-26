import React from 'react';
import EpisodeCard from "../components/cards/EpisodeCard"
import GoBackButton from '../components/GoBackButton';

const CharacterPage = () => {
  return (
    <div className="char-page">
      <div className="char-page__header"
        style={{backgroundImage:`url("http://173.249.20.184:7001/images/Пилот_001.jpg")`}}>
        <GoBackButton/>
        <div 
          className="char-page__avatar"
          style={{backgroundImage:`url("http://173.249.20.184:7001/images/Пилот_001.jpg")`}}>
        </div>
      </div>
      <h1 className="char-page__title">Рик Санчез</h1>
      <div className="char-page__title">живой</div>
      <hr/>
      <ul className="episode__list">
        <EpisodeCard/>
        <EpisodeCard/>
        <EpisodeCard/>
        <EpisodeCard/>
        <EpisodeCard/>
      </ul>
    </div>
  );
};

export default CharacterPage;