import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import GoBackButton from '../components/GoBackButton';
import CharacterCardList from '../components/cards/CharacterCardList';
import locationsStore from "../store/locationsStore";


const LocationPage = observer(( {id} ) => {
  
  
  const { error, location, resetLocation, getLocationById } = locationsStore;

  useEffect(() => {
    getLocationById(id)
    
    return () => {
      resetLocation();
    }
  }, []) 
  

  const content = (!location?.name) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> : 
    <View location={location}/> 

  return (
    <div className="loc-page">
      <div className="loc-page__header">
        <div className="loc-page__header-img">
          {(location?.name) ?
            <img
              src={location?.imageName} 
              alt={location?.name}/> :
              null
          } 
        </div>
        <GoBackButton className="char-page__goBack"/>
      </div>
      {content}
    </div>
  );
});

const View = ({location}) => {
  const {
    name, 
    type,
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