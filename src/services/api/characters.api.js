import { request } from '../request';

const getCharacters = async () => {
  const res = await request.get(`api/characters/GetAll?PageNumber=1&PageSize=100`);
  return res.data;
}

const getCharacterById = async (id) => {
  const res = await request.get(`api/characters/GetByID?Id=${id}`);
  return res.data
}

const getFilteredCharacters = async (url) => {
  const res = await request.get(`api/characters/Filter?${url}`);
  return res.data;
}

export { getCharacters, getCharacterById, getFilteredCharacters };
