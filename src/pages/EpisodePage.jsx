import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import GoBackButton from '../components/GoBackButton';
import CharacterCardList from '../components/cards/CharacterCardList';
import { IconPlay } from '../icons';
import { convertDate } from '../utils';
import {
  onLoading, 
  fetchData
} from "../store/fetchDataSlice";


const EpisodePage = ({ id }) => {

  const dispatch =useDispatch();
  const state = useSelector(state => state.fetch);

  const { error, episode } = state
  
  useEffect(() => {
    dispatch(fetchData("episode", {id}))
    
    return () => {
      onLoading();
    }
  }, []) 
  

  const content = (!episode?.series) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> : 
    <View episode={episode}/> 

  return (
    <div className="epis-page">
      <div className="epis-page__header">
        <div className="epis-page__header-img">
         {(episode?.series) ?
            <img
              src={episode?.imageName} 
              alt={episode?.series}/> :
              null
          } 
        </div>
        <GoBackButton className="char-page__goBack"/>
        {(episode.series) ? 
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
    name,
    plot="нет данных",
    characters
  } = episode;

  return (
    <div className="epis-page__content">
      <div className="container">
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
        <CharacterCardList data={characters} withArrow/>
      </div>
    </div>
  ) 
}

export default EpisodePage;