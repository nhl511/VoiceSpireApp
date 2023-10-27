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

export const getAllProjectsForTracking = async (buyerId) => {
  const response = await axiosOne.get(
    `/api/Buyers/GetProjectByBuyerId/${buyerId}`
  );

  return response.data;
};

export const getOfficialVoices = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetTransactionOfProject/${projectId}`
  );
  return response.data;
};

export const getCandidates = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetListDemoForProject/${projectId}`
  );
  return response.data;
};

export const applyToProject = async (
  voiceProjectId,
  voiceSellerId,
  linkDemo
) => {
  const response = await axiosOne.post("/api/VoiceSellers/ApllyToProject", {
    voiceProjectId,
    voiceSellerId,
    linkDemo,
  });
  return response.data;
};

export const acceptDemo = async (voiceJobId, projectId) => {
  const response = await axiosOne.put(
    `/api/Buyers/ApproveDemo/${voiceJobId},${projectId}`
  );
  return response.data;
};

export const sendMainVoice = async (
  voiceProjectId,
  voiceSellerId,
  linkVoice
) => {
  const response = await axiosOne.post(
    `/api/VoiceSellers/SendMainVoiceForProject`,
    {
      voiceProjectId,
      voiceSellerId,
      linkVoice,
    }
  );
  return response.data;
};

export const sendFeedback = async (transactionId, inputFeedBack) => {
  const response = await axiosOne.put(
    `/api/Buyers/RequestEdit/${transactionId}?feedback=${inputFeedBack}`
  );
  return response.data;
};

export const acceptOfficialVoice = async (transactionId) => {
  const response = await axiosOne.put(
    `/api/Buyers/AcceptTransaction/${transactionId}`
  );
  return response.data;
};
