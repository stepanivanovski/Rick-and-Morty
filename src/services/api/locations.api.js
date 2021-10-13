import { request } from '../request';
import { getLocationsUrl } from '../../utils';

const getLocations = async () => {
  const res = await request.get(`api/Locations/GetAll?PageNumber=1&PageSize=100`);
  return res.data;
}

const getLocationById = async (id) => {
  const res = await request.get(`api/Locations/GetByID?Id=${id}`);
  return res.data
}

const getFilteredLocations = async (options, name) => {
  const url = getLocationsUrl(options, name);
  
  const res = await request.get(`api/Locations/Filter?${url}`);
  return res.data;
}

export { getLocations, getLocationById, getFilteredLocations };
