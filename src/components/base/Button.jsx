import React from 'react';

const Button = ({text, className=''}) => {
  const classes = `btn ${className}`

  return (
    <button className={classes}>{text}</button>
  );
};

export default Button;
