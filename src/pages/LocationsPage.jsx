import React, { useState, useEffect } from 'react';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from "../components/SearchPanel";
import LocationCardList from "../components/cards/LocationCardList";
import NavBar from "../components/NavBar"
import { getLocations } from "../services/api/locations.api";

const LocationsPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocations()
      .then(res => {
        console.log(res)
        setData(res);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setError(true);
      })
  }, data) 


  const content = (loading) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так, проверьте подключение к интернету" 
      url="not-found.png"/>  : 
    <LocationCardList locations={data}/> 


  return (
    <div className="locations">
      <div className="locations__header">
        <SearchPanel 
          placeholder={"Найти локацию"}
          filter/>
        <div className="locations__total">
          Всего локаций: {data.length}
        </div>
      </div>
      {content}
      <NavBar/>
    </div>
  );
};

export default LocationsPage;