import React from 'react';
import EpisodeCardList from "../components/cards/EpisodeCardList"
import GoBackButton from '../components/GoBackButton';
import { IconMoreThen } from '../icons';

const CharacterPage = () => {
  return (
    <div className="char-page">
      <div className="char-page__header"
        style={{backgroundImage:`url("http://173.249.20.184:7001/images/Пилот_001.jpg")`}}>
        <GoBackButton className="char-page__goBack"/>
        <div 
          className="char-page__avatar"
          style={{backgroundImage:`url("http://173.249.20.184:7001/images/Пилот_001.jpg")`}}>
        </div>
      </div>
      <h1 className="char-page__title">Рик Санчез</h1>
      <div className="character__status character__status_green">живой</div>
      <p className="char-page__descr text_main-13px">
      Главный протагонист мультсериала «Рик и Морти». Безумный ученый, чей алкоголизм, безрассудность
и социопатия заставляют беспокоиться семью его дочери.
      </p>
      <div className="char-page__wrapper">
        <div>
          <div className="text_second-12px">Пол</div>
          <div className="text_main-14px">Мужской</div>
        </div>
        <div>
          <div className="text_second-12px">Расса</div>
          <div className="text_main-14px">Человек</div>
        </div>
      </div>
      <div className="item-link item-link_mb-24">
        <div>
          <div className="text_second-12px">Место рождения</div>
          <div className="text_main-14px">Земля C-137</div>
        </div>
        <IconMoreThen className="item-link__svg"/>
      </div>
      <div className="item-link item-link_mb-24">
        <div>
          <div className="text_second-14px">Местоположение</div>
          <div className="text_main-16px">Земля (Измерение подменны)</div>
        </div>
        <IconMoreThen className="item-link__svg"/>
      </div>
      <hr/>
      <EpisodeCardList/>
    </div>
  );
};

export default CharacterPage;