import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/base/Button';
import { IconMoreThen, IconPaints } from '../icons';
import GoBackButton from '../components/GoBackButton';
import NavBar from '../components/NavBar';
import ThemeChanging from '../components/ThemeChanging';
import { toggleModal, showImg } from '../utils';

const OptionsPage = () => {
  const [ modal, setModal ] = useState(false)

  const login = sessionStorage.getItem('login')
  const avatar = sessionStorage.getItem('avatar')
  const fullName = sessionStorage.getItem('fullName')
  
  return (
    <div className="options container options_hidden">
      <GoBackButton text="Настройки" className="options__goBack"/>
      <div className="options__user">
        <div 
          style={{backgroundImage:`url(${showImg(avatar)})`}}
          className="options__img">
        </div>
        <div className="options__user-info">
          <div className="text_main-16px">{`${fullName}`}</div>
          <div className="text_second-14px">{login}</div>
        </div>
      </div>
      <Link to="options/edit">
        <Button className="btn_transparent "text="Редактировать"/>
      </Link>
      <hr/>
      <h3 className="options__subtitle text_caption">Внешний вид</h3>
      <button 
        onClick={() => toggleModal(modal, setModal)  }
        className="item-link__button">
        <div className="item-link">
            <IconPaints className="item-link__svg"/>
            <div className="item-link_ml-16" >
              <div className="text_main-16px">Темная тема</div>
              <div className="text_second-14px">Включена</div>
            </div>
        </div>
        <IconMoreThen className="item-link__svg"/>
      </button>
      <hr/>
      <h3 className="options__subtitle text_caption">О приложении</h3>
      <p className="text_main-13px">
        Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концен-трирован- ной темной материи.  
      </p>
      <hr/>
      <h3 className="options__subtitle text_caption">Версия приложения</h3>
      <div className="text_main-13px">Rick & Morty  v1.0.0</div>
      <NavBar/>
      {
        (modal) ? 
          <ThemeChanging modal={modal} setModal={setModal}/> : 
          null
      }
    </div>
  );
};
 
export default OptionsPage; 