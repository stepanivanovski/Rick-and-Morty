import React from 'react';

const Input = ({ 
  Icon, 
  title, 
  type, 
  id, 
  Eye, 
  register, 
  errors, 
  message, 
  pattern,
  showPassword,
 }) => {

  const icon = Icon ? 
    <Icon className="input__icon"/> :
    null;

  const eye = Eye ? 
    <button 
      onClick={showPassword}
      className="input__btn">
        <Eye/>
    </button> :
    null 

  return (
    <>
      <div className="input">
        <label htmlFor={id}>{title}</label>
        <div className="input__wrapper">
          <div className="input__icon-wrapper">
            {icon}
            <input 
              type={type} 
              {...register(id, 
                {
                  required: "Поле должно быть заполнено",
                  pattern: {
                    value: pattern,
                    message: message,
                  } 
                }
              )} 
              id={id} 
              placeholder={title}/>
          </div>
          {eye}
        </div>
      </div>
      {errors[id] && <p className="input__error">{errors[id].message}</p>}
    </>
  );
};

export default Input;    