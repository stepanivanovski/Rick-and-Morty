import React, { useState, useEffect } from 'react';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import EpisodeCardList from "../components/cards/EpisodeCardList"
import GoBackButton from '../components/GoBackButton';
import { IconMoreThen } from '../icons';
import { getCharacterById } from '../services/api/characters.api';
import { defineGender, defineStatus, defineStyle } from '../utils';

const CharacterPage = ({ id }) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getCharacterById(id)
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
    <View character={data}/> 

  return (
    <div className="char-page">
      <div>
      <div className="char-page__header"
        style={{backgroundImage:`url(${data?.imageName})`}}>
        <GoBackButton className="char-page__goBack"/>
        {(!loading) ? 
          <div 
            className="char-page__avatar"
            style={{backgroundImage:`url(${data?.imageName})`}}>
          </div> :
          null
        }
      </div>
      </div>
      {content}
    </div>
  );
};

const View = ({character}) => {
  const {
    fullName, 
    status, 
    gender, 
    race, 
    about,
    episodes, 
    placeOfBirth, 
    location
  } = character;

  return (
    <>
      <h1 className="char-page__title">{fullName}</h1>
      <div className={`character__status_center ${defineStyle(status)}`}>
        {defineStatus(status)}
      </div>
      <p className="char-page__descr text_main-13px">{about}</p>
      <div className="char-page__wrapper">
        <div>
          <div className="text_second-12px">Пол</div>
          <div className="text_main-14px">{defineGender(gender)}</div>
        </div>
        <div>
          <div className="text_second-12px">Расса</div>
          <div className="text_main-14px">{race}</div>
        </div>
      </div>
      <div className="item-link item-link_mb-24">
        <div>
          <div className="text_second-12px">Место рождения</div>
          <div className="text_main-14px">{placeOfBirth?.name || "нет данных"}</div>
        </div>
        <IconMoreThen className="item-link__svg"/>
      </div>
      <div className="item-link item-link_mb-24">
        <div>
          <div className="text_second-12px">Местоположение</div>
          <div className="text_main-14px">{location?.name || "нет данных"}</div>
        </div>
        <IconMoreThen className="item-link__svg"/>
      </div>
      <hr/>
      <div className="char-page__subtitle-wrapper">
        <h3 className="text_main-20px">Эпизоды</h3>
        <div className="text_second-12px">Все эпизоды</div>
      </div>
      <EpisodeCardList episodes={episodes} withArrow/>
    </>
  )
}

export default CharacterPage;