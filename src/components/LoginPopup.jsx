import React from 'react';
import Button from './base/Button';

const LoginPopup = ({ active, set }) => {
  return (
    <div class="modal">
      <div class="message"> 
        <h3 className="message__title">Ошибка</h3>
        <p className="message__text">Введен  неверные логин или пароль</p>
        <Button text="Ок" className="btn_transparent"/>
      </div>
    </div>
  );
};

export default LoginPopup;