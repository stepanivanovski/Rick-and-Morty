import React from 'react';
import { IconArrow } from '../icons/';


const GoBackButton = ({ text, className }) => {
  const content = text ? <h2 className="goBack__title">{text}</h2> : null
  
  return (
    <div className="goBack">
      <button>
        <IconArrow className={className}/>
      </button>
      { content }
    </div>
  );
};

export default GoBackButton;