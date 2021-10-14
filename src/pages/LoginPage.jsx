import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Input from '../components/base/Input';
import Button from '../components/base/Button';
import { IconUser, IconPassword, IconEye } from '../icons';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';
import { 
  userLoginThunk,
  showLoginModal
 } from '../store/authSlice';


const LoginPage = () => {
  const { register, handleSubmit, formState: {errors}, reset, watch } = useForm();
  const watchLogin = watch("userName");

  const history = useHistory();
  const [ visibility, changeVisibility] = useState(false);

  const dispatch = useDispatch();
  const { loginModal, loginMessage } = useSelector(state => state.auth)

  const showPassword = (e) => {
    e.preventDefault();
    changeVisibility(!visibility)
  }

  const resetForm = () => {
    reset({
      userName:"",
      password:""
    })
  }

  const onSubmit = (data) => {
    const request = JSON.stringify(data);
    dispatch(userLoginThunk(request, history, resetForm, watchLogin));
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
          LeftIcon={IconUser}
          id="userName"
          type="text"
          title="Логин"
          options = {{
            register, 
            errors, 
            pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            message: "Поле должно сожержать коректный e-mail"
          }}
        />
        <Input
          LeftIcon={IconPassword}
          RightIcon={IconEye}
          showPassword={showPassword}
          state={visibility}
          id="password"
          type={(!visibility) ? "password" : "text"}
          title="Пароль"
          options = {{
            register, 
            errors, 
            pattern: /./,
            message: "Поле должно содержать как минимум 8 символов, 1 латинскую букву и 1 цифру"
          }}
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
        (loginModal) ? 
          <Popup title={"Ошибка"} set={loginMessage} actionCreator={showLoginModal}/> : 
          null
      }
  </div>
  );
};

export default LoginPage;