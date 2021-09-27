import React from 'react';
import GoBackButton from '../components/GoBackButton';
import Button from '../components/base/Button';
import Input from '../components/base/Input';

const ChangeNamePage = () => {
  return (
    <div className="options options_name">
    <GoBackButton text="Настройки"/>
    <form className="options__form">
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
        <Button className="options__button" text="Сохранить"/>
    </form>  
  </div>
  );
};

export default ChangeNamePage;