import { request } from '../request';

const getEpisodes = async (season) => {
  const res = await request.get(`api/Episodes/GetAll?PageNumber=1&PageSize=100&Season=${season}`);
  return res.data;
}

const getEpisodeById = async (id) => {
  const res = await request.get(`api/Episodes/GetByID?Id=${id}`);
  return res.data
}

const getFilteredEpisode = async (id) => {
  const res = await request.get(`api/Episodes/GetByName?Name=%D0%9F%D0%B8%D0%BB%D0%BE%D1%82`);
  return res.data
}

export { getEpisodes, getEpisodeById, getFilteredEpisode };
