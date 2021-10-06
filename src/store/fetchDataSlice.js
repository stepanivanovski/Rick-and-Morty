import { createSlice } from '@reduxjs/toolkit';
import { configure } from '@testing-library/dom';
import { getCharacters, getCharacterById, getFilteredCharacters } from "../services/api/characters.api";
import { getEpisodes, getEpisodeById, getFilteredEpisode } from "../services/api/episodes.api";
import { getLocations, getLocationById, getFilteredLocations } from "../services/api/locations.api"
import { getUrl } from '../utils'
import { configureData } from '../utils';

const resetLoading = (state) => {
  state.loading = false;
  state.error = false;
}

const fetchDataSlice = createSlice({
  name: 'request',
  initialState: {
    characters: [],
    episodes: [],
    locations: [],
    character: {},
    location: {},
    episode: {},

    error: false,
    loading: true
  },
  reducers: {
    charactersLoaded(state, action) {
      state.characters = action.payload;
      resetLoading(state);
    },
    locationsLoaded(state, action) {
      state.locations = action.payload;
      resetLoading(state)
    },
    episodesLoaded(state, action) {
      state.episodes = action.payload;
      resetLoading(state)
    },
    characterLoaded(state, action) {
      state.character = action.payload;
      resetLoading(state)
    },
    locationLoaded(state, action) {
      state.location = action.payload;
      resetLoading(state)
    },
    episodeLoaded(state, action) {
      state.episode = action.payload;
      resetLoading(state)
    },
    onLoading(state) {
      state.loading = true;
      state.characters = [];
      state.episodes = [];
      state.locations = [];
      state.character = {};
      state.location = {};
      state.episode = {};
      state.error = false; 
    },
    onError(state) {
      state.error = true;
      state.loading= false;
    },
  }
});


const { reducer, actions } = fetchDataSlice;

export const { 
  charactersLoaded, 
  locationsLoaded,
  episodesLoaded,
  characterLoaded, 
  locationLoaded,
  episodeLoaded,
  onLoading, 
  onError 
} = actions;


export const fetchData = (text, { id, localFilterData, removeFilterData}) => (dispatch) => {
  const getData = (fetchFunc, actionCr, {id='', options}) => {
    dispatch(onLoading())
    fetchFunc(id)
      .then(res => {
        const adjustedData = configureData(res, options);
        dispatch(actionCr(adjustedData));
      })
      .catch(error => {
        dispatch(onError())
      })
  }

  switch(text) {
    case "character":
      getData(getCharacterById, characterLoaded, {id: id}) 
      break;
    case "episode":
      getData(getEpisodeById, episodeLoaded, {id: id}) 
    break;
    case "location":
      getData(getLocationById, locationLoaded, {id: id}) 
      break;
    case "locations":
      getData(getLocations, locationsLoaded, {options: localFilterData}) 
      break;
    case "characters":
      getData(getCharacters,  charactersLoaded, {options: localFilterData}) 
      break;
    case "episodes":
      getData(getEpisodes,  episodesLoaded, {id: id}) 
      break;
    case "filteredChar":
      getData(
        getFilteredCharacters, 
        charactersLoaded, 
        {id: getUrl(removeFilterData), options: localFilterData}
      )
      break;
    case "filteredLoc":
      getData(getFilteredLocations, locationsLoaded)
      break;
    case "filteredEpis":
      getData(getFilteredEpisode, episodeLoaded)
      break;    
    default:
      console.log("упс");
  }
}


export default reducer;