import { createSlice } from '@reduxjs/toolkit'
import {
  getEpisodes,
  getEpisodeById,
  getEpisodeByName,
} from '../services/api/episodes.api'

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    episodes: null,
    episode: {},
    loading: true,
    error: false,
  },
  reducers: {
    episodesLoaded(state, action) {
      state.episodes = action.payload
      state.loading = false
      state.error = false
    },
    episodeLoaded(state, action) {
      state.episode = action.payload
      state.loading = false
      state.error = false
    },
    resetEpisode(state) {
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

const { reducer, actions } = episodesSlice

export const {
  onLoading,
  onError,
  episodesLoaded,
  episodeLoaded,
  resetEpisode,
} = actions

export const getEpisodesThunk = (season) => (dispatch) => {
  dispatch(onLoading())
  getEpisodes(season)
    .then((res) => {
      dispatch(episodesLoaded(res))
    })
    .catch(() => {
      dispatch(onError())
    })
}

export const getEpisodeByNameThunk = (name) => (dispatch) => {
  getEpisodeByName(name)
    .then((res) => {
      dispatch(episodesLoaded(res))
    })
    .catch(() => {
      dispatch(onError())
    })
}

export const getEpisodeByIdThunk = (id) => (dispatch) => {
  dispatch(onLoading())
  getEpisodeById(id)
    .then((res) => {
      dispatch(episodeLoaded(res))
    })
    .catch(() => {
      dispatch(onError())
    })
}

export default reducer
