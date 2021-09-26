import React from 'react';
import GoBackButton from '../components/GoBackButton';
import CharacterCardList from '../components/cards/CharacterCardList';

const EpisodePage = () => {
  return (
    <div className="epis-page">
      <div className="epis-page__header"
        style={{backgroundImage:`url("http://173.249.20.184:7001/images/Пилот_001.jpg")`}}>
        <GoBackButton/>
      </div>
      <div className="epis-page__content">
        <div className="epis-page__caption">
          <h2 className="epis-page__title">М. Найт Шьямал-Инопланетяне!</h2>
          <p className="epis-page__subtitle">
            серия 1
          </p>
        </div>
        <p className="epis-page__descr">
          Это планета, на которой проживает человеческая раса, и главное место для персонажей Рика и Морти. Возраст этой Земли более 4,6 миллиардов лет, и она является четвертой планетой от своей звезды.
        </p>
        <h3>Персонажи</h3>
        <CharacterCardList/>
      </div>
    </div>
  );
};

export default EpisodePage;