import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from "./getRequestsSlice"

export default configureStore({
  reducer: {
    fetchData: fetchDataReducer  
  }
})