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

export const getPosts = async (currentPage, PageSize) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/SearchByFilter/${currentPage},${PageSize}`
  );
  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const getPostById = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetByID/${projectId}`
  );
  return response.data;
};

export const getAllJobsForTracking = async (
  currentPage,
  PageSize,
  sellerId
) => {
  const response = await axiosOne.get(
    `/api/VoiceSellers/SearchVoiceJobBySellerId/${currentPage},${PageSize},${sellerId}`
  );
  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const getOfficialVoices = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetTransactionOfProject/${projectId}`
  );
  console.log(response.data);
  return response.data;
};
