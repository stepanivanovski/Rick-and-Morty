import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from '../components/SearchPanel';
import EpisodeCardList from '../components/cards/EpisodeCardList';
import NavBar from '../components/NavBar';
import episodesStore from "../store/episodesStore"


const SeasonButtons = ({ setSeason, setBtnClass, onLoading }) => {
  return (
    <ul className="episodes__wrapper">
      {[...Array(4)].map((item, i) => {
        return (
          <li className="episodes__season" key={i}>
            <button
              onClick={() => {
                setSeason(i + 1)
              }} 
              className={setBtnClass(i + 1)}>
              <p className="episodes__number">Сезон {i + 1}</p>
              <div className="episodes__season-under episodes__season-under_active"></div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
const EpisodesPage = observer(() => {
  const { loading, error, episodes, getEpisodes, onLoading }  = episodesStore;

  console.log(episodesStore);

  const [season, setSeason] = useState(1)

  useEffect(() => {
    getEpisodes(season);
    return onLoading();
  },[season]) 

  const setBtnClass = (i) => {
    if (i !== season) {
      return "episodes__button"
    }
    return "episodes__button episodes__button_active"
  }


  const content = (loading) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> : 
    <EpisodeCardList data={episodes}/>;
    
  return (
    <div className="episodes container">
      <div className="episodes__header">
        <SearchPanel
          path="./searchEpis"
          placeholder="Найти эпизод"
        />
        <SeasonButtons 
          setSeason={setSeason} 
          setBtnClass={setBtnClass}
          onLoading={onLoading}
        />
      </div>
      {content}
      <NavBar/>
    </div>  
  );
})

export default EpisodesPage;