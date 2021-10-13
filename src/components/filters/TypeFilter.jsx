import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoBackButton from '../GoBackButton';
import {
  setType,
  setMeasurement,
  resetLocations
} from "../../store/locationsSlice";

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
      <label className="filter__option-label"htmlFor={Id}>{label}</label>
    </div> 
  )
}

const TypeFilter = ({ id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const {type, measurement} = useSelector(state => state.locations);

  const data = (id === "type")? types : (id === "measurement")? measurements : [];

  useEffect(() => {
    dispatch(resetLocations())
  }, [])

  const handleInput = (e) => {
    if (id === "type") {
      dispatch(setType(e.target.value))
    } else if (id === "measurement") {
      dispatch(setMeasurement(e.target.value))
    }
  }

  return (
    <div className="filter">
      <div className="filter__header">
        <GoBackButton text="Выберите тип" className="filter__goBack"/>
      </div>
      <div className="filter__type-title">
        {((id === "type")? type : (id === "measurement")? measurement : null) || "Не выбрано"}          
      </div>         
      <hr/>
      {data.map((item, i) => 
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