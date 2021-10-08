import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: true,
  },
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
  }
});

const { reducer, actions } = authSlice;

export const { setIsAuth } = actions;

export default reducer;
