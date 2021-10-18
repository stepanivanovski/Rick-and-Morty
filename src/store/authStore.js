import { makeAutoObservable } from 'mobx';
import { getProfile, userLogin, createProfile, updateProfile, updateAvatar } from '../services/api';
import { toggleModal } from '../utils';

const configSessionStorage = (name, id, avatar) => {
  sessionStorage.setItem("fullName", name);

  if (id) {
    sessionStorage.setItem("userId", id)
  }

  sessionStorage.setItem("avatar", avatar)
}

class AuthStore {
  isAuth = true;
  user = {};
  loginModal = false;
  loginMessage = "";
  registrationModal = false;
  registrationMessage = [];
  updateModal = false;
  updateMessage = [];

  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth = ( isAuth ) => {
    this.isAuth = isAuth;
    sessionStorage.setItem('isAuth', true)
  }

  setUser = (userObject) => {
    this.user = userObject;
    const { fullName, avatar, id } = userObject;

    configSessionStorage(fullName, id, avatar); 
  }

  showLoginModal = (message) => {
    this.loginMessage = message 
    toggleModal(this.loginModal)
    this.loginModal = !this.loginModal
  }

  showRegistrationModal = (message) => {
    this.registrationMessage = message
    toggleModal(this.registrationModal)
    this.registrationModal = !this.regModal
  }

  showUpdateModal = (message) => {
    this.updateMessage = message
    toggleModal(this.updateModal)
    this.updateModal = !this.updateModal
  }

  updateUser = (updatedUserObject) => {
    const {
      firstName,
      lastName,
      patronymic
    } = updatedUserObject;

    this.user = {
      ...this.user,
      firstName,
      lastName,
      patronymic,
      fullName: `${firstName} ${lastName} ${patronymic}`
    }
    
    configSessionStorage(this.user.fullName); 
  }

  loginUser = async (body, history, reset, watch) =>  {
    userLogin(body)
    .then(res => {
      this.setIsAuth(true)
      history.push('./characters')
      sessionStorage.setItem('login', watch)
      this.getProfile(watch)
    })
    .catch(error => {
      const status = error.message.slice(-3);
      console.error(error);
      if( status === "403" || status === "404" ) {
        this.showLoginModal("Неверный логин или пароль")
      } else {
        this.showLoginModal("Что-то пошло не так, пожалуйста проверьте подключение к интернету")
      }
    })
    .finally(
      reset()
    );
  }

  createProfile = async (body, reset) => {
    createProfile(body)
    .then(res => {
      console.log(res)
      this.showRegistrationModal(["Успех", "Регистрация прошла успешно"])
    })
    .catch(error => {
      console.error(error);
        this.showRegistrationModal(["Ошибка", "Что-то пошло не так, пожалуйста попробуйте позже"])
    })
    .finally(
      reset()
    );
  }

  updateProfile = async (body, reset) =>  {
    updateProfile(JSON.stringify(body))
    .then(res => {
      this.updateUser(body)
      this.showUpdateModal(["Успех", "Обновление прошло успешно"]);
    })
    .catch(error => {
      console.dir(error);
      this.showUpdateModal(["Ошибка", "Что-то пошло не так, пожалуйста попробуйте позже"])
    })
    .finally(
      reset()
    );
  }

  getProfile = async (id) => {
    getProfile(id)
    .then(res => {
      this.setUser(res)
    })
    .catch(error => {
      console.log("Error in getProfileThunk");
    });
  }
  
  updateAvatar = async (body) => {
    console.log('Загрузка');
    updateAvatar(body)
    .then(res => {
      console.log("Все ок");
      // sessionStorage.setItem("avatar", body)
      console.log(res);
  
      // dispatch(setUser(res))
    })
    .catch(error => {
      console.log("Error in getProfileThunk");
    })
    .finally(
      console.log("Конуц")
    )
  }
}

export default new AuthStore();
