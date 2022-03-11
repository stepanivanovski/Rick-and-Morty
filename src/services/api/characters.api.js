import { request } from '../request'
import { getCharactersUrl } from '../../utils'

const getCharacters = async (pageNumber) => {
  const res = await request.get(
    `api/characters/GetAll?PageNumber=${pageNumber}&PageSize=10`
  )
  return res
}

const getCharacterById = async (id) => {
  const res = await request.get(`api/characters/GetByID?Id=${id}`)
  return res.data
}

const getFilteredCharacters = async (options, name) => {
  const url = getCharactersUrl(options, name)

  const res = await request.get(`api/characters/Filter?${url}`)
  return res.data
}

export { getCharacters, getCharacterById, getFilteredCharacters }
