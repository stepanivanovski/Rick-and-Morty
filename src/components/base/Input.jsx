import React from 'react';
  
const Input = ({title, type, name}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{title}</label>
      <input type={type} id={name} placeholder={title}/>
    </div>
  );
};

export default Input;   