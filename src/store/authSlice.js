import { createSlice } from '@reduxjs/toolkit';
import { getProfile, userLogin, createProfile, updateProfile } from '../services/api';
import { toggleModal } from '../utils';

const configSessionStorage = (name, id, avatar) => {
  console.log(id);
  sessionStorage.setItem("fullName", name)
  sessionStorage.setItem("avatar", avatar)
  sessionStorage.setItem("userId", id)
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: true,
    user: {},
    loginModal:false,
    loginMessage: "",
    regModal:false,
    regMessage: [],
    updModal:false,
    updMessage: []
  },
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
      sessionStorage.setItem('isAuth', true)
    },
    setUser(state, action) {
      state.user = action.payload;
      const { fullName, avatar, id } = action.payload;

      configSessionStorage(fullName, id, avatar); 
    },
    showLoginModal(state, action) {
      state.loginMessage = action.payload
      toggleModal(state.loginModal)
      state.loginModal = !state.loginModal
    },
    showRegModal(state, action) {
      state.regMessage = action.payload
      toggleModal(state.regModal)
      state.regModal = !state.regModal
    },
    showUpdModal(state, action) {
      state.updMessage = action.payload
      toggleModal(state.updModal)
      state.updModal = !state.updModal
    },
    updateUser(state, action) {
      const {
        userId,
        firstName,
        lastName,
        patronymic
      } = action.payload;

      state.user.id = userId;
      state.user.firstName = firstName;
      state.user.lastName = lastName;
      state.user.patronymic = patronymic;  
      state.user.fullName = `${firstName} ${lastName} ${patronymic}`;

      configSessionStorage(state.user.fullName, userId, state.user.avatar); 
    }
  }
});


export const userLoginThunk = (body, history, reset, watch) => (dispatch) => {
  userLogin(body)
  .then(res => {
    dispatch(setIsAuth(true))
    history.push('./characters')
    sessionStorage.setItem('login', watch)
    dispatch(getProfileThunk(watch))
  })
  .catch(error => {
    if(error.message === "User is not found") {
      console.dir(error);
      dispatch(showLoginModal("Неверный логин или пароль"))
    } else {
      dispatch(showLoginModal("Что-то пошло не так, пожалуйста проверьте подключение к интернету"))
    }
  })
  .finally(
    reset()
  );
}

export const createProfileThunk = (body, reset) => (dispatch) => {
  createProfile(body)
  .then(res => {
    console.log(res)
    dispatch(showRegModal(["Успех", "Регистрация прошла успешно"]))
  })
  .catch(error => {
    console.dir(error);
      dispatch(showRegModal(["Ошибка", "Что-то пошло не так, пожалуйста попробуйте позже"]))
  })
  .finally(
    reset()
  );
}

export const updateProfileThunk = (body, reset) => (dispatch) => {
  updateProfile(JSON.stringify(body))
  .then(res => {
    console.log(body)
    dispatch(updateUser(body))
    dispatch(showUpdModal(["Успех", "Обновление прошло успешно"]));
  })
  .catch(error => {
    console.dir(error);
      dispatch(showUpdModal(["Ошибка", "Что-то пошло не так, пожалуйста попробуйте позже"]))
  })
  .finally(
    reset()
  );
}

export const getProfileThunk = (id) => (dispatch) => {
  getProfile(id)
  .then(res => {
    dispatch(setUser(res))
  })
  .catch(error => {
    console.log("Error in getProfileThunk");
  });
}

const { reducer, actions } = authSlice;

export const { setIsAuth, showLoginModal, showRegModal, showUpdModal, setUser, updateUser } = actions;

export default reducer;
