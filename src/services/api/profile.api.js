import { request } from '../request';

const apiVersion = 'api';
const route = 'Account';
const login = encodeURIComponent("web@mail.ru");


const getProfile = async () => {
  const res = await request.get(`${apiVersion}/${route}/GetProfile?userName=${login}`);

  return res.data;
}

const userLogin = async (data) => {
  const res = await request.post(`${apiVersion}/${route}/Login`, data, "headers");
  
  return res;
};

const createProfile = async (data) => {
  const res = await request.post(`${apiVersion}/${route}/Register`, data, "headers");

  return res;
}

const updateProfile = async (data) => {
  const res = await request.put(`${apiVersion}/${route}/UpdateProfile`, data, "headers")

  return res;
}

const updateAvatar = async (files) => {
  console.log(files);
  const file = files[0];

  const formData = new FormData();

  formData.append('file', file);

  console.log(formData);

  const res = await request.post(`${apiVersion}/ImageUpload/Upload`, formData)

  return res;
}

export { getProfile, updateProfile, createProfile, userLogin, updateAvatar };
