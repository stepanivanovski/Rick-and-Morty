import { request } from '../request'

const getCharacters = async (pageNumber, queryString) => {
  return await request.get(`character${queryString}`, { params: { page: pageNumber } })
}

const getCharacterById = async (id) => {
  return await request.get(`character/${id}`)
}

export { getCharacters, getCharacterById }
