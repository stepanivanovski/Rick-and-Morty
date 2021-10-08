import { request } from '../request';

const getEpisodes = async (season) => {
  const res = await request.get(`api/Episodes/GetAll?PageNumber=1&PageSize=100&Season=${season}`);
  return res.data;
}

const getEpisodeById = async (id) => {
  const res = await request.get(`api/Episodes/GetByID?Id=${id}`);
  return res.data
}

const getFilteredEpisode = async (url) => {
  const res = await request.get(`api/Episodes/GetByName?Name=${url}`);
  console.log(res.data)
  return res.data
}

export { getEpisodes, getEpisodeById, getFilteredEpisode };
