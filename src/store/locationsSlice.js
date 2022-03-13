import { createSlice } from '@reduxjs/toolkit'
import {
  getLocations,
  getLocationById,
} from '../services/api/locations.api'

const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: null,
    location: {},
    loading: true,
    error: false,
    filterState: false,
    alphabetFilterState: null,
    type: '',
    measurement: '',
    nextPage: 1,
    remainingPages: 1,
  },
  reducers: {
    locationsLoaded(state, action) {
      if (state.locations === null) {
        state.locations = action.payload
      } else {
        state.locations = [...state.locations, ...action.payload]
      }
      state.loading = false
      state.error = false
    },
    locationLoaded(state, action) {
      state.location = action.payload
      state.loading = false
      state.error = false
    },
    onLoading(state) {
      state.loading = true
      state.error = false
    },
    onError(state) {
      state.error = true
      state.loading = false
    },
    resetFilter(state) {
      state.alphabetFilterState = null
      state.filterState = false
      state.measurement = ''
      state.type = ''
      state.locations = null
      state.nextPage = 1
      state.remainingPages = 1
    },
    resetLocation(state) {
      state.location = {}
    },
    resetLocations(state) {
      state.locations = null
    },
    setType(state, action) {
      state.type = action.payload
      state.filterState = true
    },

    setMeasurement(state, action) {
      state.measurement = action.payload
      state.filterState = true
    },

    setAlphabet(state, action) {
      if (state.alphabetFilterState === action.payload) {
        state.alphabetFilterState = null
      } else {
        state.alphabetFilterState = action.payload
      }
    },
    setNextPage(state, action) {
      state.nextPage = action.payload
    },
    setRemainingPages(state, action) {
      state.remainingPages = action.payload
    },
  },
})

const { reducer, actions } = locationsSlice

export const {
  onLoading,
  onError,
  locationsLoaded,
  locationLoaded,
  resetLocation,
  resetLocations,
  resetFilter,
  setAlphabet,
  setType,
  setMeasurement,
  setNextPage,
  setRemainingPages,
} = actions

export const getLocationsThunk = (page) => (dispatch) => {
  getLocations(page)
    .then((res) => {
      dispatch(locationsLoaded(res.data))
      dispatch(setNextPage(res.nextPage))
      dispatch(setRemainingPages(res.pages))
    })
    .catch(() => {
      dispatch(onError())
    })
}


export const getLocationByIdThunk = (id) => (dispatch) => {
  dispatch(onLoading())
  getLocationById(id)
    .then((res) => {
      dispatch(locationLoaded(res))
    })
    .catch(() => {
      dispatch(onError())
    })
}

export default reducer
