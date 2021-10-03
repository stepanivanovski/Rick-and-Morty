import React, { useState, useEffect } from 'react';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import GoBackButton from '../components/GoBackButton';
import CharacterCardList from '../components/cards/CharacterCardList';
import { IconPlay } from '../icons';
import { getEpisodeById } from '../services/api/episodes.api';
import { convertDate } from '../utils'; 

const EpisodePage = ({ id }) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getEpisodeById(id)
      .then(res => {
        console.log(res)
        setData(res);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      })
  }, [data.id]) 
  

  const content = (loading) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> : 
    <View episode={data}/> 

  return (
    <div className="epis-page">
      <div className="epis-page__header"
        style={{backgroundImage:`url(${data?.imageName})`}}>
        <GoBackButton className="char-page__goBack"/>
        {(!loading) ? 
          <div className="epis-page__play">
          <IconPlay/>
          </div> :
          null
        }
      </div>
      {content}
    </div>     
  );
};

const View = ({ episode }) => {
  const { 
    premiere, 
    series, 
    id, 
    name,
    plot="нет данных",
    characters
  } = episode;

  return (
    <div className="epis-page__content">
      <div className="epis-page__caption">
        <h2 className="epis-page__title">{name}</h2>
        <p className="epis-page__subtitle">
          серия {series}
        </p>
      </div>
      <p className="epis-page__descr">
       {plot}
      </p>
      <div className="text_second-12px">Премьера</div>
      <div className="text_main-14px">{convertDate(premiere)}</div>
      <hr/>
      <h3 className="text_main-20px">Персонажи</h3>
      <CharacterCardList characters={characters} withArrow/>
    </div>
  ) 
}

export default EpisodePage;