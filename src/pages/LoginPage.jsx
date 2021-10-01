import React from 'react';
import { useForm } from 'react-hook-form';
import { userLogin } from '../services/api';
import Input from '../components/base/Input';
import Button from '../components/base/Button';
import { IconUser, IconPassword, IconEye } from '../icons';
import { Link } from 'react-router-dom';
import Message from '../components/Message';

const LoginPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    const request = JSON.stringify(data);
    console.log(data)
    userLogin(request)
      .then(res => console.log(res))
      // .catch(error => console.log(error));
  }

  return (
    <div className="login-page">
      <div className="login-page__img">
        <img
          src="./assets/enter-page-img.svg"
          alt="rick and morty icon"
        />
      </div>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="login-page__form">
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
          Eye={IconEye}
          id="password"
          type="password"
          title="Пароль"
          register={register}
          errors={errors}
          pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
          message={"Поле должно содержать как минимум 8 символов, 1 латинскую букву и 1 цифру"}
        />
        <Button text="Войти" />
      </form>
      <div className="login-page__caption">
        <p className="login-page__text">У вас еще нет аккаунта?</p>
        <Link to="/registration"   
          className="login-page__link">
          Создать
        </Link>
      </div>
      {/* <Message/> */}
  </div>
  );
};

export default LoginPage;