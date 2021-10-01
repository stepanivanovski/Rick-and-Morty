import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/base/Input';
import Button from '../components/base/Button';
import GoBackButton from '../components/GoBackButton';
import { IconUser, IconPassword } from '../icons';
  
const RegistrationPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    const request = JSON.stringify(data);
    console.log(data)
  }

  return (
    <div className="registration container">
      <GoBackButton className="filter__goBack"/>
      <h2 className="registration__title">Создать аккаунт</h2>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="registration__form">
        <Input
            id="firstName"
            type="text"
            title="Имя"
            register={register}
            errors={errors}
            pattern={/^([а-яё]+|[a-z]+)$/i}
            message={"Поле должно сожержать только буквы"}
          />
        <Input
          id="lastName"
          type="text"
          title="Фамилия"
          register={register}
          errors={errors}
          pattern={/^([а-яё]+|[a-z]+)$/i}
          message={"Поле должно сожержать только буквы"}
        />
        <Input
          id="patronymic"
          type="text"
          title="Отчество"
          register={register}
          errors={errors}
          pattern={/^([а-яё]+|[a-z]+)$/i}
          message={"Поле должно сожержать только буквы"}
        />
        <hr/>
        <Input
          Icon={IconUser}
          id="userName"
          type="text"
          title="Логин"
          register={register}
          errors={errors}
          pattern={/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/}
          message={"Поле должно сожержать коректный e-mail"}
        />
        <Input
          Icon={IconPassword}
          id="password"
          type="text"
          title="Пароль"
          register={register}
          errors={errors}
          pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
          message={"Поле должно содержать как минимум 8 символов, 1 латинскую букву и 1 цифру"}
        />
        <Button text="Войти" />
      </form>
    </div>
  );
};

export default RegistrationPage;