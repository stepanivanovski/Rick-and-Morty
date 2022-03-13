import { useSelector, useDispatch } from 'react-redux'
import GoBackButton from '../GoBackButton'
import { IconABC, IconCBA, IconRedFilter } from '../../icons'
import {
  toggleStatus,
  toggleGender,
  resetCharactersFilter,
  setAlphabetFilter,
  resetCharacters,
} from '../../store/charactersSlice'

const CharacterFilter = () => {
  const dispatch = useDispatch()

  const { isFilterOn, alphabetFilterState, filter } = useSelector(
    (state) => state.characters
  )

  const handleChange = (event) => {
    dispatch(resetCharacters())

    const target = event.target

    if (target.name === 'gender') {
      dispatch(toggleGender(target.value))
    } else {
      dispatch(toggleStatus(target.value))
    }
  }

  return (
    <div className="filter">
      <div className="filter__header">
        <GoBackButton text="Выберите тип" className="filter__goBack" />
        {isFilterOn ? (
          <button
            onClick={() => dispatch(resetCharactersFilter())}
            className="filter__button"
          >
            <IconRedFilter />
          </button>
        ) : null}
      </div>
      <div className="filter__item container">
        <p className="filter__item-title text_caption">Сортировать</p>
        <div className="filter__item-wrapper">
          <p className="filter__text text_main-16px">По алфавиту</p>
          <div className="filter__icons">
            <button
              onClick={() => dispatch(setAlphabetFilter('abc'))}
              className="filter__button"
            >
              <IconABC
                className={
                  alphabetFilterState === 'abc' ? 'filter__active-icon' : ''
                }
              />
            </button>
            <button
              onClick={() => dispatch(setAlphabetFilter('cba'))}
              className="filter__button"
            >
              <IconCBA
                className={
                  alphabetFilterState === 'cba' ? 'filter__active-icon' : ''
                }
              />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="filter__item container">
        <p className="filter__item-title text_caption">Статус</p>
        <select name="status" value={filter.status} onChange={handleChange}>
          <option value="" disabled>Выберите из списка</option>
          <option value="alive">Живой</option>
          <option value="dead">Мертвый</option>
          <option value="unknown">Неизвестно</option>
        </select>
      </div>
      <hr />
      <div className="filter__item container">
        <p className="filter__item-title text_caption">Пол</p>
        <select name="gender" value={filter.gender} onChange={handleChange}>
          <option value="" disabled>Выберите из списка</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
          <option value="genderless">Бесполый</option>
          <option value="unknown">Неизвестно</option>
        </select>
      </div>
      <hr />
    </div>
  )
}

export default CharacterFilter
