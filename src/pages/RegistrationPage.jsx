import React from 'react';
import { useForm } from 'react-hook-form';
import { observer } from "mobx-react-lite";
import Input from '../components/base/Input';
import Button from '../components/base/Button';
import GoBackButton from '../components/GoBackButton';
import { IconUser, IconPassword } from '../icons';
import Popup from '../components/Popup';
import authStore from '../store/authStore';

  
const RegistrationPage = observer(() => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm();

  const { 
    registrationModal,
    createProfile,
    showRegistrationModal, 
    registrationMessage: [mesTitle, mesText] 
  } = authStore

  const resetForm = () => {
    reset({
      userName:"",
      password:"",
      firstName:"",
      lastName:"",
      patronymic:""
    })
  }

  const onSubmit = (data) => {
    console.log(data)
    const request = JSON.stringify(data);
    createProfile(request, resetForm);
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
            options = {{
              register, 
              errors, 
              pattern: /^([а-яё]+|[a-z]+)$/i,
              message: "Поле должно сожержать только буквы"
            }}
          />
        <Input
          id="lastName"
          type="text"
          title="Фамилия"
          options = {{
            register, 
            errors, 
            pattern: /^([а-яё]+|[a-z]+)$/i,
            message: "Поле должно сожержать только буквы"
          }}
        />
        <Input
          id="patronymic"
          type="text"
          title="Отчество"
          options = {{
            register, 
            errors, 
            pattern: /^([а-яё]+|[a-z]+)$/i,
            message: "Поле должно сожержать только буквы"
          }}
        />
        <hr/>
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
          id="password"
          type="text"
          title="Пароль"
          options = {{
            register, 
            errors, 
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "Поле должно содержать как минимум 8 символов, 1 латинскую букву и 1 цифру"
          }}
        />
        <Button text="Отправить" />
      </form>
      {
        (registrationModal) ? 
          <Popup title={mesTitle} set={mesText} actionCreator={showRegistrationModal}/> : 
          null
      }
    </div>
  );
});

export default RegistrationPage;