import React from 'react';
import Input from '../components/base/Input';
import Button from '../components/base/Button';
import GoBackButton from '../components/GoBackButton';
import { IconUser, IconPassword } from '../icons';
import Message from '../components/Message';
  
const RegistrationPage = () => {
  return (
    <div className="registration">
      <GoBackButton/>
      <h2 className="registration__title">Создать аккаунт</h2>
      <form className="registration__form">
        <Input
            id="text"
            type="text"
            title="Имя"
          />
        <Input
          id="text"
          type="text"
          title="Фамилия"
        />
        <Input
          id="text"
          type="text"
          title="Отчество"
        />
        <hr/>
        <Input
          Icon={IconUser}
          id="text"
          type="text"
          title="Логин"
        />
        <Input
          Icon={IconPassword}
          id="password"
          type="password"
          title="Пароль"
        />
        <Button text="Войти" />
      </form>
    </div>
  );
};

export default RegistrationPage;