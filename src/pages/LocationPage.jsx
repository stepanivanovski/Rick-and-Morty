import React from 'react';
import GoBackButton from '../components/GoBackButton';
import CharacterCardList from '../components/cards/CharacterCardList';
const LocationPage = () => {
  return (
    <div className="loc-page">
      <div className="loc-page__header"
        style={{backgroundImage:`url("http://173.249.20.184:7001/images/Земля_001.jpg")`}}>
        <GoBackButton/>
      </div>
      <div className="loc-page__content">
        <div className="loc-page__caption">
          <h2 className="loc-page__title">Земля С-137</h2>
          <p className="loc-page__subtitle">Мир Изверение С-137</p>
        </div>
        <p className="loc-page__descr">
          Это планета, на которой проживает человеческая раса, и главное место для персонажей Рика и Морти. Возраст этой Земли более 4,6 миллиардов лет, и она является четвертой планетой от своей звезды.
        </p>
        <h3>Персонажи</h3>
        <CharacterCardList/>
      </div>
    </div>
  );
};

export default LocationPage;