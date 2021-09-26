import React from 'react';

const LocationCard = () => {
  return (
    <div className="location">
      <div className="location__img" style={{ backgroundImage: `url("http://173.249.20.184:7001/images/Земля_001.jpg")` }} />
      <div className="location__text">
        <p className="location__title">Земля С-137</p>
        <p className="location__descr">Мир Изверение С-137</p>
      </div>
    </div>
  );
};

export default LocationCard;