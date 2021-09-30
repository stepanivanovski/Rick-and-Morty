import { request } from '../request';

const apiVersion = 'api';
const route = 'Account';
const login = encodeURIComponent("web@mail.ru");


const getProfile = async () => {
  const res = await request.get(`${apiVersion}/${route}/GetProfile?userName=${login}`);
  return res.data;
}

const createProfile = async (data) => request.post(`${apiVersion}/${route}/Register`, data);
const userLogin = async (data) => request.post(`${apiVersion}/${route}/Login`, data);
const updateProfile = async (data) => request.put(`${apiVersion}/${route}/UpdateProfile`, data);

export { getProfile, updateProfile, createProfile, userLogin };
