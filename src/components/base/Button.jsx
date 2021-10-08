import React from 'react';

const Button = ({text, className='', onModal=()=>{}}) => {
  const classes = `btn ${className}`

  return (
    <button
      onClick={onModal}
      className={classes}>
        {text}
    </button>
  );
};

export default Button;
