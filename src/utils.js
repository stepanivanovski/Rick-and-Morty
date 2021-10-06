import { getLocations } from "./services/api/locations.api";
import { getCharacters } from "./services/api/characters.api";

const defineStatus = (status) => {
  return (status === 0) ? "Живой" : "Мертвый"
};

const defineGender = (gender) => {
 return (
   (gender === 0) ? "Мужской" : (gender === 1) ? "Женский" : "Неопределенно"
 )  
}

const defineStyle = (status) => {
  return`character__status  ${!status ? "character__status_green" : "character__status_red" }`
} ;

const convertDate = (premiere) => {
  const date = new Date(premiere);
  const months = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
  ];

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

const toggleModal = (modal, setModal) => {
  const setHidden = () => {
    if (!modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  setModal(!modal);
  setHidden(modal)
}

const getUrl = ({ gender, status }) => {
  const statusStr = "Status=0&Status=1&Status=2";
  const genderStr = "Gender=0&Gender=1&Gender=2";

  const genderArr= Object.values(gender).filter(item => item !== false);
  const statusArr = Object.values(status).filter(item => item !== false);

  const s = (statusArr.length === 0) ? statusStr : statusArr.join("&");
  const g = (genderArr.length === 0) ? genderStr : genderArr.join("&");

  return s + "&" + g
}

const configureData = (data, options) => {
  const sortDataByName = () => {

    if (data.legth === 0 || !Array.isArray(data)) {
      console.log("Error in sortDataByName");
      return [];
    }
  
    return data.sort((a, b) => {
      let nameA = a["fullName"].trim();
      let nameB = b["fullName"].trim();
      if (options === "abc") {
        if (nameA > nameB) return 1;
        if (nameB > nameA) return -1;
      } else {
        if (nameA > nameB) return -1;
        if (nameB > nameA) return 1;
      }
      return 0;
    })
  }

  if (options) {
    sortDataByName()
  }

  return data;
}

export {
  defineStatus,
  defineGender,
  defineStyle,
  convertDate,
  toggleModal,
  getUrl,
  configureData
} 