import { IconMoreThen } from '../../icons'
import { defineStyle } from '../../utils'

const CharacterCard = ({
  species,
  id,
  status,
  gender,
  image,
  name,
  withArrow,
  onItemSelected,
  columnView = false,
}) => {
  const arrow = withArrow ? <IconMoreThen className="character__arrow" /> : null

  return (
    <li
      className={`character ${columnView === 'table' ? 'character_column' : ''}`}
      onClick={() => onItemSelected(id)}
    >
      <div
        className={`character__img ${
          columnView === 'table' ? 'character__img_column' : ''
        }`}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className={`character__text ${
          columnView === 'table' ? 'character__text_column' : ''
        }`}
      >
        <p className={defineStyle(status)}>{status}</p>
        <p className="character__title">{name}</p>
        <p className="character__descr">
          {species}, {gender}
        </p>
      </div>
      {arrow}
    </li>
  )
}

export default CharacterCard
