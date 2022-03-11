import { IconMoreThen } from '../../icons'
import { defineGender, defineStatus, defineStyle } from '../../utils'

const CharacterCard = ({
  race,
  id,
  status,
  gender,
  imageName,
  fullName,
  withArrow,
  onItemSelected,
  columnView = false,
}) => {
  const arrow = withArrow ? <IconMoreThen className="character__arrow" /> : null

  return (
    <li
      className={`character ${columnView ? 'character_column' : ''}`}
      onClick={() => onItemSelected(id)}
    >
      <div
        className={`character__img ${
          columnView ? 'character__img_column' : ''
        }`}
        style={{ backgroundImage: `url(${imageName})` }}
      />
      <div
        className={`character__text ${
          columnView ? 'character__text_column' : ''
        }`}
      >
        <p className={defineStyle(status)}>{defineStatus(status)}</p>
        <p className="character__title">{fullName}</p>
        <p className="character__descr">
          {race}, {defineGender(gender)}
        </p>
      </div>
      {arrow}
    </li>
  )
}

export default CharacterCard
