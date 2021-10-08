import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { userLogin } from '../services/api';
import Input from '../components/base/Input';
import Button from '../components/base/Button';
import { IconUser, IconPassword, IconEye } from '../icons';
import { Link } from 'react-router-dom';
import LoginPopup from '../components/LoginPopup';
import { toggleModal } from '../utils';
import { setIsAuth } from '../store/authSlice';


const LoginPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const [ visibility, changeVisibility] = useState(false);
  const [ modal, setModal ] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();

  const showPassword = (e) => {
    e.preventDefault();
    changeVisibility(!visibility)
  }

  const onSubmit = (data) => {
    const request = JSON.stringify(data);
    userLogin(request)
      .then(res => {
        dispatch(setIsAuth(true))
        history.push('./characters')
        console.log(res)
      })
      .catch(error => {
        if(error.message === "User is not found") {
          console.dir(error);
          toggleModal(modal, setModal)
        }
      }
    );
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
          showPassword={showPassword}
          state={visibility}
          id="password"
          type={(!visibility) ? "password" : "text"}
          title="Пароль"
          register={register}
          errors={errors}
          pattern={/./}
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
      {
        (modal) ? 
          <LoginPopup modal={modal} setModal={setModal} set="Неверный логин или пароль"/> : 
          null
      }
  </div>
  );
};

export default LoginPage;