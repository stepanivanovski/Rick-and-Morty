import { request } from '../request';

const getLocations = async () => {
  const res = await request.get(`api/Locations/GetAll?PageNumber=1&PageSize=100`);
  return res.data;
}

const getLocationById = async (id) => {
  const res = await request.get(`api/Locations/GetByID?Id=${id}`);
  return res.data
}

const getFilteredLocations = async (url) => {
  const res = await request.get(`api/Locations/Filter?${url}`);
  return res.data;
}

export { getLocations, getLocationById, getFilteredLocations };
