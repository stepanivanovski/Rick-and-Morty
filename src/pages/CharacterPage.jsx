import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import EpisodeCardList from "../components/cards/EpisodeCardList"
import GoBackButton from '../components/GoBackButton';
import { IconMoreThen } from '../icons';
import { defineGender, defineStatus, defineStyle } from '../utils';
import {
  onLoading, 
  fetchData
} from "../store/fetchDataSlice";

const CharacterPage = ({ id }) => {
  const history = useHistory();

  const dispatch =useDispatch();
  const state = useSelector(state => state.fetch);

  const { loading, error, character } = state

  useEffect(() => {
    dispatch(fetchData("character", {id}))

    return () => {
      onLoading();
    }
  }, [])  
  
  const content = (!character?.fullName) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> : 
    <View character={character} history={history}/> 

  return (
    <div className="char-page">
      <div className="char-page__header"
        style={{backgroundImage:`url(${character?.imageName})`}}>
        <GoBackButton className="char-page__goBack"/>
        {(!loading) ? 
          <div 
            className="char-page__avatar"
            style={{backgroundImage:`url(${character?.imageName})`}}>
          </div> :
          null
        }
      </div>
      {content}
    </div>
  );
};

const View = ({character, history}) => {
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
    <div className="container">
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
      <div
        onClick={() => history.push(`/locations/${placeOfBirth?.id}`)} 
        className="item-link item-link_mb-24">
        <div>
          <div className="text_second-12px">Место рождения</div>
          <div className="text_main-14px">{placeOfBirth?.name || "нет данных"}</div>
        </div>
        <IconMoreThen className="item-link__svg"/>
      </div>
      <div 
        onClick={() => history.push(`/locations/${location?.id}`)} 
        className="item-link item-link_mb-24">
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
      <EpisodeCardList data={episodes} withArrow/>
    </div>
  )
}

export default CharacterPage;