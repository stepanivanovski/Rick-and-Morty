import React from 'react';
import { IconCharacters } from '../icons';
const NavBar = () => {
  return (
    <ul className="navbar">
      <li>
          <div className="navbar__item">
            <IconCharacters color={"#22A2BD"}/>
            <div className="navbar__item-title">Персонажи</div>
          </div>

      </li>
      <li>

          <div className="navbar__item">
            <IconCharacters color={"#BDBDBD"}/>
            <div className="navbar__item-title">Локации</div>
          </div>

      </li>
      <li>
          <div className="navbar__item">
            <IconCharacters color={"#BDBDBD"}/>
            <div className="navbar__item-title">Персонажи</div>
          </div>
      </li>
      <li>

          <div className="navbar__item">
            <IconCharacters color={"#BDBDBD"}/>
            <div className="navbar__item-title">Персонажи</div>
          </div>

      </li>
    </ul>
  );
};

export default NavBar;