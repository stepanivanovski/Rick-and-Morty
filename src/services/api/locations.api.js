import { request } from '../request'
import { getLocationsUrl } from '../../utils'

const getLocations = async (page) => {
  const res = await request.get(
    `api/Locations/GetAll?PageNumber=${page}&PageSize=10`
  )
  return res
}

const getLocationById = async (id) => {
  const res = await request.get(`api/Locations/GetByID?Id=${id}`)
  return res.data
}

const getFilteredLocations = async (options, name) => {
  const url = getLocationsUrl(options, name)
  const res = await request.get(`api/Locations/Filter?${url}`)
  return res.data
}

export { getLocations, getLocationById, getFilteredLocations }
