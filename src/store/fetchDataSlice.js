import { createSlice } from '@reduxjs/toolkit'
import {
  getCharacters,
  getCharacterById,
  getFilteredCharacters,
} from '../services/api/characters.api'
import {
  getEpisodes,
  getEpisodeById,
  getEpisodeByName,
} from '../services/api/episodes.api'
import {
  getLocations,
  getLocationById,
  getFilteredLocations,
} from '../services/api/locations.api'
import { getLocationsUrl } from '../utils'
import { configureData } from '../utils'

export const resetLoading = (state) => {
  state.loading = false
  state.error = false
}

const fetchDataSlice = createSlice({
  name: 'request',
  initialState: {
    characters: null,
    episodes: [],
    locations: null,
    character: {},
    location: {},
    episode: {},

    error: false,
    loading: true,
  },
  reducers: {
    charactersLoaded(state, action) {
      state.characters = action.payload
      resetLoading(state)
    },
    locationsLoaded(state, action) {
      state.locations = action.payload
      resetLoading(state)
    },
    episodesLoaded(state, action) {
      state.episodes = action.payload.sort((a, b) => {
        let seriesA = a['series']
        let seriesB = b['series']
        if (seriesA > seriesB) return 1
        if (seriesB > seriesA) return -1
        return 0
      })
      resetLoading(state)
    },
    characterLoaded(state, action) {
      state.character = action.payload
      resetLoading(state)
    },
    locationLoaded(state, action) {
      state.location = action.payload
      resetLoading(state)
    },
    episodeLoaded(state, action) {
      state.episode = action.payload
      resetLoading(state)
    },
    resetAllData(state) {
      state.characters = null
      state.episodes = []
      state.locations = null
      state.character = {}
      state.location = {}
      state.episode = {}
    },
    onLoading(state) {
      state.loading = true
      state.error = false
    },
    onError(state) {
      state.error = true
      state.loading = false
    },
  },
})

const { reducer, actions } = fetchDataSlice

export const {
  charactersLoaded,
  locationsLoaded,
  episodesLoaded,
  characterLoaded,
  locationLoaded,
  episodeLoaded,
  onLoading,
  onError,
  resetAllData,
} = actions

export const fetchData =
  (text, { id, localFilterData, removeFilterData }, nameFilter = '') =>
  (dispatch) => {
    const getData = (fetchFunc, actionCreator, { id = '', options = [] }) => {
      dispatch(resetAllData())
      dispatch(onLoading())
      fetchFunc(id)
        .then((res) => {
          const adjustedData = configureData(res, options)
          dispatch(actionCreator(adjustedData))
        })
        .catch((error) => {
          dispatch(onError())
        })
    }

    switch (text) {
      case 'character':
        getData(getCharacterById, characterLoaded, { id: id })
        break
      case 'episode':
        getData(getEpisodeById, episodeLoaded, { id: id })
        break
      case 'location':
        getData(getLocationById, locationLoaded, { id: id })
        break
      case 'locations':
        getData(getLocations, locationsLoaded, {
          options: [localFilterData, 'name'],
        })
        break
      case 'characters':
        getData(getCharacters, charactersLoaded, {
          options: [localFilterData, 'fullName'],
        })
        break
      case 'episodes':
        getData(getEpisodes, episodesLoaded, { id: id })
        break
      case 'filteredChar':
        getData(
          getFilteredCharacters,
          charactersLoaded
          // {id: getCharUrl(removeFilterData, nameFilter), options: [localFilterData, "fullName"]}
        )
        break
      case 'filteredLoc':
        getData(getFilteredLocations, locationsLoaded, {
          id: getLocationsUrl(removeFilterData, nameFilter),
          options: [localFilterData, 'name'],
        })
        break
      case 'filteredEpis':
        getData(getEpisodeById, episodesLoaded, { id: nameFilter })
        break
      default:
        console.log('упс')
    }
  }

export default reducer
