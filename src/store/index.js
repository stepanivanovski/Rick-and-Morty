import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from "./locationsSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    locations: locationsReducer,
  }
})