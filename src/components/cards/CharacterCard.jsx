import { IconMoreThen } from "../../icons";

const CharacterCard = ({ status, withArrow }) => {
  const style = `character__status  ${status ? "character__status_green" : "character__status_red" }`;
  const arrow = withArrow ? <IconMoreThen className="character__arrow"/> : null;

  return (
    <li className="character">
      <div className="character__img" style={{ backgroundImage: `url("http://173.249.20.184:7001/images/%D0%A0%D0%B8%D0%BA_%D0%A1%D0%B0%D0%BD%D1%87%D0%B5%D0%B7_001.jpg")` }} />
      <div className="character__text">
        <p className={style}>Живой</p>
        <p className="character__title">Рик Санчез</p>
        <p className="character__descr">Человек, Мужской</p>
      </div>
      {arrow}
    </li>
  );
}

export default CharacterCard
