import React, { useState, useEffect } from 'react';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from '../components/SearchPanel';
import EpisodeCardList from '../components/cards/EpisodeCardList';
import NavBar from '../components/NavBar';
import { getEpisodes } from "../services/api/episodes.api";


const SeasonButtons = ({ setSeason, setBtnClass }) => {
  return (
    <ul className="episodes__wrapper">
      {[...Array(4)].map((item, i) => {
        return (
          <li className="episodes__season">
            <button
              onClick={() => {setSeason(i + 1)}} 
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

const EpisodesPage = () => {
  const [season, setSeason] = useState(1)
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEpisodes(season)
      .then(res => {
        console.log(res)
        setData(res);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      })
  }, [season]) 

  const content = (loading) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> : 
    <EpisodeCardList episodes={data}/>;
  
  const setBtnClass = (i) => {
    if (i !== season) {
      return "episodes__button"
    }
    return "episodes__button episodes__button_active"
  }

  return (
    <div className="episodes container">
      <div className="episodes__header">
        <SearchPanel
          placeholder="Найти эпизод"
        />
        <SeasonButtons 
          setSeason={setSeason} 
          setBtnClass={setBtnClass}
        />
      </div>
      {content}
      <NavBar/>
    </div>  
  );
}


export default EpisodesPage;