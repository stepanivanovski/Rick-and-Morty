import { createSlice } from '@reduxjs/toolkit';

const charFilterSlice = createSlice({
  name: 'charFilter',
  initialState: {
    checkbox: {
      gender: {
        male: false,
        female: false,
        trans: false
      },
      status: {
        alive: false,
        dead: false,
        unknown: false,
      }
    },
    filterFetch: false,
    charFilter: false,
    charAlphabet: null,
  },
  reducers: {
    toggleGenderCheked(state, action) {
      state.charFilter = true;

      const obj = action.payload;
      state.checkbox.gender = {...state.checkbox.gender, ...obj}
    },

    toggleStatusCheked(state, action) {
      state.charFilter = true;

      const obj = action.payload;
      state.checkbox.status = {...state.checkbox.status, ...obj}
    },

    resetCharFilter(state) {
      state.checkbox.gender = Object.fromEntries(
        Object.entries(state.checkbox.gender)
          .map((item ) => [item[0], item[1] = false])
      );
      state.checkbox.status = Object.fromEntries(
        Object.entries(state.checkbox.status)
          .map((item ) => [item[0], item[1] = false])
      );
      state.charAlphabet = null;
      state.charFilter = false;
    },
    
    setAlphabet(state, action) {
      if (state.charAlphabet === action.payload) {
        state.charAlphabet = null;
      } else {
        state.charAlphabet = action.payload;
        state.charFilter = true;
      }
    },
  }
});

const { reducer, actions } = charFilterSlice;

export const { 
  toggleStatusCheked, 
  toggleGenderCheked, 
  resetCharFilter, 
  setAlphabet, 
} = actions;

export default reducer;