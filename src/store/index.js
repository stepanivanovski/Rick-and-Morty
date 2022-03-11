import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import charactersReducer from './charactersSlice'
import locationsReducer from './locationsSlice'
import episodesReducer from './episodesSlice'

export default configureStore({
  reducer: {
    theme: themeReducer,
    characters: charactersReducer,
    locations: locationsReducer,
    episodes: episodesReducer,
  },
})
