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


export {
  defineStatus,
  defineGender,
  defineStyle
} 