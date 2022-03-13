import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import NotFound from '../components/NotFound'
import GoBackButton from '../components/GoBackButton'
import CharacterCardList from '../components/cards/CharacterCardList'
import { IconCross } from '../icons'

import {
  getCharactersThunk,
  getCharactersByNameThunk,
  resetCharacters,
} from '../store/charactersSlice'

const CharactersSearchPage = () => {
  const textInput = useRef()
  const dispatch = useDispatch()
  const [searchQuery, setSerachQuery] = useState('')

  const { characters, error, filter } = useSelector(
    (state) => state.characters
  )

  useEffect(() => {
    textInput.current.focus()
    dispatch(getCharactersThunk({page: 1, filter}))
    return () => {
      dispatch(resetCharacters())
      dispatch(getCharactersThunk({page: 1, filter}))
    }
  }, [])

  const handleInput = (e) => {
    setSerachQuery(e.target.value)
    dispatch(getCharactersByNameThunk({ page: 1, filter, name: e.target.value }))
  }

  const content = error ? (
    <NotFound
      text={'Персонаж с таким именем не найден'}
      url={'no-character.png'}
    />
  ) : !characters ? (
    <Spinner />
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
          value={searchQuery}
        />
        <button
          className="filter__button"
          onClick={() => {
            setSerachQuery('')
            dispatch(getCharactersByNameThunk({ page: 1, filter, name: '' }))
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
