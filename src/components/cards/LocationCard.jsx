import React from 'react';

const LocationCard = ({ id, name, type, imageName, measurements }) => {
  return (
    <div className="location">
      <div className="location__img" style={{ backgroundImage: `url(${imageName})` }} />
      <div className="location__text">
        <p className="location__title">{name}</p>
        <p className="location__descr">{type} {measurements}</p>
      </div>
    </div>
  );
};

export default LocationCard;