import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import GoBackButton from '../components/GoBackButton';
import CharacterCardList from '../components/cards/CharacterCardList';
import {
  onLoading, 
  fetchData,
} from "../store/fetchDataSlice";


const LocationPage = ( {id} ) => {
  
  
  const dispatch =useDispatch();
  const state = useSelector(state => state.fetch);

  const { error, location } = state

  useEffect(() => {
    dispatch(fetchData("location", {id}))
    
    return () => {
      onLoading();
    }
  }, []) 
  

  const content = (!location?.name) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> : 
    <View location={location}/> 

  return (
    <div className="loc-page">
      <div className="loc-page__header"
        style={{backgroundImage:`url(${location?.imageName})`}}>
        <GoBackButton className="char-page__goBack"/>
      </div>
      {content}
    </div>
  );
};

const View = ({location}) => {
  const {
    id, 
    name, 
    type,
    imageName, 
    measurements,
    about,
    characters
  } = location;

  return (
    <div className="loc-page__content">
      <div className="container">
        <div className="loc-page__caption">
          <h2 className="loc-page__title">{name}</h2>
          <p className="loc-page__subtitle">{type} {measurements}</p>
        </div>
        <p className="loc-page__descr text_main-13px">
          {about}
        </p>
        <h3 className="text_main-20px">Персонажи</h3>
        <CharacterCardList data={characters} withArrow/>
      </div>
    </div>
  )
}

export default LocationPage;