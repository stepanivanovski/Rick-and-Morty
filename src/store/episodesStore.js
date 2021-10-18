import { makeAutoObservable } from 'mobx';
import { getEpisodes, getEpisodeById, getEpisodeByName } from '../services/api/episodes.api';

class Episodes {
  episodes = null;
  episode = {};
  loading = true;
  error = false;

  constructor() {
    makeAutoObservable(this)
  }

  episodesLoaded = (arr) => {
    this.episodes = arr;
    this.loading = false;
    this.error = false;
  }

  episodeLoaded = (obj) => {
    this.episode = obj;
    this.loading = false;
    this.error = false;
  }

  resetEpisode = () => {
    this.episode = {}
  }

  onLoading = () => {
    this.loading = true;
    this.error = false
  }

  onError = () => {
    this.error = true;
    this.loading= false;
  }

  getEpisodes = async (season) => {
    this.onLoading()
    getEpisodes(season)
      .then(res => {
        this.episodesLoaded(res);
      })
      .catch(error => {
        this.onError()
      })
  }

  getEpisodeByName = async (name) => {
    getEpisodeByName(name)
    .then(res => {
      this.episodesLoaded(res);
    })
    .catch(error => {
      this.onError()
    })
  }
  
  getEpisodeById = async (id) => {
    this.onLoading()
    getEpisodeById(id)
      .then(res => {
        this.episodeLoaded(res);
      })
      .catch(error => {
        this.onError()
      })
  }
}

export default new Episodes();