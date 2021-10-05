import { createSlice } from '@reduxjs/toolkit';
import { getCharacters, getCharacterById } from "../services/api/characters.api";
import { getEpisodes, getEpisodeById } from "../services/api/episodes.api";
import { getLocations, getLocationById } from "../services/api/locations.api"

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


export const fetchData = (text, Id) => (dispatch) => {
  const getData = (fetchFunc, actionCr, id) => {
    dispatch(onLoading())
    fetchFunc(id)
      .then(res => {
        console.log(res)
        dispatch(actionCr(res));
      })
      .catch(error => {
        dispatch(onError())
      })
  }

  switch(text) {
    case "character":
      getData(getCharacterById, characterLoaded, Id) 
      break;
    case "episode":
      getData(getEpisodeById, episodeLoaded, Id) 
    break;
    case "location":
      getData(getLocationById, locationLoaded, Id) 
      break;
    case "locations":
      getData(getLocations, locationsLoaded) 
      break;
    case "characters":
      getData(getCharacters,  charactersLoaded) 
      break;
    case "episodes":
      getData(getEpisodes,  episodesLoaded, Id) 
      break;
    default:
      console.log("упс");
  }
}


export default reducer;