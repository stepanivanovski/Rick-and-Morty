import React from 'react';
import LocationCard from './LocationCard'

const LocationCardList = () => {
  return (
    <ul className="locations__list">
     <LocationCard status/>
     <LocationCard/>
     <LocationCard status/>
     <LocationCard/>
     <LocationCard/>
    </ul>
  );
};

export default LocationCardList;