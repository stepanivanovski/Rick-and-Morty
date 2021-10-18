import React from 'react';
import { useForm } from 'react-hook-form';
import { observer } from "mobx-react-lite";
import GoBackButton from '../components/GoBackButton';
import Button from '../components/base/Button';
import Input from '../components/base/Input';
import Popup from '../components/Popup';
import authStore from '../store/authStore';


const ChangeNamePage = observer(() => {
  const { 
    updateModal, 
    updateMessage: [mesTitle, mesText], 
    user,
    updateProfile,
    showUpdateModal 
  } = authStore

  const defaultValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    patronymic: user.patronymic
  }

  const { 
    register, 
    handleSubmit, 
    formState: {errors}, 
    reset 
  } = useForm({ defaultValues });


  const userId = sessionStorage.getItem("userId")

  const onSubmit = (data) => {
    const request = {
      ...data,
      userId
    }

    updateProfile(request, resetForm)
  }

  const resetForm = () => {
    reset({
      firstName:"",
      lastName:"",
      patronymic:"",
    })
  } 

  return (
    <div className="options options_name container">
    <GoBackButton text="Изменить ФИО" className="options__arrow"/>
    <form 
      className="options__form"
      onSubmit={handleSubmit(onSubmit)}>
      <NameInputs register={register} errors={errors} user={user}/>
      <Button className="options__button" text="Сохранить"/>
      {
        (updateModal) ? 
          <Popup title={mesTitle} set={mesText} actionCreator={showUpdateModal}/> : 
          null
      }
    </form>  
  </div>  
  );
});

const NameInputs = ({ register, errors, user: { firstName, lastName, patronymic } }) => {
  return (
    <>
      <Input
        id="firstName"
        type="text"
        title="Имя"
        value={firstName}
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
        value={lastName}
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
        value={patronymic}
        options = {{
          register, 
          errors, 
          pattern: /^([а-яё]+|[a-z]+)$/i,
          message: "Поле должно сожержать только буквы"
        }}
      />
    </>
  )
} 

// const LoginInput = ({ register, errors }) => {
//   return (
//     <Input
//       id="userId"
//       type="text"
//       title="Логин"
//       register={register}
//       errors={errors}
//       pattern={/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/}
//       message={"Поле должно сожержать коректный e-mail"}
//     />
//   )
// } 

export default ChangeNamePage;