import { createSlice } from '@reduxjs/toolkit'
import { getQueryString } from '../utils'
import { getCharacters, getCharacterById } from '../services/api/characters.api'

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: null,
    character: {},
    loading: false,
    error: false,
    filter: {
      name: '',
      gender: '',
      status: '',
    },
    isFilterOn: false,
    page: 1,
    totalPages: 1,
    alphabetFilterState: null,
  },
  reducers: {
    getCharactersStart(state) {
      state.loading = true
      state.error = false
    },
    getCharactersSuccess(state, action) {
      if (state.characters === null) {
        state.characters = action.payload.results
        state.totalPages = action.payload.info.pages
      } else {
        state.characters = [...state.characters, ...action.payload.results]
      }
      state.loading = false
      state.error = false
    },
    getCharacterSuccess(state, action) {
      state.character = action.payload
      state.loading = false
      state.error = false
    },
    getCharactersFailure(state) {
      state.error = true
      state.loading = false
    },
    toggleGender(state, action) {
      state.isFilterOn = true
      state.filter.gender = action.payload
    },
    toggleStatus(state, action) {
      state.isFilterOn = true
      state.filter.status = action.payload
    },
    setSerachQuery(state, action) {
      state.page = 1
      state.filter.name = action.payload
    },
    resetCharacter(state) {
      state.character = {}
    },
    resetCharacters(state) {
      console.log('reset сработало');
      state.characters = null
      state.page = 1
      state.totalPages = 1
    },
    resetCharactersFilter(state) {
      state.filter.gender = ''
      state.filter.status = ''
      state.alphabetFilterState = null
      state.characters = null
      state.page = 1
      state.totalPages = 1
      state.isFilterOn = false
    },
    setAlphabetFilter(state, action) {
      if (state.alphabetFilterState === action.payload) {
        state.alphabetFilterState = null
      } else {
        state.alphabetFilterState = action.payload
      }
    },
    setPage(state) {
      state.page++
    }
  },
})

const { reducer, actions } = charactersSlice

export const {
  getCharactersStart,
  getCharactersFailure,
  getCharactersSuccess,
  getCharacterSuccess,
  toggleStatus,
  toggleGender,
  setSerachQuery,
  resetCharactersFilter,
  resetCharacter,
  resetCharacters,
  setAlphabetFilter,
  setPage
} = actions

export const getCharactersThunk =
  ({ page, filter }) =>
  (dispatch) => {
    dispatch(getCharactersStart())
    getCharacters(page, getQueryString(filter))
      .then((response) => {
        dispatch(getCharactersSuccess(response))
      })
      .catch((error) => {
        console.log(error);
        dispatch(getCharactersFailure())
      })
  }

export const getCharactersByNameThunk =
  ({ page, filter, name }) =>
  (dispatch) => {
    dispatch(resetCharacters())
    dispatch(getCharactersStart())
    getCharacters(page, getQueryString({...filter, name}))
      .then((response) => {
        dispatch(getCharactersSuccess(response))
      })
      .catch((error) => {
        console.dir(error);
        dispatch(getCharactersFailure())
      })
  }

export const getCharacterByIdThunk = (id) => (dispatch) => {
  dispatch(getCharactersStart())
  getCharacterById(id)
    .then((res) => {
      dispatch(getCharacterSuccess(res))
    })
    .catch(() => {
      dispatch(getCharactersFailure())
    })
}

export default reducer
