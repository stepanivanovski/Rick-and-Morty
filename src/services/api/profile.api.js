import { request } from '../request';

const apiVersion = 'api';
const route = 'Account';
const login = encodeURIComponent("web@mail.ru");


const getProfile = async () => {
  const res = await request.get(`${apiVersion}/${route}/GetProfile?userName=${login}`);

  return res.data;
}

const userLogin = async (data) => {
  const res = await request.post(`${apiVersion}/${route}/Login`, data);

  if (res?.StatusCode === 404 || res?.StatusCode === 403) {
    throw new Error("User is not found");
  }
  
  return res;
};

const createProfile = async (data) => {
  const res = await request.post(`${apiVersion}/${route}/Register`, data);

  if (res?.message !== "User Created Successfully") {
    throw new Error("Error in createProfile");
  }

  return res;
}

const updateProfile = async (data) => {
  const res = await request.put(`${apiVersion}/${route}/UpdateProfile`, data)

  if (res?.message !== "User updated successfully") {
    throw new Error("Error in updateProfile");
  }

  return res;
}

export { getProfile, updateProfile, createProfile, userLogin };
