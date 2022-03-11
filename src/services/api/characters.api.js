import { request } from '../request'

const getCharacters = async (pageNumber) => {
  return await request.get(`character`, { params: { page: pageNumber } })
}

const getCharacterById = async (id) => {
  return await request.get(`character/${id}`)
}

export { getCharacters, getCharacterById }
