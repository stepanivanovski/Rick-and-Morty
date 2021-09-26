import React from 'react';

const SearchPanel = ({filter}) => {
  return (
    <div className="search-panel">
       <svg
          className="search-panel__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1931 5.58187C16.5249 7.91369 16.5249 11.6943 14.1931 14.0261C11.8613 16.358 8.08065 16.358 5.74883 14.0261C3.41701 11.6943 3.41701 7.91369 5.74883 5.58187C8.08065 3.25005 11.8613 3.25005 14.1931 5.58187"
            stroke="#5B6975"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.15 14.0601L20 19.9901"
            stroke="#5B6975"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      <input
        type="text"
        placeholder="Найти персонажа"/>
      {(filter) ? 
        <>
          <div className="search-panel__divider" />
          <svg
            className="search-panel__filter"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 10.5L16.707 5.293C16.895 5.105 17 4.851 17 4.586V2C17 1.448 16.552 1 16 1H2C1.448 1 1 1.448 1 2V4.586C1 4.851 1.105 5.106 1.293 5.293L6.5 10.5"
              stroke="#5B6975"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 10.5V16.749C6.5 17.562 7.264 18.159 8.053 17.962L10.553 17.337C11.109 17.198 11.5 16.698 11.5 16.124V10.5"
              stroke="#5B6975"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </> : null
      }
    </div>
  );
};

export default SearchPanel;