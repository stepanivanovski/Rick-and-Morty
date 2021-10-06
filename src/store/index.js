import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from "./fetchDataSlice";
import themeReducer from "./themeSlice";
import filterReducer from "./filterSlice";

export default configureStore({
  reducer: {
    fetch: fetchDataReducer,
    theme: themeReducer,
    filter: filterReducer
  }
})