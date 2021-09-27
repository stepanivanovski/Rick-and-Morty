import React from 'react';
import Button from '../components/base/Button';
import { IconMoreThen, IconPaints } from '../icons';
import GoBackButton from '../components/GoBackButton';
import NavBar from '../components/NavBar';

const OptionsPage = () => {
  return (
    <div className="options">
      <GoBackButton text="Настройки"/>
      <div className="options__user">
        <div 
          style={{backgroundImage:`url("http://173.249.20.184:7001/images/Пилот_001.jpg")`}}
          className="options__img">
        </div>
        <div className="options__user-info">
          <div className="text_main-16px">Oleg Belotserkovsky</div>
          <div className="text_second-14px">Rick</div>
        </div>
      </div>
      <Button className="btn_transparent "text="Редактировать"/>
      <hr/>
      <h3 className="options__subtitle text_caption">Внешний вид</h3>
      <div className="item-link">
          <div className="item-link">
            <IconPaints/>
            <div className="item-link_ml-16" >
              <div className="text_main-16px">Темная тема</div>
              <div className="text_second-14px">Включена</div>
            </div>
          </div>
          <IconMoreThen/>
      </div>
      <hr/>
      <h3 className="options__subtitle text_caption">О приложении</h3>
      <p className="text_main-13px">
        Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концен-трирован- ной темной материи.  
      </p>
      <hr/>
      <h3 className="options__subtitle text_caption">Версия приложения</h3>
      <div>Rick & Morty  v1.0.0</div>
      <NavBar/>
    </div>
  );
};

export default OptionsPage;