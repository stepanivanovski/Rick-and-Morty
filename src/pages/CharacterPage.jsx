import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Spinner from '../components/Spinner'
import NotFound from '../components/NotFound'
// import EpisodeCardList from '../components/cards/EpisodeCardList'
import GoBackButton from '../components/GoBackButton'
import { IconMoreThen } from '../icons'
import { defineGender, defineStatus, defineStyle } from '../utils'
import { resetCharacter, getCharacterByIdThunk } from '../store/charactersSlice'

const CharacterPage = ({ id }) => {
  const history = useHistory()

  const dispatch = useDispatch()
  const { error, character } = useSelector((state) => state.characters)

  useEffect(() => {
    dispatch(getCharacterByIdThunk(id))

    return () => {
      dispatch(resetCharacter())
    }
  }, [])

  const content = !character?.name ? (
    <Spinner />
  ) : error ? (
    <NotFound text="Упс, что-то пошло не так" url="not-found.png" />
  ) : (
    <View character={character} history={history} />
  )

  return (
    <div className="char-page">
      <div className="char-page__header">
        <div className="char-page__header-img">
          {character?.name ? (
            <img src={character?.image} alt={character?.fullname} />
          ) : null}
        </div>
        <GoBackButton className="char-page__goBack" />
        {character?.fullName ? (
          <div
            className="char-page__avatar"
            style={{ backgroundImage: `url(${character?.image})` }}
          ></div>
        ) : null}
      </div>
      {content}
    </div>
  )
}

const View = ({ character, history }) => {
  const {
    name,
    status,
    gender,
    species,
    about,
    // episodes,
    origin,
    location,
  } = character
  return (
    <div className="container">
      <h1 className="char-page__title">{name}</h1>
      <div className={`character__status_center ${defineStyle(status)}`}>
        {defineStatus(status)}
      </div>
      <p className="char-page__descr text_main-13px">{about}</p>
      <div className="char-page__wrapper">
        <div>
          <div className="text_second-12px">Пол</div>
          <div className="text_main-14px">{defineGender(gender)}</div>
        </div>
        <div>
          <div className="text_second-12px">Расса</div>
          <div className="text_main-14px">{species}</div>
        </div>
      </div>
      <div
        onClick={() => history.push(`/locations/${origin?.id}`)}
        className="item-link item-link_mb-24"
      >
        <div>
          <div className="text_second-12px">Место рождения</div>
          <div className="text_main-14px">
            {origin?.name || 'нет данных'}
          </div>
        </div>
        <IconMoreThen className="item-link__svg" />
      </div>
      <div
        onClick={() => history.push(`/locations/${location?.id}`)}
        className="item-link item-link_mb-24"
      >
        <div>
          <div className="text_second-12px">Местоположение</div>
          <div className="text_main-14px">{location?.name || 'нет данных'}</div>
        </div>
        <IconMoreThen className="item-link__svg" />
      </div>
      {/* <hr />
      <div className="char-page__subtitle-wrapper">
        <h3 className="text_main-20px">Эпизоды</h3>
        <div className="text_second-12px">Все эпизоды</div>
      </div> */}
      {/* <EpisodeCardList data={episode} withArrow /> */}
    </div>
  )
}

export default CharacterPage
