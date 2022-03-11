import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import NotFound from '../components/NotFound'
import GoBackButton from '../components/GoBackButton'
import EpisodeCardList from '../components/cards/EpisodeCardList'
import { IconCross } from '../icons'
import { getEpisodeByNameThunk, onLoading } from '../store/episodesSlice'

const LocationsSearchPage = () => {
  const textInput = useRef()
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const { episodes, error, loading } = useSelector((state) => state.episodes)

  useEffect(() => {
    textInput.current.focus()
    return () => dispatch(onLoading())
  }, [])

  const handleInput = (e) => {
    setInputValue(e.target.value)
    dispatch(getEpisodeByNameThunk(e.target.value))
  }

  const content = loading ? (
    <Spinner />
  ) : error ? (
    <NotFound text="Упс, что-то пошло не так" url="not-found.png" />
  ) : episodes.length === 0 ? (
    <NotFound text={'Эпизода с таким названием нет'} url={'no-episode.png'} />
  ) : (
    <EpisodeCardList data={episodes} />
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
            dispatch(getEpisodeByNameThunk())
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

export default LocationsSearchPage
