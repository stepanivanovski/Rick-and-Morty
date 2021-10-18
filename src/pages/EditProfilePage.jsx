import React from 'react';
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
import GoBackButton from '../components/GoBackButton';
import { IconMoreThen } from '../icons';
import { showImg } from '../utils';
import authStore from '../store/authStore';


const EditProfilePage = observer(() => {

  const login = sessionStorage.getItem('login')
  const avatar = sessionStorage.getItem('avatar')
  const fullName = sessionStorage.getItem('fullName')

  const handleInput = (e) => {
    authStore.updateAvatar(e.target.files);
  }

  return (
    <div className="options container">
    <GoBackButton text="Редактировать профиль" className="options__arrow"/>
    <div className="options__user options__user_edit-p">
      <div 
        style={{backgroundImage:`url(${showImg(avatar)})`}}
        className="options__img options__img_edit-p">
      </div>

      <form>
        <div className="options__link">
        <label htmlFor="input-file">
          Изменить фото
        </label>
        <input 
          onChange={handleInput}
          id="input-file" 
          type="file" 
          accept="image/x-png,image/gif,image/jpeg"/>
      </div>
      </form>
      
    </div>
    <h3 className="options__subtitle text_caption">Профиль</h3>
    <Link to="/options/name">
      <div className="item-link item-link_mb-20">
        <div>
          <div className="text_main-16px">Изменить ФИО</div>
          <div className="text_second-14px">{`${fullName}`}</div>
        </div>
        <IconMoreThen className="options__arrow"/>
      </div>
    </Link>
    <div className="item-link">
      <div>
        <div className="text_main-16px">Логин</div>
        <div className="text_second-14px">{`${login}`}</div>
      </div>
      <IconMoreThen className="options__arrow"/>
    </div>
  </div>
  );
});

export default EditProfilePage;