import { createSlice } from '@reduxjs/toolkit';
import { getLocations, getLocationById, getFilteredLocations } from '../services/api/locations.api';

const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: null,
    location: {},
    loading: true,
    error: false,
    filterState: false,
    alphabetFilterState: null,
    type:"",
    measurement:""
  },
  reducers: {
    locationsLoaded(state, action) {
      state.locations = action.payload;
      state.loading = false;
      state.error = false;
    },
    locationLoaded(state, action) {
      state.location = action.payload;
      state.loading = false;
      state.error = false;
    },
    onLoading(state) {
      state.loading = true;
      state.error = false
    },
    onError(state) {
      state.error = true;
      state.loading= false;
    },
    resetFilter(state) {
      state.alphabetFilterState = null;
      state.filterState = false;
      state.measurement = "";
      state.type = "";
    },
    resetLocation(state) {
      state.location = {}
    },
    resetLocations(state) {
      state.locations = null;
    },
    setType(state, action) {
      state.type = action.payload;
      state.filterState = true;
    },

    setMeasurement(state, action) {
      state.measurement = action.payload;
      state.filterState = true;
    },
    
    setAlphabet(state, action) {
      if (state.alphabetFilterState === action.payload) {
        state.alphabetFilterState = null;
      } else {
        state.alphabetFilterState = action.payload;
      }
    }
  }
});

const { reducer, actions } = locationsSlice;

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
  setMeasurement
} = actions;

export const getLocationsThunk = () => (dispatch) => {
  getLocations()
    .then(res => {
      dispatch(locationsLoaded(res));
    })
    .catch(error => {
      dispatch(onError())
    })
}

export const getFilteredLocationsThunk = (options, name) => (dispatch) => {
  dispatch(resetLocations())
  getFilteredLocations(options, name)
    .then(res => {
      dispatch(locationsLoaded(res));
    })
    .catch(error => {
      dispatch(onError())
    })
}

export const getLocationByIdThunk = (id) => (dispatch) => {
  dispatch(onLoading())
  getLocationById(id)
    .then(res => {
      dispatch(locationLoaded(res));
    })
    .catch(error => {
      dispatch(onError())
    })
}

export default reducer;