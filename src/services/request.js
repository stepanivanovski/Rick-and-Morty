import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

export const request = {
  get: async (url, params={}) =>  {
    return await axios.get(url, params)
      .then(response => response.data)
  }
}
