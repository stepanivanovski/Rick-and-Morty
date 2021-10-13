import { createSlice } from '@reduxjs/toolkit';
import { getCharacters, getCharacterById, getFilteredCharacters } from '../services/api/characters.api';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: null,
    character: {},
    loading: true,
    error: false,
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
    filterState: false,
    alphabetFilterState: null,
  },
  reducers: {
    charactersLoaded(state, action) {
      state.characters = action.payload;
      state.loading = false;
      state.error = false;
    },
    characterLoaded(state, action) {
      state.character = action.payload;
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
    toggleGender(state, action) {
      state.filterState = true;

      const obj = action.payload;
      state.checkbox.gender = {...state.checkbox.gender, ...obj}
    },

    toggleStatus(state, action) {
      state.filterState = true;

      const obj = action.payload;
      state.checkbox.status = {...state.checkbox.status, ...obj}
    },
    resetCharacter(state) {
      state.character = {}
    },
    resetCharacters(state) {
      state.characters = null;
    },

    resetCharactersFilter(state) {
      state.checkbox.gender = Object.fromEntries(
        Object.entries(state.checkbox.gender)
          .map((item ) => [item[0], item[1] = false])
      );
      state.checkbox.status = Object.fromEntries(
        Object.entries(state.checkbox.status)
          .map((item ) => [item[0], item[1] = false])
      );
      state.alphabetFilterState = null;
      state.filterState = false;
    },
    
    setAlphabet(state, action) {
      if (state.alphabetFilterState === action.payload) {
        state.alphabetFilterState = null;
      } else {
        state.alphabetFilterState = action.payload;
      }
    },
  }
});

const { reducer, actions } = charactersSlice;

export const { 
  onLoading,
  onError,
  charactersLoaded,
  characterLoaded,
  toggleStatus, 
  toggleGender, 
  resetCharactersFilter,
  resetCharacter, 
  resetCharacters, 
  setAlphabet
} = actions;

export const getCharactersThunk = () => (dispatch) => {
  getCharacters()
    .then(res => {
      dispatch(charactersLoaded(res));
    })
    .catch(error => {
      dispatch(onError())
    })
}

export const getFilteredCharactersThunk = (options) => (dispatch) => {
  dispatch(resetCharacters());
  getFilteredCharacters(options)
    .then(res => {
      dispatch(charactersLoaded(res));
    })
    .catch(error => {
      dispatch(onError())
    })
}

export const getCharacterByIdThunk = (id) => (dispatch) => {
  dispatch(onLoading())
  getCharacterById(id)
    .then(res => {
      dispatch(characterLoaded(res));
    })
    .catch(error => {
      dispatch(onError())
    })
}


export default reducer;