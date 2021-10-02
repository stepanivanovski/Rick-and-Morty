import React from 'react';

const NotFound = ({url, text}) => {

  return (
    <div className="not-found">
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/'+ url} alt={text} />
        <p className="not-found__text">{text}</p>
      </div>
    </div>
  );
};

export default NotFound;