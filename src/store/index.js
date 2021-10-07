import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from "./fetchDataSlice";
import themeReducer from "./themeSlice";
import charFilterReducer from "./charFilterSlice";
import locFilterReducer from "./locFilterSlice";

export default configureStore({
  reducer: {
    fetch: fetchDataReducer,
    theme: themeReducer,
    charFilter: charFilterReducer,
    locFilter: locFilterReducer
  }
})