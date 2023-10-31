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

export const getVoiceInfo = async (sellerId) => {
  const response = await axiosOne.get(`/api/VoiceDetails/${sellerId}`);
  return response.data;
};

export const uploadVoiceProfile = async (
  voiceSellerId,
  linkVoice,
  numberOfEdit,
  price
) => {
  const response = await axiosOne.post("/api/VoiceSellers/UploadVoiceProfile", {
    voiceSellerId,
    linkVoice,
    numberOfEdit,
    price,
  });
  return response.data;
};

export const uploadVoiceProject = async (
  BuyerId,
  title,
  description,
  price,
  duration,
  numberOfEdit,
  deadline,
  inputRequest,
  inputVoiceProperty,
  inputTextLength,
  inputVoiceGender,
  inputVoiceTone,
  inputVoiceRegion,
  inputVoiceLocal,
  inputVoiceInspirational,
  inputVoiceStress,
  inputVoicePronuonce,
  inputVoiceSpeed,
  linkDocDemo,
  linkDocMain,
  linkThumbnail
) => {
  const response = await axiosOne.post(
    `/api/Buyers/UploadVoiceProject/${BuyerId},${title},${description},${price},${duration},${numberOfEdit},${deadline}?request=${inputRequest}&voiceProperty=${inputVoiceProperty}&textLength=${inputTextLength}&voiceGender=${inputVoiceGender}&voiceTone=${inputVoiceTone}&voiceRegion=${inputVoiceRegion}&voiceLocal=${inputVoiceLocal}&voiceInspirational=${inputVoiceInspirational}&voiceStress=${inputVoiceStress}&voicePronuonce=${inputVoicePronuonce}&voiceSpeed=${inputVoiceSpeed}`,
    { linkDocDemo, linkDocMain, linkThumbnail }
  );
  return response.data;
};

export const sendVoiceProject = async (
  BuyerId,
  voiceSellerId,
  title,
  description,
  duration,
  deadline,
  linkDocDemo,
  linkDocMain,
  linkThumbnail,
  request
) => {
  const response = await axiosOne.post(
    `/api/Buyers/SendVoiceProject/${BuyerId},${voiceSellerId},${title},${description},${duration},${deadline}?request=${request}`,
    { linkDocDemo, linkDocMain, linkThumbnail }
  );
  return response.data;
};

export const getApprovedVoices = async () => {
  const response = await axiosOne.get(
    `/api/VoiceDetails/1,100,new,true/GetPage`
  );
  const valuesArray = Object.values(response.data.results);
  return valuesArray;
};

export const getSellerProfile = async (id) => {
  const response = await axiosOne.get(`/api/VoiceSellers/${id}`);
  return response.data;
};

export const updateSellerProfile = async (
  voiceSellerId,
  fullname,
  phone,
  email,
  password,
  birthDay,
  introduce,
  address,
  gender,
  avatarLink,
  rateAvg,
  bankName,
  bankNumber,
  bankAccountName,
  googleId,
  status
) => {
  const response = await axiosOne.put(`/api/VoiceSellers/${voiceSellerId}`, {
    voiceSellerId,
    fullname,
    phone,
    email,
    password,
    birthDay,
    introduce,
    address,
    gender,
    avatarLink,
    rateAvg,
    bankName,
    bankNumber,
    bankAccountName,
    googleId,
    status,
  });
  return response.data;
};

export const checkBankAccountForSeller = async (id) => {
  const response = await axiosOne.get(`/api/VoiceSellers/${id}`);
  if (
    !response.data?.bankName ||
    !response.data?.bankNumber ||
    !response.data?.bankAccountName
  ) {
    return false;
  } else {
    return true;
  }
};

export const checkBankAccountForBuyer = async (id) => {
  const response = await axiosOne.get(`/api/Buyers/${id}`);
  if (
    !response.data?.bankName ||
    !response.data?.bankNumber ||
    !response.data?.bankAccountName
  ) {
    return false;
  } else {
    return true;
  }
};

export const updateBankAccountForSeller = async (
  sellerId,
  bankNumber,
  bankName,
  bankAccoutName
) => {
  const response = await axiosOne.put(
    `/api/VoiceSellers/UpdateBankInformation/${sellerId},${bankNumber},${bankName},${bankAccoutName}`
  );
  return response.data;
};

export const updateBankAccountForBuyer = async (
  buyerId,
  bankNumber,
  bankName,
  bankAccoutName
) => {
  const response = await axiosOne.put(
    `/api/Buyers/UpdateBankInformation/${buyerId},${bankNumber},${bankName},${bankAccoutName}`
  );
  return response.data;
};

export const getVoice = async (sellerId) => {
  const response = await axiosOne.get(`/api/VoiceDetails/${sellerId}`);

  return response.data;
};

export const getPaymentDetail = async (projectId) => {
  const response = await axiosOne.get(
    `/api/VoiceProjects/GetPaymentDetail/${projectId}`
  );
  return response.data;
};
