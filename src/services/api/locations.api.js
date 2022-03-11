import { request } from '../request'

const getLocations = async (pageNumber) => {
  return await request.get(`location`, { params: { page: pageNumber } })
}

const getLocationById = async (id) => {
  return await request.get(`location/${id}`)
}

export { getLocations, getLocationById }
