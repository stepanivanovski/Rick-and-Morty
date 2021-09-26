import React from 'react';
import { IconArrow } from '../icons/';


const GoBackButton = ({ text, fill="#fff" }) => {
  const content = text ? <h2 className="goBack__title">{text}</h2> : null
  return (
    <div className="goBack">
      <button>
        <IconArrow fill={fill}/>
      </button>
      { content }
    </div>
  );
};

export default GoBackButton;