import React from 'react';
import EpisodeCardList from '../components/cards/EpisodeCardList';
import NavBar from '../components/NavBar';
import SearchPanel from '../components/SearchPanel';

const EpisodesPage = () => {
  return (
    <div className="episodes">
    <div className="episodes__header">
      <SearchPanel
       placeholder="Найти эпизод"
       />
      <ul className="episodes__wrapper">
        <li className="episodes__season">
          <p className="active">Сезон 1</p>
          <div className="episodes__season-under episodes__season-under_active"></div>
        </li>
        <li className="episodes__season">
          <p>Сезон 2</p>
          <div className="episodes__season-under"></div>
        </li>
        <li className="episodes__season">
          <p>Сезон 3</p>
          <div className="episodes__season-under"></div>
        </li>
        <li className="episodes__season">
          <p>Сезон 4</p>
          <div className="episodes__season-under"></div>
        </li>
      </ul>
    </div>
    <EpisodeCardList/>
    <NavBar/>
  </div>  
  );
}


export default EpisodesPage;