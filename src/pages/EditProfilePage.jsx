import React from 'react';
import { Link } from 'react-router-dom';
import GoBackButton from '../components/GoBackButton';
import { IconMoreThen } from '../icons';

const EditProfilePage = () => {
  return (
    <div className="options container">
    <GoBackButton text="Редактировать профиль" className="options__arrow"/>
    <div className="options__user options__user_edit-p">
      <div 
        style={{backgroundImage:`url("http://173.249.20.184:7001/images/Пилот_001.jpg")`}}
        className="options__img options__img_edit-p">
      </div>
      <div className="options__link">Изменить фото</div>

    </div>
    <h3 className="options__subtitle text_caption">Профиль</h3>
    <Link to="/options/name">
      <div className="item-link item-link_mb-20">
        <div>
          <div className="text_main-16px">Изменить ФИО</div>
          <div className="text_second-14px">Степан Иванов</div>
        </div>
        <IconMoreThen className="options__arrow"/>
      </div>
    </Link>
    <div className="item-link">
      <div>
        <div className="text_main-16px">Логин</div>
        <div className="text_second-14px">kamchatka</div>
      </div>
      <IconMoreThen className="options__arrow"/>
    </div>
  </div>
  );
};

export default EditProfilePage;