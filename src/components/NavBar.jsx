import {
  IconCharacters,
  IconLocations,
  IconEpisodes
} from '../icons'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/characters" activeClassName="navbar__active">
          <div className="navbar__item">
            <IconCharacters className="navbar__char-icon" />
            <div className="navbar__item-title">Персонажи</div>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/locations" activeClassName="navbar__active">
          <div className="navbar__item">
            <IconLocations className="navbar__icon" />
            <div className="navbar__item-title">Локации</div>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/episodes" activeClassName="navbar__active">
          <div className="navbar__item">
            <IconEpisodes className="navbar__icon" />
            <div className="navbar__item-title">Эпизоды</div>
          </div>
        </NavLink>
      </li>
    </ul>
  )
}

export default NavBar
