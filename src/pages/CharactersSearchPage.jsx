import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import NotFound from '../components/NotFound'
import GoBackButton from '../components/GoBackButton'
import CharacterCardList from '../components/cards/CharacterCardList'
import { IconCross } from '../icons'

import {
  getFilteredCharactersThunk,
  getCharactersThunk,
  resetCharacters,
} from '../store/charactersSlice'

const CharactersSearchPage = () => {
  const textInput = useRef()
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const { characters, error, checkbox, filterState } = useSelector(
    (state) => state.characters
  )

  useEffect(() => {
    textInput.current.focus()
    return () => {
      dispatch(resetCharacters())

      if (!filterState) {
        console.log(1)
        dispatch(getCharactersThunk(1))
      } else {
        console.log(2)
        dispatch(getFilteredCharactersThunk(checkbox))
      }
    }
  }, [])

  const handleInput = (e) => {
    setInputValue(e.target.value)
    dispatch(getFilteredCharactersThunk(checkbox, e.target.value))
  }

  const content = !characters ? (
    <Spinner />
  ) : error ? (
    <NotFound text="Упс, что-то пошло не так" url="not-found.png" />
  ) : characters?.length === 0 ? (
    <NotFound
      text={'Персонаж с таким именем не найден'}
      url={'no-character.png'}
    />
  ) : (
    <CharacterCardList data={characters} />
  )

  return (
    <div className="filter search">
      <div className="search__header">
        <GoBackButton className="filter__goBack" />
        <input
          onChange={handleInput}
          ref={textInput}
          className="search__input"
          type="text"
          value={inputValue}
        />
        <button
          className="filter__button"
          onClick={() => {
            setInputValue('')
            dispatch(getFilteredCharactersThunk(checkbox))
          }}
        >
          <IconCross className="filter__goBack" />
        </button>
      </div>
      <p className="search__title text_caption">Результаты поиска</p>
      <div className="container">{content}</div>
    </div>
  )
}

export default CharactersSearchPage
