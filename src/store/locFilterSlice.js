import { createSlice } from '@reduxjs/toolkit';

const locFilterSlice = createSlice({
  name: 'locFilter',
  initialState: {
    locFilter: false,
    locAlphabet: null,
    type:"",
    measurement:""
  },
  reducers: {
    resetLocFilter(state) {
      state.locAlphabet = null;
      state.locFilter = false;
      state.measurement = "";
      state.type = "";
    },

    setLocType(state, action) {
      state.type = action.payload;
      state.locFilter = true;
    },

    setLocMeasurement(state, action) {
      state.measurement = action.payload;
      state.locFilter = true;
    },
    
    setAlphabet(state, action) {
      if (state.locAlphabet === action.payload) {
        state.locAlphabet = null;
      } else {
        state.locAlphabet = action.payload;
        state.locFilter = true;
      }
    },
  }
});

const { reducer, actions } = locFilterSlice;

export const { 
  resetLocFilter, 
  setAlphabet,
  setLocType,
  setLocMeasurement
} = actions;

export default reducer;