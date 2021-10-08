import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from "./fetchDataSlice";
import themeReducer from "./themeSlice";
import charFilterReducer from "./charFilterSlice";
import locFilterReducer from "./locFilterSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    fetch: fetchDataReducer,
    theme: themeReducer,
    charFilter: charFilterReducer,
    locFilter: locFilterReducer
  }
})