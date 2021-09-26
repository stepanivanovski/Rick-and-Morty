import React from 'react';
const Input = ({ Icon, title, type, id, Eye}) => {
  const icon = Icon ? 
    <Icon className="input__icon"/> :
    null;

  const eye = Eye ? 
    <button className="input__btn"><Eye/></button> :
    null 

  return (
    <div className="input">
      <label htmlFor={id}>{title}</label>
      <div className="input__wrapper">
        <div className="input__icon-wrapper">
          {icon}
          <input type={type} id={id} placeholder={title}/>
        </div>
        {eye}
      </div>
    </div>
  );
};

export default Input;    