import React from 'react';
import SearchPanel from "../components/SearchPanel";
import LocationCard from "../components/cards/LocationCard";
import NavBar from "../components/NavBar"

const LocationsPage = () => {
  return (
    <div className="locations">
      <div className="locations__header">
        <SearchPanel filter/>
        <div class="locations__total">
          Всего персонажей: 200
        </div>
      </div>
      <ul className="locations__list">
        <LocationCard/>
        <LocationCard/>
        <LocationCard/>
        <LocationCard/>
      </ul>
      <NavBar/>
    </div>
  );
};

export default LocationsPage;