import { request } from '../request'

const getEpisodes = async (pageNumber) => {
  return await request.get(`episode`, { params: { page: pageNumber } })
}

const getEpisodeById = async (id) => {
  return await request.get(`episode/${id}`)
}

export { getEpisodes, getEpisodeById }
