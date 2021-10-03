import React, { useState, useEffect } from 'react';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import GoBackButton from '../components/GoBackButton';
import CharacterCardList from '../components/cards/CharacterCardList';
import { getLocationById } from '../services/api/locations.api';


const LocationPage = ( {id} ) => {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getLocationById(id)
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
    <View location={data}/> 

  return (
    <div className="loc-page">
      <div className="loc-page__header"
        style={{backgroundImage:`url(${data?.imageName})`}}>
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
      <div className="loc-page__caption">
        <h2 className="loc-page__title">{name}</h2>
        <p className="loc-page__subtitle">{type} {measurements}</p>
      </div>
      <p className="loc-page__descr text_main-13px">
        {about}
      </p>
      <h3 className="text_main-20px">Персонажи</h3>
      <CharacterCardList characters={characters} withArrow/>
    </div>
  )
}

export default LocationPage;