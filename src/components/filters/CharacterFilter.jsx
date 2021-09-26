import React from 'react';

const CharacterFilter = () => {
  return (
    <div>
      <div className="filter__item">
        <p className="filter__item-title">Сортировать</p>
        <div className="filter__item-wrapper">
          <p className="filter__text">По алфавиту</p>
          <div className="filter__icons">
            <svg
              id="ASC"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 9C8 7.895 8.895 7 10 7L24 7C25.105 7 26 7.895 26 9C26 10.105 25.105 11 24 11L10 11C8.895 11 8 10.105 8 9Z"
                fill={'#828282'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00041 17C8.00041 15.895 8.89541 15 10.0004 15L18.3164 15C19.4214 15 20.3164 15.895 20.3164 17C20.3164 18.105 19.4214 19 18.3164 19L10.0004 19C8.89541 19 8.00041 18.105 8.00041 17Z"
                fill={'#828282'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99984 25C7.99984 23.895 8.89484 23 9.99984 23L12.6318 23C13.7368 23 14.6318 23.895 14.6318 25C14.6318 26.105 13.7368 27 12.6318 27L9.99984 27C8.89484 27 7.99984 26.105 7.99984 25Z"
                fill={'#828282'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              id="DESC"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 25C8 26.105 8.895 27 10 27L24 27C25.105 27 26 26.105 26 25C26 23.895 25.105 23 24 23L10 23C8.895 23 8 23.895 8 25Z"
                fill={'#828282'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00041 17C8.00041 18.105 8.89541 19 10.0004 19L18.3164 19C19.4214 19 20.3164 18.105 20.3164 17C20.3164 15.895 19.4214 15 18.3164 15L10.0004 15C8.89541 15 8.00041 15.895 8.00041 17Z"
                fill={'#828282'}
                stroke={'#828282'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99984 9C7.99984 10.105 8.89484 11 9.99984 11L12.6318 11C13.7368 11 14.6318 10.105 14.6318 9C14.6318 7.895 13.7368 7 12.6318 7L9.99984 7C8.89484 7 7.99984 7.895 7.99984 9Z"
                fill={'#828282'}
                stroke={'#828282'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr />
      <div className="filter__item">
        <p className="filter__item-title">Статус</p>
       
        <div className="check small-title">
          <input type="checkbox" id="alive"/>
          <label htmlFor="alive">Живой</label>
        </div>
        <div className="check small-title">
          <input type="checkbox" id="dead"/>
          <label htmlFor="dead">Мертвый</label>
        </div>
        <div className="check small-title">
          <input
            type="checkbox"
            id="unknown-alive"
          />
          <label htmlFor="unknown-alive">Неизвестно</label>
        </div>
        
      </div>
      <hr />
      <div className="filter__item">
        <p className="filter__item-title">Пол</p>

        <div className="check small-title">
          <input type="checkbox" id="male"/>
          <label htmlFor="male">Мужчина</label>
        </div>
        <div className="check small-title">
          <input type="checkbox" id="female"/>
          <label htmlFor="female">Женщина</label>
        </div>
        <div className="check small-title">
          <input
            type="checkbox"
            id="none-gender"
          />
          <label htmlFor="none-gender">Бесполый</label>
        </div>

       
      </div>  
    </div>
  );
};

export default CharacterFilter;