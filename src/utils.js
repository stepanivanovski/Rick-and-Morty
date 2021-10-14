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

const toggleModal = (modal, setModal=()=>{}) => {
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

const showImg = (avatar) => {
  if (avatar === "null" || avatar === "undefined") {
    return "http://173.249.20.184:7001/images/Морти_Смит_001.jpg"
  } else {
    return avatar
  }
}

const getCharactersUrl = ({ gender, status }, nameFilter) => {
  const statusStr = "Status=0&Status=1&Status=2";
  const genderStr = "Gender=0&Gender=1&Gender=2";

  const genderArr= Object.values(gender).filter(item => item !== false);
  const statusArr = Object.values(status).filter(item => item !== false);

  const name = (nameFilter) ? `Name=${nameFilter}&` : "";
  const s = (statusArr.length === 0) ? statusStr : statusArr.join("&");
  const g = (genderArr.length === 0) ? genderStr : genderArr.join("&");

  return name + s + "&" + g
}

const getLocationsUrl = ({ type, measurement }, nameFilter) => {
  const name = (nameFilter) ? `Name=${nameFilter}&` : "";
  const m = (measurement) ? `&Measurements=${measurement}`:"";
  const t = (type) ? `Type=${type}`: "";
  
  return name + t + m
}

export {
  defineStatus,
  defineGender,
  defineStyle,
  convertDate,
  toggleModal,
  getCharactersUrl,
  getLocationsUrl,
  showImg
} 