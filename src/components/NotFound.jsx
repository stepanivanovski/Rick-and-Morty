import React from 'react';

const NotFound = ({url, text}) => {
  return (
    <div className="not-found">
      <img src={url} alt={text} />
      <p className="not-found__text">{text}</p>
    </div>
  );
};

export default NotFound;