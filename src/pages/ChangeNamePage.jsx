import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import GoBackButton from '../components/GoBackButton';
import Button from '../components/base/Button';
import Input from '../components/base/Input';
import Popup from '../components/Popup';
import { 
  updateProfileThunk,
  showUpdModal
 } from '../store/authSlice';


const ChangeNamePage = () => {
  const dispatch = useDispatch();
  const { updModal, updMessage: [mesTitle, mesText], user } = useSelector(state => state.auth)

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

    dispatch(updateProfileThunk(request, resetForm))
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
        (updModal) ? 
          <Popup title={mesTitle} set={mesText} actionCreator={showUpdModal}/> : 
          null
      }
    </form>  
  </div>  
  );
};

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