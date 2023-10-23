import axios from "axios";
const BASE_URL = "https://voicespireexeapi.azurewebsites.net";

export default axios.create({
  baseURL: BASE_URL,
});
export const axiosOne = axios.create({
  baseURL: BASE_URL,
});

export const postLogin = async (email, password) => {
  const response = await axiosOne.post(`/api/VoiceSellers/Login`, {
    email,
    password,
  });
  return response.data;
};