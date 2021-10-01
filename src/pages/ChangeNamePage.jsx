import React from 'react';
import { useForm } from 'react-hook-form';
import GoBackButton from '../components/GoBackButton';
import Button from '../components/base/Button';
import Input from '../components/base/Input';

const ChangeNamePage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    const request = JSON.stringify(data);
    console.log(data)
  }

  return (
    <div className="options options_name">
    <GoBackButton text="Настройки" className="options__arrow"/>
    <form 
      className="options__form"
      onSubmit={handleSubmit(onSubmit)}>
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
        <Button className="options__button" text="Сохранить"/>
    </form>  
  </div>
  );
};

export default ChangeNamePage;