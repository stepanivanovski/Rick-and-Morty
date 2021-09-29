import React from 'react';
import GoBackButton from '../GoBackButton';

const types = [
  'Мир',
  'Планета',
  'Микровселенная',
  'Цитадель',
  'Созданная реальность',
  'Здание',
  'Неопределенно',
];

const measurements = [
  'Измерение 35-C',
  'Измерение C-137',
  'Измерение C-500A',
  'Измерение J19ζ7',
  'Измерение Дупиду',
  'Измерение подмены',
];

const InputRadio = ({ label, id, handleInput, className }) => {
  const Id = `filter-${id}`;

  return (
    <div className={className}>
      <input 
        onChange={handleInput} 
        type="radio" 
        id={Id} 
        name="filter" 
        value={label}
      />
      <label htmlFor={Id}>{label}</label>
    </div> 
  )
}

const TypeFilter = ({ type }) => {

  const handleInput = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="filter">
      <div className="filter__header">
        <GoBackButton text="Выберите тип" className="filter__goBack"/>
      </div>
      <InputRadio 
          className="filter__type-title"
          label="Не выбрано" 
          id="filter-no" 
          handleInput={handleInput}/>
      <hr/>
      {types.map((item, i) => 
        <InputRadio
          className="filter__radio-wrap" 
          label={item} 
          key={i} 
          id={i} 
          handleInput={handleInput}/>)}
    </div>
  );
};

export default TypeFilter;