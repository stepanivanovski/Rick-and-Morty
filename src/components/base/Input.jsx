import React from 'react';

const Input = ({ 
  LeftIcon, 
  title, 
  type, 
  id, 
  RightIcon, 
  options: {
    register, 
    errors, 
    message, 
    pattern
  },
  showPassword,
 }) => {

  const icon = LeftIcon ? 
    <LeftIcon className="input__icon"/> :
    null;

  const eye = RightIcon ? 
    <button 
      onClick={showPassword}
      className="input__btn">
        <RightIcon/>
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