import { request } from '../request';

const apiVersion = 'api';
const route = 'Account';
const login = encodeURIComponent("web@mail.ru");


const getProfile = async () => {
  const res = await request.get(`${apiVersion}/${route}/GetProfile?userName=${login}`);

  return res;
}

const userLogin = async (data) => {
  const res = await request.post(`${apiVersion}/${route}/Login`, data);

  if (res?.StatusCode === 404 || res?.StatusCode === 403) {
    throw new Error("User is not found");
  }
  
  return res;
};



const createProfile = async (data) => request.post(`${apiVersion}/${route}/Register`, data);
const updateProfile = async (data) => request.put(`${apiVersion}/${route}/UpdateProfile`, data);

export { getProfile, updateProfile, createProfile, userLogin };
