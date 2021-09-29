import React from 'react';
import SearchPanel from "../components/SearchPanel";
import LocationCardList from "../components/cards/LocationCardList";
import NavBar from "../components/NavBar"

const LocationsPage = () => {
  return (
    <div className="locations">
      <div className="locations__header">
        <SearchPanel 
          placeholder={"Найти локацию"}
          filter/>
        <div class="locations__total">
          Всего локаций: 200
        </div>
      </div>
      <LocationCardList/>
      <NavBar/>
    </div>
  );
};

export default LocationsPage;