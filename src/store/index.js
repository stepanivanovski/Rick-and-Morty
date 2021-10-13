import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./themeSlice";
import charactersReducer from "./charactersSlice";
import locationsReducer from "./locationsSlice";
import episodesReducer from "./episodesSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    theme: themeReducer,
    characters: charactersReducer,
    locations: locationsReducer,
    episodes: episodesReducer
  }
})