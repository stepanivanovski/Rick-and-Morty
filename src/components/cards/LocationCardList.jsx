import React from 'react';
import LocationCard from './LocationCard'

const LocationCardList = ({ locations }) => {
  return (
    <ul className="locations__list">
      {locations.map(item => <LocationCard key={item.id} {...item}/>)}
    </ul>
  );
};

export default LocationCardList;