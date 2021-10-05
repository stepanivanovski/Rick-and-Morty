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

export {
  defineStatus,
  defineGender,
  defineStyle,
  convertDate,
  toggleModal
} 