import React from 'react';
import Input from '../components/base/Input';
import Button from '../components/base/Button';
import { IconUser, IconPassword, IconEye } from '../icons';
import { Link } from 'react-router-dom';
import Message from '../components/Message';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__img">
        <img
          src="./assets/enter-page-img.svg"
          alt="rick and morty icon"
        />
      </div>
      <form className="login-page__form">
        <Input
          Icon={IconUser}
          id="text"
          type="text"
          title="Логин"
        />
        <Input
          Icon={IconPassword}
          Eye={IconEye}
          id="password"
          type="password"
          title="Пароль"
        />
        <Button text="Войти" />
      </form>
      <div className="login-page__caption">
        <p>У вас еще нет аккаунта?</p>
        <Link to="/registration"   
          className="login-page__link">
          Создать
        </Link>
      </div>
      <Message/>
  </div>
  );
};

export default LoginPage;