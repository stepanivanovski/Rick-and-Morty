import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'ligth',
  },
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload
    },
  },
})

const { reducer, actions } = themeSlice

export const { changeTheme } = actions

export default reducer
